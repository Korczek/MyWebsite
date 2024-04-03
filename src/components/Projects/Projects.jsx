import React from 'react'
import { getImageUrl } from "../../utils";

const gpTT = 'https://play.google.com/store/apps/details?id=com.FidgetyGames.TapTwo&pcampaignid=web_share&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1';
const gpAlt = "Get it on Google Play";
const gpImgSounce = "https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png";


export const Projects = () => {
    return (
        <section id='projects'>

            <h2 className='text-center text-slate-200 text-left text-4xl font-extrabold p-6'>
                PROJECTS
            </h2>

            <div className="flex justify-center">

                <div className='flex flex-full p-4 bg-teal-700 rounded-3xl lg:max-w-5xl'>

                    <div className='flex flex-col lg:flex-row w-full place-items-center bg-teal-600 rounded-3xl'>

                        <div className='flex flex-col p-4 w-1/4 justify-center items-center'>

                            <div className='rounded-3xl overflow-hidden w-28 h-28'>
                                <img src={getImageUrl("myGames/TapTwo.png")} />
                            </div>

                            <div className='w-44'>
                                <a href={gpTT} target='_blank'>
                                    <img alt={gpAlt} src={gpImgSounce} />
                                </a>
                            </div>

                        </div>
                        <div>

                            <h1 className='font-extrabold text-4xl text-white text-slate-200'>
                                Tap Two
                            </h1>

                            <h1 className='font-extrabold text-xl text-slate-200'>
                                May, 2023
                            </h1>

                            <div className='text-center lg:text-left text-slate-100 text-l pt-6'>

                                I developed a game from scratch, handling everything from game mechanics to UI scaling
                                and implementing features like animations (my own solution), analytics, IronSource, and Google Play
                                Services integration for in-app purchases and leaderboards. I also managed its release
                                on the Google Play Store

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}