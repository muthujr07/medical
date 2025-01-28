import React from "react";

import img from '../assets/medical.jpeg.jpg';


const About = () => {
    return (
        <>
            <div className="min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-2">
                <div className="w-full lg:w-3/4 space-y-4">
                    <h1 className="text-5xl font-semibold text-center lg:text-start">About Us</h1>
                    
                    <p className="text-justify lg:text-start">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente, nesciunt corrupti. Aliquam, quam tempora? Tempora, inventore iusto soluta cumque ut distinctio unde porro et odit. Architecto vero error incidunt placeat!</p>

                    <p className="text-justify lg:text-start">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, vitae fuga. Totam mollitia odio deleniti et non placeat sit atque nemo provident quasi quas, odit autem cumque voluptatibus vitae. Excepturi!</p>

                    <p className="text-justify lg:text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo iusto nobis veniam. Eaque debitis tempore qui consequuntur, perspiciatis repellat, incidunt minus neque vero magnam a aperiam dolore deserunt nostrum labore?</p>

                </div>
                <div className="w-full lg:w-3/4">
                    <img src={img} alt="img" className="rounded-lg" />
                </div>
            </div>

        </>
    )
}
export default About;