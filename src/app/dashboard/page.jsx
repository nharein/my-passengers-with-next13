'use client'

import Link from "next/link";
import { useSession } from "next-auth/react";


// Dummy page with no functional or content
export default function Dashboard() {
  const { data: session, status} = useSession()
  console.log(session)
  return(
    <div>
      welcommen
      <Link className="border border-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none" href="/">Main page</Link>
    </div>
  )
}