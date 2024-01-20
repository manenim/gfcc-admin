"use client"

import { createLeague } from '@/actions'
import { useFormState } from 'react-dom'

const CreateLeague = () => {

    const [formState, action] = useFormState(createLeague, { message: " " })

    console.log(formState)

    return (
        <div>

            <div>Create a league</div>

            <form action={action}>
                <div>create league</div>

                <label htmlFor='league-name'>League Name</label>
                <input id="league-name" name="league-name" type="text" placeholder='enter a league name' />
                <button type="submit">Add League</button>
            </form>
        </div>
    )
}

export default CreateLeague