'use client'

import Link from "next/link"
import { useSession } from "next-auth/react";


export default function LoginAndRegisterButton(){
  const { data: session, status} = useSession()

  if (status === 'authenticated') {
    return (
      <>
        <Link className="border border-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none" href="/dashboard">My Page</Link>
      </>
    )
  } else {
    return(
      <>
        <Link className="border border-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none" href="/signup">Register account</Link>
        <Link className="border border-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none" href="/signin">Log In</Link>
      </>
    )
  }

}