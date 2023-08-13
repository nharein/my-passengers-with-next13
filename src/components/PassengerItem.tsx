"use client"

import { useState } from "react"

type PassengerItemProps = {
  id: string
  title: string
  complete: boolean
  togglePassenger: (id: string, complete:boolean) => void
}

export function PassengerItem({ id, title, complete, togglePassenger}: PassengerItemProps) {
  // const [passID, setPassID] = useState(id)
  return (
    <li className="flex gap-1 items-center">
      <input 
        id={id} 
        type="checkbox" 
        className="cursor-pointer peer"
        defaultChecked={complete}
        onChange={e => togglePassenger(id, e.target.checked)}/>
      <label htmlFor={id} className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500" >{title}</label>
    </li>
  )
}