import React from 'react';
import AchievementsStyle from '../../../styles/Achievements/Achievements.module.css';
import Ticker from '../react-ticker'
import Image from 'next/image'

const Achievements = () => {
    let Data = [

        {
            img_source: 'https://source.unsplash.com/pF1ug8ysTtY/600x400'
        },

        {
            img_source: 'https://source.unsplash.com/5P91SF0zNsI/740x494'
        },

        {
            img_source: 'https://source.unsplash.com/2ShvY8Lf6l0/800x599'
        },


        {
            img_source: 'https://source.unsplash.com/pF1ug8ysTtY/600x400'
        },

        {
            img_source: 'https://source.unsplash.com/5P91SF0zNsI/740x494'
        },

        {
            img_source: 'https://source.unsplash.com/2ShvY8Lf6l0/800x599'
        },


        {
            img_source: 'https://source.unsplash.com/pF1ug8ysTtY/600x400'
        },

        {
            img_source: 'https://source.unsplash.com/5P91SF0zNsI/740x494'
        },

        {
            img_source: 'https://source.unsplash.com/2ShvY8Lf6l0/800x599'
        },


        {
            img_source: 'https://source.unsplash.com/pF1ug8ysTtY/600x400'
        },

        {
            img_source: 'https://source.unsplash.com/5P91SF0zNsI/740x494'
        },

        {
            img_source: 'https://source.unsplash.com/2ShvY8Lf6l0/800x599'
        },


        {
            img_source: 'https://source.unsplash.com/pF1ug8ysTtY/600x400'
        },

        {
            img_source: 'https://source.unsplash.com/5P91SF0zNsI/740x494'
        },

        {
            img_source: 'https://source.unsplash.com/2ShvY8Lf6l0/800x599'
        },

        {
            img_source: 'https://www.redhat.com/cms/managed-files/illustration_rhel-isometric.svg'
        }
    ];
    return (
        <>
            <div className={AchievementsStyle.container}>
                <h1 className={AchievementsStyle.heading}> Achievements </h1>
                <div className={AchievementsStyle.clientContainer}>
                    <div className={AchievementsStyle.clients}>
                        <Ticker offset="run-in" direction="toLeft" mode="smooth">
                        {() => (
                        <>
                        {Data.map((Item, i) => {
                            return (
                                <div key={i} className={AchievementsStyle.logo}>
                                    <Image 
                                        height={120}
                                        width={220}
                                        src='/assets/images/hero.jpeg'
                                        alt=' '
                                    ></Image>
                                </div>
                            );
                        })}
                        </>
                        )}
                        </Ticker>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Achievements;
