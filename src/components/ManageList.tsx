'use client'

import { Passenger } from "@prisma/client"
import { PassengerDelete } from "@/components/PassengerDelete";
import { deleteOnePassenger } from "@/actions/actions";
import { useState } from "react";
import { useRouter } from "next/navigation";

type props = {
  passengers: Passenger[]
}

export default function ManageList({passengers}: props){
  const router = useRouter()

  const [list, setList]: [Passenger[], (res: Passenger[]) => void] = useState(passengers)

  const deletePassenger = (id: string) => {
    deleteOnePassenger(id)
    router.refresh()
    const newList = list.filter(item => item.id != id)
    setList(newList)
  }

  return(
    <ul>
      <div>dummy text</div>
      {list.map(passenger => (
          <PassengerDelete key={passenger.id} {...passenger} deleteOnePassenger={deletePassenger}/>
        ))}

    </ul>
  )
}