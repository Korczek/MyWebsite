import React from "react";
import { getImageUrl } from "../../utils";

export const Welcome = () => {
    return (
        <section className="pt-24">

            <div className="flex justify-center items-center p-4">
                <div class="flex flex-col-reverse lg:flex-row place-items-center p-6 bg-teal-700 rounded-3xl lg:max-w-5xl">

                    <div>
                        <h1 className="text-slate-200 text-center lg:text-left text-6xl font-extrabold p-4">
                            Hello!<br /> 
                            Nice to have you here! 
                        </h1>

                        <p className="text-slate-200 p-6">
                            I'm a C# programmer and Unity developer
                            who is constantly in the process of 
                            learning. <br /> The world of technology is
                            endlessly fascinating, and there's always 
                            something new and interesting to discover!
                        </p>
                    </div>
                   
                    <div className="w-56 h-56 overflow-hidden rounded-full ">
                        
                        <img className="w-full border rounded-full"
                                src={getImageUrl("hero/MordaWKole.png")}
                                alt="Thats me" />
                    </div>

                </div>
            </div>
        </section>
    );
};