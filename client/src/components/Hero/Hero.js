import React from 'react'
import Typewriter from 'typewriter-effect';
import LazyHero from 'react-lazy-hero';
import HeroStyle from '../../../styles/Hero/Hero.module.css'

function Hero() {
    return (
        <React.Fragment>
            <LazyHero 
            imageSrc="https://i.picsum.photos/id/318/2000/1000.jpg?hmac=gCXCUbTj87rMuNWwMHZPcizDRcBy_7jXJq2w0FjuG4E" 
            minHeight='100vh' 
            opacity={0.2}
            transitionDuration={3000}
            transitionTimingFunction='ease-in-out'
            >
                <div className={HeroStyle.herocontainer}>
                    <h1 className={HeroStyle.first}> Hi, I Am Tashik Moin,</h1>
                    <h1 className={HeroStyle.second}>
                        <Typewriter
                            options={{
                            strings: ['A Computer Science Student At FAST NUCES,', 'A Microsoft Gold Student Ambassador,', 'A Microsoft Certified Trainer And A Professional.'],
                            autoStart: true,
                            delay: 50,
                            loop: true,
                            }}
                        />
                    </h1> 
                </div>
            </LazyHero>
        </React.Fragment>
    )
}

export default Hero
