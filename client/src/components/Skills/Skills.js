import React from 'react'
import SkillsStyle from '../../../styles/Skills/Skills.module.css'
import imgg from '../../../public/assets/images/hero.jpeg'
import Image from 'next/image'

function Skills() {

    const tools = 
                [
                 "reactjs.svg", "nestjs.svg", "nextjs.svg", 
                 "nodejs.svg", "expressjs.svg", "aws.svg", "linux.svg", 
                 "nginx.svg", "jenkins.svg", "docker.svg", "kubernetes.svg",
                 "mysql.svg", "git.svg", "github.svg", "mongodb.svg", "oracledb.svg", 
                 "tensorflow.svg", "keras.svg", "pytorch.svg", "azure.svg", 
                 "html.svg", "css.svg", "sass.svg", "dotnetcore.svg",
                 "c.svg", "cpp.svg", "csharp.svg", "javascript.svg", 
                 "python.svg", "typescript.svg", "mpi.png", "openmp.jpg",
                ]

    return (
        <div>
            <div className={SkillsStyle.headingcontainer}> 
                <h1 className={SkillsStyle.heading}> Tools and Skills </h1>
            </div>

            <div className={SkillsStyle.container}>
                <div className={SkillsStyle.gallerycontainer}>
                    {
                        tools.map((Item, i) => {
                            return (
                                <div key={i} className={SkillsStyle.images}>
                                    <Image src={`/assets/images/${Item}`} height={200} width={250}></Image>
                                </div>
                            )
                        } )
                    }
                </div>
            </div>
      </div>
    )
}

export default Skills
