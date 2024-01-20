"use client"

import { createMember } from '@/actions'
import { useFormState } from 'react-dom'

const CreateNewMember = () => {

  const [formState, action] = useFormState(createMember, { message: " " })

  return (
      <form action = {action}>
          <div>create a member</div>

          <label htmlFor='first-name'>first Name</label>
          <input id="first-name" name="first-name" type="text" placeholder='first name' />

          <label htmlFor='first-name'>last Name</label>
          <input id="last-name" name="last-name" type="text" placeholder='last name' />

          <label htmlFor='eight-id'>eight-id</label>
            <input id="eight-id" name="eight-id" type="text" placeholder='eight-id' />

          <button type="submit">Add member</button>
      </form>
  )
}

export default CreateNewMember
