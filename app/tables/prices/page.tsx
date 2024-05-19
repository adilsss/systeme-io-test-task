"use client"

import { PricePlans } from "@/app/static/mocks"
import { EditModal } from "@/components/EditModal"
import { ExtendedTable } from "@/components/ExtendedTable"
import { PricesType } from "@/components/types/Prices"
import { useState } from "react"

export default function PricesPage() {
  const [data, setData] = useState<PricesType[]>(PricePlans)
  const [editing, setEditing] = useState<PricesType[] | null>(null)

  const handleEditing = (item: PricesType[]) => {
    setEditing(item)
  }

  const handleSave = (updatedItems: PricesType) => {
    setData(prevData =>
      prevData.map(item => (item.id === updatedItems.id ? updatedItems : item))
    )

    setEditing(null)
  }

  return (
    <main className="px-8">
      <div className="flex justify-center">
        <ExtendedTable data={data} onEdit={handleEditing} />
        {editing && (
          <EditModal
            isOpen={Boolean(editing)}
            data={editing}
            onSave={handleSave}
          />
        )}
      </div>
    </main>
  )
}
