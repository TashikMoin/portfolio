import React from 'react'
import ExperienceStyle from '../../../styles/Experience/Experience.module.css'

const Experience = () => {

    const data = 
    [
        {
            Company_Name: "Plugcloud INC.",
            Location: "San Mateo, California, USA.",
            Period: "2017-Present",
            Description: "PlugCloud is a managed cloud platform for simplifying web application deployments.  We help our customers with reducing the time required to manually configure a hosting environment, which is required in building and hosting highly scalable product. The service is On-demand, with the tailored stacks the customer can save money, accelerate time to market which allows them to focus on their core business."
        },

        {
            Company_Name: "Enterprise Technology Solutions & Services ETS.",
            Location: "Victoria, Melbourne, Australia.",
            Period: "2020-Present",
            Description: "PlugCloud is a managed cloud platform for simplifying web application deployments.  We help our customers with reducing the time required to manually configure a hosting environment, which is required in building and hosting highly scalable product. The service is On-demand, with the tailored stacks the customer can save money, accelerate time to market which allows them to focus on their core business."
        },

        {
            Company_Name: "National University Of Computer & Emerging Sciences.",
            Location: "Karachi, Pakistan.",
            Period: "2021-Present",
            Description: "PlugCloud is a managed cloud platform for simplifying web application deployments.  We help our customers with reducing the time required to manually configure a hosting environment, which is required in building and hosting highly scalable product. The service is On-demand, with the tailored stacks the customer can save money, accelerate time to market which allows them to focus on their core business."
        }
    ]

    return (
        <div className={ExperienceStyle.container}>
            <div className={ExperienceStyle.experienceheadingcontainer}>
                <h1 className={ExperienceStyle.experienceheading}> Experience </h1>
            </div>

        {
            data.map((Item, i) => {
                return (
                    <>
                    <h3 className={ExperienceStyle.headings}> {Item.Company_Name} 
                        <br/>
                        <span className={ExperienceStyle.years}> {Item.Location} </span>
                        <br/> 
                        <span className={ExperienceStyle.years}> {Item.Period} </span></h3>
                    <p className={ExperienceStyle.description}> 
                        {Item.Description}
                    </p>
                    </>
                )
            } )
        }
        </div>
    )
}

export default Experience
