import { db } from '@/db'
import { Truculenta } from 'next/font/google'
import React from 'react'

const ViewMembers = async () => {

    const members = await db.member.findMany({
        include: {
            eight: {
                include: {
                    twenty_four: {
                        include: {
                            League: true
                        }
                    }
                }
            }
        }
    })
    console.log(JSON.stringify(members, null, 2))

    return (
      <div>
            
          <div>ViewMembers</div>
      </div>
  )
}

export default ViewMembers