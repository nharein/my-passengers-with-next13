import Link from "next/link";
import { PassengerDelete } from "@/components/PassengerDelete";
import { useState } from "react";
import { prisma } from "@/app/db";
import { redirect } from "next/navigation";
import { getPassengers, clearAll, deleteOnePassenger } from "@/actions/actions";
// Import server actions. It allows to make this component client
import DeleteForm from "@/components/DeleteForm";
import ManageList from "@/components/ManageList";


// At this page you can delete passengers

export default async function ManagePassengers(){

  const passengers = await getPassengers()

  return (
    <>
      <Link href=".." className="border border-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none" >Cancel</Link>
      <div className="flex justify-between">
        <header className="flex justify-between items-center mb-4 ">
          <h1 className="text-xl">Delete all users</h1>
        </header>
        {/* Used clearAll server action */}
        {/* With separate component */}
        <DeleteForm clearAll={clearAll}/> 
        {/* With simple form just right here */}
        <form action={clearAll} className="flex gap-2" >
          <input 
            type="text" 
            name="password" 
            placeholder="password here"
            className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"/>
            <div className="flex gap-1 justify-end">
              <button type="submit" className="border border-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none">Purge</button>
            </div>
        </form>
      </div>
      {/* Used server action  deleteOnePassenger */}
      {/* With separate component */}
      <ManageList passengers={passengers}/>
      {/* Without separate component */}
      <ul className="pl-4">
        {passengers.map(passenger => (
          <PassengerDelete key={passenger.id} {...passenger} deleteOnePassenger={deleteOnePassenger}/>
        ))}
      </ul>
    </>
    )
}

//  async function ClearAll(data: FormData){
//   "use server"
  
//   const password = data.get("password")?.valueOf()
//     try {
//       if (typeof(password) !== 'string' || password !== "qqwwee11"){
//         throw new Error("Invalid password")
//       }
//       await prisma.passenger.deleteMany({})

//     } catch(e){
//       console.log(e)
//     } finally {
//       redirect('/')
//     }

// }

//  async function deleteOnePassenger(id: string) {
//   "use server"
//   try{
//     await prisma.passenger.delete({ where: { id } })
//   } catch(e) {
//     console.log(e)
//   } finally {
//   }
 
// }

//  async function getPassengers(){
//   return await prisma.passenger.findMany()
// }

