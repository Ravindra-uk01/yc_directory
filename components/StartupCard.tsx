import React from 'react'

const StartupCard = ({post}: {post: startCardType}) => {

  return (
    <li className='startup_card' >
        <div className="flex-between">
              <p>{post._createdAt}</p>
              <div className="flex gap-2" >
                <p>eye</p>
                <p>18</p>
              </div>
            </div>
            <div className="flex-between">
              <div>
                <p>author name</p>
                <p>Title</p>
              </div>
              <img
                src="https://images.unsplash.com/photo-1677631231950-1b2f3a4c5e7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
                alt="startup"
                className="w-full h-48 object-cover rounded-lg"
              />
            
            </div>

            <p>
              description
            </p>
            
            <div>
              <div>Category</div>
              <div>Details</div>
            </div>
     </li>
  )
}

export default StartupCard