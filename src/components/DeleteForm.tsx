"use client"
type props = {
  clearAll: (data: FormData) => Promise<void>
}


export default function DeleteForm({clearAll}: props){

  return(
    <form action={clearAll} className="flex gap-2" >
      <div>New here</div>
      <input 
        type="password" 
        name="password" 
        placeholder="password here"
        className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"/>
      <div className="flex gap-1 justify-end">
        <button type="submit" className="border border-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none">Purge</button>
      </div>
    </form> 
  )
}