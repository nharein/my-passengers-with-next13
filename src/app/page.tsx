import Link from "next/link";
import { prisma } from "./db";
import { PassengerItem } from "@/components/PassengerItem";

function getPassengers(){
  return prisma.passenger.findMany()
}

async function togglePassenger(id: string, complete: boolean) {
  "use server"

  await prisma.passenger.update({ where: { id }, data: { complete } })
}

export default async function Home(){
  const passengers = await getPassengers()
  

  return(
    <>
      <header className="flex justify-between items-center mb-4 ">
        <h1 className="text-2xl">List of passengers</h1>
        <Link className="border border-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none" href="/new">New</Link>
      </header>
      <ul className="pl-4">
        {passengers.map(passenger => (
          <PassengerItem key={passenger.id} {...passenger} togglePassenger={togglePassenger}/>
        ))}
      </ul>
    </>
  )
}