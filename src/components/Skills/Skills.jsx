import React from 'react'
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";


export const Skills = () => {
    return (
        <section id="skills" className=' px-6 lg:px-28'>
            <h2 className='text-center text-slate-200 text-left text-4xl font-extrabold p-6'>
                SKILLS
            </h2>

            <div className='flex flex-wrap place-items-center justify-center gap-8 lg:gap-10'>
                {
                    skills.map((skill, id) => {
                        return (
                            <div key={id} className='flex flex-col items-center'>
                                <div className='w-28 h-28 bg-teal-700 rounded-full flex items-center justify-center p-5'>
                                    <img 
                                    src={getImageUrl(skill.imageSrc)} 
                                    alt={skill.title} />
                                </div>
                                <p className='text-center text-gray-100 pt-2 text-2xl'>
                                    {skill.title}
                                </p>
                            </div>
                        )
                    })
                }
            </div>

        </section>
    );
};