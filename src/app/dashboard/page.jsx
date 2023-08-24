'use client'

import Link from "next/link";
import { useSession } from "next-auth/react";
import { addCurrentUser } from "@/actions/actions";
import { signOut } from "next-auth/react"



export default function Dashboard() {
  const { data: session, status} = useSession()
  console.log(session)

  const sessionUserName = session?.user.name
  if (status === 'authenticated') {
    return(
      <>
        <div >
          welcommen, {session?.user.name}!!
        </div>
        <div >
          {sessionUserName ? 
            <button onClick={() => addCurrentUser(session?.user.name)} className="border border-slate-300 m-4 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none" >
              Add me to the list
            </button> : null}
            <button onClick={() => signOut()}>Sign out</button>
        </div>
        <Link className="border border-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none" href="/">Main page</Link>
      </>
    )  
  } else {
    return (
      <>
        <Link className="border border-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none" href="/signup">Register account</Link>
        <Link className="border border-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none" href="/signin">Log In</Link>
      </>
    )
  }
}