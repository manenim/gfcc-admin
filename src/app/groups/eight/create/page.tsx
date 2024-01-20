"use client"


import { createEight } from '@/actions'
import { useFormState } from 'react-dom'

const CreateEight = () => {
  const [formState, action] = useFormState(createEight, { message: " " })
  return (
    <form action={action}>
      <div>create a group</div>

      <label htmlFor='eight-name'>Group Name</label>
      <input id="eight-name" name="eight-name" type="text" placeholder='enter a 24 name' />
      <label htmlFor='twenty_four-id'>twenty four id</label>
      <input id="twenty_four-id" name="twenty_four-id" type="text" placeholder='enter a 24 id' />
      <button type="submit">Add eight</button>
    </form>

  )
}

export default CreateEight