import React from 'react'
import Typewriter from 'typewriter-effect';
import LazyHero from 'react-lazy-hero';
import HeroStyle from '../../../styles/Hero/Hero.module.css'

function Hero() {
    return (
        <React.Fragment>
            <LazyHero 
            imageSrc="https://i.picsum.photos/id/677/2000/1000.jpg?hmac=4P_HIHXZzgKwEWxcIeZBVw_YFwxnmo-wwEb_C0m54P0" 
            minHeight='100vh' 
            opacity={0.7}
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
