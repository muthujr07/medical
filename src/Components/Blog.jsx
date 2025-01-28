import React from "react";
import Button from "../layouts/Button";
import BlogCard from "../layouts/BlogCard";
import img1 from "../assets/img1.jpeg.jpg";
import img2 from "../assets/img2.jpeg.jpg";
import img3 from "../assets/img3.jpeg.jpg";
import img4 from "../assets/img4.jpeg.jpg";
import img5 from "../assets/img5.jpeg.jpg";
import img6 from "../assets/img6.jpeg.jpg";


const Blogs =()=>{
    return(
        <>
        <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24">
            <div className="flex flex-col items-center lg:flex-row justify-between">
                <div>
                    <h1 className="text-4xl font-semibold text-center lg:text-start">Latest Post</h1>
                    <p className="mt-2 text-center lg:text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, dolor!</p>
                </div>
                <div className="mt-4 lg:mt-0">
                    <Button title="Our Articles"/>
                </div>
            </div>
            <div className="my-8">
            <div className="flex flex-wrap justify-center gap-5">
                <BlogCard img={img1} headLines="Unraveling the Mysteries of sleep" />
                <BlogCard img={img2} headLines="The Heart Healthy dieat" />
                <BlogCard img={img3} headLines="UnderStanding Pediatric  Vaccinations" />
                <BlogCard img={img4} headLines="Navigation Mental Health" />
                <BlogCard img={img5} headLines="The Importance of Regular Exercise" />
                <BlogCard img={img6} headLines="Dental Health" />

            </div>
        </div>
        </div>
        </>
    )
}
export default Blogs;