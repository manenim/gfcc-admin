"use client"

import { createTwentyFour } from "@/actions"
import { useFormState } from "react-dom"


const CreateGroup = () => {

  const [formState, action] = useFormState(createTwentyFour, { message: " " })
  return (
    <form action={action}>
      <div>create a group</div>

      <label htmlFor='twentyFour-name'>Group Name</label>
      <input id="twentyFour-name" name="twentyFour-name" type="text" placeholder='enter a 24 name' />
      <label htmlFor='league-id'>League</label>
      <input id="league-id" name="league-id" type="text" placeholder='enter a league id' />
      <button type="submit">Add twentyFour</button>
    </form>

  )
}

export default CreateGroup