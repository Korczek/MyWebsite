import React from "react";
import { getImageUrl } from "../../utils";

export const Welcome = () => {
    return (
        <section className="flex justify-center pt-24 px-8 w-full">

            <div className="flex flex-col items-center">
                <div class="flex flex-full place-items-center p-6 bg-teal-700 rounded-3xl">

                    <div>
                        <h1 className="text-slate-200 text-left text-6xl font-extrabold p-4">Hello!<br /> Nice to have you here! </h1>
                        <p className="text-slate-200 p-6">
                            I'm a C# programmer and Unity developer who is constantly in the process of learning. <br /> The world of technology is endlessly fascinating, and there's always something new and interesting to discover!
                        </p>
                    </div>
                    <img
                        className="size-72"
                            src={getImageUrl("hero/MordaWKole.png")}
                            alt="Thats me" />
                </div>
            </div>
        </section>
    );
};