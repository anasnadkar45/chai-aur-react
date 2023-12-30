import React from 'react'
import Card from './Card'
function Tours({tours , removeTour}) {
  console.log(tours)
  return (
    <div className='flex flex-wrap '>
        {
          tours.map((tour) =>{
            return  <Card key={tour.id} {...tour} removeTour={removeTour}  />
          })
        }
        {/* <Card /> */}
    </div>
  )
}

export default Tours