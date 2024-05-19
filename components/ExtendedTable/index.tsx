import { Check, Edit2Icon, X } from "lucide-react"
import { useEffect, useState } from "react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "../ui/select"
import { Table, TableBody, TableCell, TableHeader, TableRow } from "../ui/table"

import {
  capitalize,
  formatDateString,
  generateKeyValueString,
  isValidDate
} from "./helpers"

export type Props<T> = {
  data: T[]
  onEdit: (row: any) => void
}

export const ExtendedTable = <T extends Record<string, any>>({
  data,
  onEdit
}: Props<T>) => {
  const [sortedRows, setRows] = useState<T[]>(data)
  const [order, setOrder] = useState<string>("asc")
  const [sortKey, setSortKey] = useState<keyof T>(
    Object.keys(data[0])[0] as keyof T
  )

  useEffect(() => {
    setRows(data)
  }, [data])

  const formatTableItem = (item: string | boolean) => {
    if (typeof item === "boolean") {
      return item ? <Check /> : <X />
    }
    if (typeof item === "object") {
      return generateKeyValueString(item)
    }

    if (isValidDate(item)) {
      return formatDateString(item)
    }

    return item
  }

  const filter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value

    if (value) {
      setRows([
        ...data.filter(data => {
          return Object.values(data).join("").toLowerCase().includes(value)
        })
      ])
    } else {
      setRows(data)
    }
  }

  const sort = (value: keyof T, order: string) => {
    const returnValue = order === "desc" ? 1 : -1

    setSortKey(value)
    setRows([
      ...sortedRows.sort((a, b) => {
        return a[value] > b[value] ? returnValue * -1 : returnValue
      })
    ])
  }

  const updateOrder = () => {
    const updatedOrder = order === "asc" ? "desc" : "asc"

    setOrder(updatedOrder)
    sort(sortKey, updatedOrder)
  }

  return (
    <div className="w-full">
      <div className="flex gap-4">
        <Input
          className="max-w-[300px]"
          type="text"
          placeholder="Search items"
          onChange={filter}
        />
        <Select
          value={sortKey as string}
          onValueChange={(value: string) => sort(value as keyof T, order)}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>
          <SelectContent>
            {data &&
              Object.keys(data[0]).map((entry, index) => (
                <SelectItem value={entry} key={index}>
                  Order by {capitalize(entry)}
                </SelectItem>
              ))}
          </SelectContent>
        </Select>
        <Button variant="secondary" onClick={updateOrder}>
          Order ({order})
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            {Object.keys(data[0]).map((entry, index) => (
              <TableCell key={index}>{capitalize(entry)}</TableCell>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedRows.map((row, index) => (
            <TableRow key={index}>
              {Object.values(row).map((entry, columnIndex) => (
                <TableCell key={columnIndex}>
                  {formatTableItem(entry)}
                </TableCell>
              ))}
              <TableCell>
                <Button
                  onClick={() => onEdit(row)}
                  variant="outline"
                  size="icon">
                  <Edit2Icon />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {!sortedRows.length && <h1>No result</h1>}
    </div>
  )
}
