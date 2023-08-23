import Link from "next/link";
import { prisma } from "./db";
import { PassengerItem } from "@/components/PassengerItem";

// Function to find all passengers in data base
function getPassengers(){
  return prisma.passenger.findMany()
}

// Toggle passenger status, via server action 'use server'
async function togglePassenger(id: string, complete: boolean) {
  "use server"

  await prisma.passenger.update({ where: { id }, data: { complete } })
}


export default async function Home(){
  //Array to create list of passengers
  const passengers = await getPassengers()
  

  return(
    <>
      <header className="flex justify-between items-center mb-4 ">
        <h1 className="text-2xl">List of passengers</h1>
        <Link className="border border-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none" href="/new">New</Link>
        <Link className="border border-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none" href="/signup">Create</Link>
        <Link className="border border-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none" href="/signin">Log In</Link>
      </header>
      <ul className="pl-4">
        {/* Create list of passengers */}
        {passengers.map(passenger => (
          <PassengerItem key={passenger.id} {...passenger} togglePassenger={togglePassenger}/>
        ))}
      </ul>
    </>
  )
}