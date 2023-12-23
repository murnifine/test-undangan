"use server"

import prisma from "@/lib/prisma"
import { category } from "@prisma/client"

export async function ActionTemplate(category: category, ) {
    
    try {
        const templateUndangan = await prisma.templateUndangan.findMany({
            where: {
                category: category
            },
            include: {
                user: true
            }
        })
        return ({
            status: 'sucsess',
            data : templateUndangan
        });
        
    } catch (error) {

        return ({
            status: 'failed',
            data: []
            
        });
    }
}