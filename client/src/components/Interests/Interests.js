import React from 'react'
import Image from 'next/image'
import InterestsStyle from '../../../styles/Interests/Interests.module.css'

const Interests = () => {

    const data = 
    [
        "webdevelopment.svg",
        "deeplearning.webp",
        "ai.svg",
        "cloud.svg",
        "devsecops.webp"
    ]

    return (
        <div>
            <div className={InterestsStyle.headingcontainer}> 
                <h1 className={InterestsStyle.heading}> Interests </h1>
            </div>

            <div className={InterestsStyle.container}>
                <div className={InterestsStyle.interestcontainer}>
                    {
                        data.map((Item, i) => {
                            return (
                                <div key={i} className={InterestsStyle.images}>
                                    <Image src={`/assets/images/${Item}`} height={150} width={200}></Image>
                                </div>
                            )
                        } )
                    }
                </div>
            </div>
      </div>
    )
}

export default Interests
