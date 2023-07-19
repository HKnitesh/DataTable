
import { Booking, columns } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Booking[]> {
    // Fetch data from your API here.
    return [
        {
            id: "1",
            amount: 100,
            email: "ram@gmail.com",
            name: "Ram",
            status: "Waiting",
            timestamp: "35 hours ago",
            purchaseId: "145876",
            source: ""
        },
        {
            id: "2",
            amount: 120,
            status: "Failed",
            email: "hari@type.com",
            name: "Hari",
            timestamp: "15 minutes ago",
            purchaseId: "478952",
            source: ""
        },
        {
            id: "3",
            amount: 220,
            status: "Waiting",
            email: "rock@tyre.com",
            name: "Rock",
            timestamp: "2 hours ago",
            purchaseId: "289245",
            source: ""
        },
        {
            id: "4",
            amount: 420,
            status: "Paid",
            email: "garima@yahoo.com",
            name: "Garima",
            timestamp: "9 hours ago",
            purchaseId: "8456214",
            source: ""
        },
        {
            id: "5",
            amount: 320,
            status: "Waiting",
            email: "gf125@google.com",
            name: "GF",
            timestamp: "2 minutes ago",
            purchaseId: "145876",
            source: ""
        },
        {
            id: "6",
            amount: 100,
            status: "Paid",
            email: "marker@tyre.com",
            name: "Marker F",
            timestamp: "47 minutes ago",
            purchaseId: "6254187",
            source: ""

        },
        {
            id: "7",
            amount: 120,
            status: "Failed",
            email: "hitesh@gmail.com",
            name: "Hitesh",
            timestamp: "2 hours ago",
            purchaseId: "974521",
            source: ""
        },

    ]
}



export default async function DataTablePage() {
   
    const data = await getData()

    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={data} />
        </div>
    )
}
