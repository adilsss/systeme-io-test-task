"use client"

import { Pages } from "@/app/static/mocks"
import { EditModal } from "@/components/EditModal"
import { ExtendedTable } from "@/components/ExtendedTable"
import { PagesType } from "@/components/types/Pages"
import { useState } from "react"

export default function PagesPage() {
  const [data, setData] = useState<PagesType[]>(Pages)
  const [editing, setEditing] = useState<PagesType[] | null>(null)

  const handleEditing = (item: PagesType[]) => {
    setEditing(item)
  }

  const handleSave = (updatedItems: PagesType) => {
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
