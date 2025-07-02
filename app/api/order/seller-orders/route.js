import { getAuth } from "@clerk/nextjs/server";
import authSeller from "@/lib/authSeller";
import Address from "@/models/Address";
import { NextResponse } from "next/server";
import connectDB from "@/config/db";
import Order from "@/models/Order";


export async function GET(request) {
    try {
        const {user} = getAuth(request);
        const isSeller = await authSeller(user.id);

        if (!isSeller) {
            return NextResponse.json({ success: false, message: "Not authorized" });
        }

        await connectDB();

        Address.length
        const orders = await Order.find({}).populate('address items.product')
        return NextResponse.json({ success: true, orders });

    } catch (error) {
        return NextResponse.json({ success: false, message: error.message });
    }
}