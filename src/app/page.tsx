import React from "react";
import Header from "./components/Header";
import Image from "next/image";

function Home() {
  return (
    <div className="h-screen">
      <Header />
     <div className="flex">
      <div className="w-1/2 flex flex-col justify-center">
      <h1 className="text-[40px] weight-bold mx-44">IMPECCABLE CRAFTSMANSHIP AND FINESSE  </h1>
       <p className="font-medium w-[902px] h-[147px] text-[32px] my-10 
       mx-44 leading-[49.35px] tracking-[0.025em] text-[#787054] ">
  An example of intricate workmanship and detail, elegant 
  necklaces and long and short chains form a part of our
   desirable collection.
</p>

      <button className="bg-[#A29875] h-[58px] w-[288px]
      text-[30px] font-[500] rounded-[10px] text-white 
      text-center flex justify-center items-center py-10  mx-44 my-10" >
        Explore Now
</button>

      </div>
      <div className="w-1/2 h-[] flex justify-center top-left-150
                      items-center rounded-[1px] mt-[50px] ml-[50px]">
      <Image 
          src="/images/Image-2.jpg"
          alt="Picture of the author"
          width={490}
          height={667}
        />  
      </div>  
    </div>
    </div>
  );
}   

export default Home;