

import Image from "next/image"

export default function Home() {


  return (
    <div className=" bg-gray-100 h-screen flex content-center items-center pb-36">
     {/* left side */}
      
      <div className=" text-3xl pl-28 w-fit">
        <Image 
         src={"/pictures/logofacebok.svg"}
         alt={"image"}
         height={140}
         width={315} 
         />

         <p className="pl-7 -mt-3">Facebook helps you connect and share <br /> with the people in your life.</p>

      </div>

     {/* left side */}
      
      <div className="flex flex-col border-2 rounded-md ml-16 p-4 bg-white mt-14">
        <input type="text" placeholder="Email adress or phone number" className="w-96 h-12 rounded-md text-xl mb-3 p-3 border border-gray-300 focus:border-blue-500" />
        <input type="password" placeholder="Password" className="w-96 h-12 rounded-md mb-4  text-xl p-3 border border-gray-300 focus:border-blue-500"/>

        <button className="w-96 h-12 rounded-md mb-4 text-white text-xl p-3 bg-blue-600 ">Log in</button>
        <p className="text-center mb-3">Forgotten password?</p>
        <span>
          <hr />
        </span>

        <button className="bg-green-500 w-44 text-white m-auto mt-6 text-base mb-3 rounded-md h-12">Create new account</button>
      </div>

    </div>
  );
}
