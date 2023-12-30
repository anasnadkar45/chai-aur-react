import React from 'react'
import { useState } from 'react'

function Card({id, name,image,info,price , removeTour }) {
    const [readMore, setReadMore] = useState(false)
    const description = readMore ? info : `${info.substring(0,200)}....`
    function readMoreHandler(){
        setReadMore(!readMore)
    }
    return (
        <div>
            <div className='card flex flex-col rounded-md max-w-[268px] p-2 border justify-around'>
                    <img src={image}
                    className='image max-w-[250px] rounded-md'
                    />
                <div className='tour-details'>
                    <h4 className='tour-price'>${price}</h4>
                    <h4 className='tour-name'>{name}</h4>
                </div>
                <div className='description'>
                    {description}
                    <span className='read-more' onClick={readMoreHandler}>
                        {readMore ? `show less` : `read more`}
                    </span>
                </div>
                <button onClick={() => removeTour(id)}>Not intrested</button>
            </div>
        </div>
    )
}

export default Card