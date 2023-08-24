'use server'

import { prisma } from "@/app/db";
import { redirect } from "next/navigation";

export async function getPassengers(){
  return await prisma.passenger.findMany()
}

// Add active user to list
export async function addCurrentUser(sessionUserName: string) {
  try{
    if (typeof(sessionUserName) !== 'string' || sessionUserName.length === 0){
      throw new Error("Invalid Title")
    }
    
    const exist = await prisma.passenger.findFirst({
      where: {
        title: sessionUserName
      }
    })

    if (exist) {
      return null
    }

    await prisma.passenger.create({ data: {title: sessionUserName, complete:false} })
  } catch(e){
    console.log(e)
  } finally {

  }
}
  

export async function clearAll(data: FormData){
  "use server"
  
  const password = data.get("password")?.valueOf()
    try {
      if (typeof(password) !== 'string' || password !== "qqwwee11"){
        throw new Error("Invalid password")
      }
      await prisma.passenger.deleteMany({})

    } catch(e){
      console.log(e)
    } finally {
      redirect('/')
    }
}

export async function deleteOnePassenger(id: string) {
  "use server"
  try{
    await prisma.passenger.delete({ where: { id } })
  } catch(e) {
    console.log(e)
  } finally {
  }
 
}