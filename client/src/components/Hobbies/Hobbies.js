import React from 'react'
import Image from 'next/image'
import HobbiesStyle from '../../../styles/Hobbies/Hobbies.module.css'

const Hobbies = () => {

    const hobbies = 
    [
        "gaming.svg",
        "coding.svg",
        "movies.svg",
        "football.svg",
        "cricket.svg",
        "hangout.svg"
    ]


    return (
        <div>
            <div className={HobbiesStyle.headingcontainer}> 
                <h1 className={HobbiesStyle.heading}> Hobbies </h1>
            </div>
            <div className={HobbiesStyle.container}>
                <div className={HobbiesStyle.itemcontainer}>
                    {
                        hobbies.map((Item, i) => {
                            return (
                                <div key={i} className={HobbiesStyle.images}>
                                    <Image src={`/assets/images/${Item}`} height={100} width={150}></Image>
                                </div>
                            )
                        } )
                    }
                </div>
            </div>
        </div>
    )
}

export default Hobbies
