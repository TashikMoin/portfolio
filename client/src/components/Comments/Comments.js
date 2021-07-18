import React from 'react'
import Image from 'next/image'
import CommentsStyle from '../../../styles/Comments/Comments.module.css'

const Comments = () => {

    const comments = 
    [
        {
            from: "Tashik Moin Sheikh",
            comment: "PlugCloud is a managed cloud platform for simplifying web application deployments. We help our customers with reducing the time required to manually configure a hosting environment, which is required in building and hosting highly scalable product. The service is On-demand, with the tailored stacks the customer can save money, accelerate time to market which allows them to focus on their core business."
        },
        {
            from: "Tashik Moin Sheikh",
            comment: "PlugCloud is a managed cloud platform for simplifying web application deployments. We help our customers with reducing the time required to manually configure a hosting environment, which is required in building and hosting highly scalable product. The service is On-demand, with the tailored stacks the customer can save money, accelerate time to market which allows them to focus on their core business."
        },
        {
            from: "Tashik Moin Sheikh",
            comment: "PlugCloud is a managed cloud platform for simplifying web application deployments. We help our customers with reducing the time required to manually configure a hosting environment, which is required in building and hosting highly scalable product. The service is On-demand, with the tailored stacks the customer can save money, accelerate time to market which allows them to focus on their core business."
        },
        {
            from: "Tashik Moin Sheikh",
            comment: "PlugCloud is a managed cloud platform for simplifying web application deployments. We help our customers with reducing the time required to manually configure a hosting environment, which is required in building and hosting highly scalable product. The service is On-demand, with the tailored stacks the customer can save money, accelerate time to market which allows them to focus on their core business."
        },
        {
            from: "Tashik Moin Sheikh",
            comment: "PlugCloud is a managed cloud platform for simplifying web application deployments. We help our customers with reducing the time required to manually configure a hosting environment, which is required in building and hosting highly scalable product. The service is On-demand, with the tailored stacks the customer can save money, accelerate time to market which allows them to focus on their core business."
        },
        {
            from: "Tashik Moin Sheikh",
            comment: "PlugCloud is a managed cloud platform for simplifying web application deployments. We help our customers with reducing the time required to manually configure a hosting environment, which is required in building and hosting highly scalable product. The service is On-demand, with the tailored stacks the customer can save money, accelerate time to market which allows them to focus on their core business."
        }
    ]

    return (
        <div>
            <div className={CommentsStyle.container}>
                <h1 style={{marginBottom: '15vh'}}> Comments </h1>
                <div className={CommentsStyle.commentscontainer}>
                    {
                        comments.map((Item, i) => {
                            return (
                                <div key={i} className={CommentsStyle.card}>
                                    
                                    <p className={CommentsStyle.comment}> 
                                        <Image height={20} width={20} alt="" src="/assets/images/leftquote.svg"/>
                                        <br/>
                                        {Item.comment} 
                                        <h3 className={CommentsStyle.signature}> {Item.from} </h3>
                                    </p>
                                        
                                </div>
                            )
                        } )
                    }
                </div>
                <button className={CommentsStyle.commentbutton}> Add Comment</button>
            </div>
        </div>
    )
}

export default Comments
