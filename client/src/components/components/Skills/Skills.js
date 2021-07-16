import React from 'react'
import skillsStyle from '../../../styles/Skills/Skills.module.css'

const Skills = () => {


    const Interests= [
        {
            interest: 'Cloud Computing'
        },
        {
            interest: 'DevSecOps'
        },
        {
            interest: 'Deep Learning'
        },
        {
            interest: 'Web Development'
        },
        {
            interest: 'Software Development'
        }

      ]

    return (
        <>
        {Interests.map((Item, i) => {
                    return (
                        <div key={i} className={skillsStyle.container}>
                            {Item.interest}
                        </div>
                    );
        })}
        </>
    )
}

export default Skills
