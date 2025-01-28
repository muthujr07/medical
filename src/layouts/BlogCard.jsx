import React from "react";


const BlogCard = ({ img, headLines }) => {
    return (
        <>
            <div className="w-full lg:w-1/4 p-2 shadow-[rgba(0,_0,_0.24)_0px_3px_8px] space-y-2 rounded-lg cursor-pointer hover:scale-105 transition duration-300 ease-in-out">
                <img className="h-64 md:h96 lg:h-40 w-full rounded-lg" src={img} alt="img" />
                <h1 className="text-lg text-center font-semibold "> {headLines}</h1>
                <p className="text-center text-5m">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, impedit minus excepturi quo porro tenetur obcaecati repellendus ullam sequi laudantium!</p>
            </div>

        </>
    )
}
export default BlogCard;