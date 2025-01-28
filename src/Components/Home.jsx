import React from "react";
import Button from "../layouts/Button";


const Home = () => {
  return (
    <>
    <main>
        <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 text-white bg-[url('assets/med.jpeg')] bg-no-repeat bg-cover opacity-90">
            <div className="w-full lg:w-4-5 space-y-5 mt-10">
                <h1 className="text-5xl font-bold leading-tight">Wherever the art of medicine is loved, there is also a love of humanity</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptate consectetur tempore rem eos doloremque laboriosam corrupti cum. Corporis at fuga autem mollitia asperiores alias est nam culpa ad magnam cupiditate neque quibusdam animi necessitatibus dignissimos reiciendis omnis explicabo dolor id, consequuntur natus sunt et aliquam vero! Voluptates, quisquam nostrum.</p>
                <Button title="See Services"/>

            </div>
        </div>


    </main>
      
    </>
  )
}
export default Home;