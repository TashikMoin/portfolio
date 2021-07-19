import React from 'react'
import EducationStyle from '../../../styles/Education/Education.module.css'

const Education = () => {

    const data = 
    [
        {
            Name: "National University Of Computer & Emerging Sciences (FAST).",
            Location: "Karachi, Pakistan.",
            Period: "2018-Present",
            Grade: "CGPA: 3.40",
            Description: "PlugCloud is a managed cloud platform for simplifying web application deployments.  We help our customers with reducing the time required to manually configure a hosting environment, which is required in building and hosting highly scalable product. The service is On-demand, with the tailored stacks the customer can save money, accelerate time to market which allows them to focus on their core business."
        },

        {
            Name: "Government Dehli College.",
            Location: "Karachi, Pakistan.",
            Period: "2016-2018",
            Grade: "Grade: A",
            Description: "PlugCloud is a managed cloud platform for simplifying web application deployments.  We help our customers with reducing the time required to manually configure a hosting environment, which is required in building and hosting highly scalable product. The service is On-demand, with the tailored stacks the customer can save money, accelerate time to market which allows them to focus on their core business."
        },

        {
            Name: "Blue Horizon School.",
            Location: "Karachi, Pakistan.",
            Period: "2016",
            Grade: "Grade: A+",
            Description: "PlugCloud is a managed cloud platform for simplifying web application deployments.  We help our customers with reducing the time required to manually configure a hosting environment, which is required in building and hosting highly scalable product. The service is On-demand, with the tailored stacks the customer can save money, accelerate time to market which allows them to focus on their core business."
        }
    ]


    return (
        <div className={EducationStyle.container}>
            <div className={EducationStyle.educationheadingcontainer}>
                <h1 className={EducationStyle.educationheading}> Education </h1>
            </div>

        {
            data.map((Item, i) => {
                return (
                    <div key={i}>
                    <h3 className={EducationStyle.headings}> {Item.Company_Name} 
                        <br/>
                        <span className={EducationStyle.years}> {Item.Name} </span>
                        <br/>
                        <span className={EducationStyle.years}> {Item.Location} </span>
                        <br/> 
                        <span className={EducationStyle.years}> {Item.Period} </span>
                        <br/> 
                        <span className={EducationStyle.years}> {Item.Grade} </span>
                        </h3>
                    <p className={EducationStyle.description}> 
                        {Item.Description}
                    </p>
                    </div>
                )
            } )
        }
        </div>
    )
}

export default Education
