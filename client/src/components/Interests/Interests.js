import React from 'react'
import Image from 'next/image'
import InterestsStyle from '../../../styles/Interests/Interests.module.css'

const Interests = () => {

    const data = 
    [
        {
            Name: " Web Development",
            File: "webdevelopment.svg"
        },
        {
            Name: "Deep Learning",
            File: "deeplearning.webp"
        },
        {
            Name: "Artificial Intelligence",
            File: "ai.svg"
        },
        {
            Name: "Cloud Computing",
            File: "cloud.svg"
        },
        {
            Name: "DevSecOps",
            File: "devsecops.svg"
        }
        
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
                                    <Image alt="" src={`/assets/images/${Item.File}`} height={150} width={200}></Image>
                                    <h5> {Item.Name} </h5>
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
