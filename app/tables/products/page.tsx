"use client"

import { Products } from "@/app/static/mocks"
import { EditModal } from "@/components/EditModal"
import { ExtendedTable } from "@/components/ExtendedTable"
import { ProductsType } from "@/components/types/Products"
import { useState } from "react"

export default function ProductsPage() {
  const [data, setData] = useState<ProductsType[]>(Products)
  const [editing, setEditing] = useState<ProductsType[] | null>(null)

  const handleEditing = (item: ProductsType[]) => {
    setEditing(item)
  }

  const handleSave = (updatedItems: ProductsType) => {
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
