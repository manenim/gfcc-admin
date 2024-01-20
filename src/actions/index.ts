"use server"

import { redirect } from "next/navigation";
import { db } from "../db";



export const createTwentyFour = async (formState: any, formData: FormData) => {

    try {
        const name = formData.get("twentyFour-name") as string;
        const leagueId = Number(formData.get("league-id"))

        const twentyFour = await db.twenty_four.create({
            data: { name, leagueId }
        })

        console.log(twentyFour)

    } catch (error) {
        return {
            message: 'something went wrong'
        }
    }
    redirect('/')
}

export const createEight = async (formState: any, formData: FormData) => {

    try {
        const name = formData.get("eight-name") as string;
        const twenty_fourId = Number(formData.get("twenty_four-id")) as number

        const twentyFour = await db.eight.create({
            data: { name, twenty_fourId }
        })

        console.log(twentyFour)

    } catch (error) {
        return {
            message: 'something went wrong'
        }
    }

    redirect('/')

}

export const createLeague = async (formState: any, formData: FormData) => {

    try {
        const name = formData.get("league-name") as string;
        console.log(name)

        const league = await db.league.create({
            data: { name }
        })

        console.log(league)

    } catch (error) {
        return {
            message: 'something went wrong'
        }
    }

    redirect('/')

}


export const createMember = async (formState: any, formData: FormData) => {



    try {
        const firstName = formData.get("first-name") as string
        const lastName = formData.get("last-name") as string
        const eightId = Number(formData.get("eight-id"))

        const member = await db.member.create({
            data: { firstName, lastName, eightId }
        })
        console.log(member)
    } catch (error) {
        return {
            message: 'member could not save'
        }
    }
    redirect('/')
}