import React, { useState } from "react"

import { Button } from "../ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from "../ui/dialog"
import { Input } from "../ui/input"
import { Label } from "../ui/label"

interface Props<T> {
  data: T[]
  isOpen: boolean
  onSave: (data: T) => void
}

export const EditModal = <T,>({ data, isOpen, onSave }: Props<T>) => {
  const [modalData, setModalData] = useState<T[]>(data)

  if (!isOpen) return null

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setModalData(prevModalData => ({
      ...prevModalData,
      [e.target.name]: e.target.value
    }))
  }

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault()
    onSave(modalData as T)
  }

  return (
    <Dialog open={isOpen} onOpenChange={() => onSave(modalData as T)}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          <form onSubmit={submitForm} className="mt-4">
            {Object.keys(data).map(
              key =>
                typeof data[key as keyof typeof data] !== "object" && (
                  <div key={key} className="mb-2">
                    <Label htmlFor={key}>{key}</Label>
                    <Input
                      type="text"
                      id={key}
                      name={key}
                      value={String(modalData[key as keyof typeof data])}
                      onChange={handleChange}
                      disabled={key === "active" || key === "id"}
                      className="mt-2"
                    />
                  </div>
                )
            )}
            <Button variant="secondary" type="submit">
              Save
            </Button>
          </form>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  )
}
