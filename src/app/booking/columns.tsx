"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
// import { Checkbox } from "@/components/ui/checkbox"


import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export type Booking = {
    id: string
    timestamp: string
    purchaseId: string
    amount: number
    email: string
    name: string
    source: string
    status: "Waiting" | "Paid" | "Failed"
    // status:string
}

export const columns: ColumnDef<Booking>[] = [

    {
        accessorKey: "timestamp",
        header: () => <div className="text-xs font-semibold">TIMESTAMP</div>,
    },
    {
        accessorKey: "purchaseId",

        header: ({ column }) => {
            return (
                <div className="text-xs  font-semibold">PURCHASE ID</div>
            )
        },
    },
    {
        accessorKey: "email",
        header: ({ column }) => {
            return (
                <Button
                    className="text-xs  font-semibold"
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    MAIL
                    <ArrowUpDown className="ml-2 h-3 w-3 " />
                </Button>
            )
        },
    },
    {
        accessorKey: "name",
        header: ({ column }) => {
            return (
                <div className="text-xs  font-semibold">NAME</div>
            )
        },
    },
    {
        accessorKey: "source",
        header: () => <div className="text-xs font-semibold">SOURCE</div>,
    },
    {
        accessorKey: "status",
        header: () => <div className="text-xs  font-semibold">STATUS</div>,
        cell: ({ row }) => {

            const status = row.getValue("status")

            if(status === "Paid") {
                return <div className="text-green-950 bg-green-200 px-3 py-1 rounded-xl w-fit font-semibold">{status}</div>
            }
            else if (status === "Waiting") {
                return <div className="text-yellow-900 bg-yellow-200 px-3 py-1 rounded-xl w-fit font-semibold">{status}</div>
            }
            else if (status === "Failed") {
                return <div className="text-red-900 bg-red-200 px-3 py-1 rounded-xl w-fit font-semibold">{status}</div>
            }

            
        },
    },

    {
        accessorKey: "amount",
        header: () => <div className="text-right text-xs  font-semibold">AMOUNT</div>,
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("amount"))
            const formatted = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
            }).format(amount)

            return <div className="text-right font-medium">{formatted}</div>
        },
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const booking = row.original

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                            onClick={() => navigator.clipboard.writeText(booking.purchaseId)}
                        >
                            Copy purchase ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>View customer</DropdownMenuItem>
                        <DropdownMenuItem>View purchase details</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]
