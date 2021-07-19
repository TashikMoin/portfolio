import React from 'react'
import FooterStyle from '../../../styles/Footer/Footer.module.css'
import Image from 'next/image'
import Facebook from '../../../public/assets/images/facebook.svg'
import Twitter from '../../../public/assets/images/twitter.svg'
import Youtube from '../../../public/assets/images/youtube.svg'
import Instagram from '../../../public/assets/images/instagram.svg'
import Github from '../../../public/assets/images/github.svg'
import Linkedin from '../../../public/assets/images/linkedin.svg'

const Footer = ( {setmargintop}) => {

    return (
        <div style={{marginTop: setmargintop}} className={FooterStyle.container}>
            <div className={FooterStyle.copyright}>
                <h1 className={FooterStyle.heading}> © 2021 · Tashik Moin </h1>
            </div>

            <div>
                <div className={FooterStyle.social}>
                    <a href="https://github.com/TashikMoin"> <Image alt="" src={Github} height={30} width={40} /> </a>
                </div>

                <div className={FooterStyle.social}>
                    <a href="https://www.youtube.com/channel/UC_bxQjn16KukkyWqTY_MZvg/videos"> <Image alt="" src={Youtube} height={30} width={40} /> </a>
                </div>

                <div className={FooterStyle.social}>
                    <a href="https://www.linkedin.com/in/tashik-moin-sheikh-08872116b/"> <Image alt="" src={Linkedin} height={30} width={40} /> </a>
                </div>

                <div className={FooterStyle.social}>
                    <a href="https://www.facebook.com/TashikMoinSheikh"> <Image alt="" src={Facebook} height={30} width={40} /> </a>
                </div>

                <div className={FooterStyle.social}>
                    <a href="https://twitter.com/TashikMSheikh"> <Image alt="" src={Twitter} height={30} width={40} /> </a>
                </div>

                <div className={FooterStyle.social}>
                    <a href="https://www.instagram.com/tashikmoinshaikh/"> <Image alt="" src={Instagram} height={30} width={40} /> </a>
                </div>
            </div>

        </div>
    )
}

export default Footer
