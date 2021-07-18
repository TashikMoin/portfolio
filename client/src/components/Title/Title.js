import React from 'react'
import TitleStyle from '../../../styles/Title/Title.module.css'

const Title = (props) => {
    return (
        <div className={TitleStyle.container}>
            <h1 className={TitleStyle.heading}> {props.title}</h1>
        </div>
    )
}

export default Title
