"use client"

import { useRouter } from "next/navigation"

type PassengerItemProps = {
  id: string
  title: string
  complete: boolean
  deleteOnePassenger: (id: string) => void
}

export function PassengerDelete({ id, title, complete, deleteOnePassenger}: PassengerItemProps) {
  const router = useRouter()

  const handelDelete = () => {
    deleteOnePassenger(id)
    router.refresh()
  }

  return (
    <li className="flex gap-1 items-center">
      <input 
        id={id} 
        type="checkbox" 
        className="cursor-pointer peer"
        defaultChecked={complete}
        />
      <label htmlFor={id} className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500" >{title}</label>
      <button
        className="border border-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
        onClick={() => handelDelete()}>delete</button>
    </li>
  )
}