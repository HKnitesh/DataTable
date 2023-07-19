import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 h-screen bg-slate-200 font-sans">
      <h1 className="text-3xl text-black ">Click below to See Booking Data Table</h1>
      <Link
        className="px-4 py-2 text-purple-950 bg-purple-300 rounded-xl text-lg font-semibold hover:bg-red-300 hover:text-red-800 hover:text-xl "
        href='/booking'>Booking DataTable
      </Link>

    </div>
  )
}
