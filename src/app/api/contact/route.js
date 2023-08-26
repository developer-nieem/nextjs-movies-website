import Contact from "@/models/contact";
import mongodbConnection from "@/uitilitis/MonogoCon";
import { NextResponse } from "next/server";

export async function POST(req , res) { 

    try {
        const body = await req.json();
        await mongodbConnection();
        await Contact.create(body);
        return NextResponse.json(body , {message: "Message sent successfully "},{status: 200})

    } catch (error) {
        
    }
 }
   
