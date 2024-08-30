import SearchInput from "./SearchInput";
import ShowUsers from "./ShowUsers";


export default function Emerald() {
  return (
    <div className="font-sans  text-white p-16 ">
      
            <p className=" text-3xl font-thin flex flex-col items-start gap-3 lg:flex-row">
                Hello, <span className=" font-bold" >Emerald</span>
            </p>
            <p className=" text-xs text-textPrimary w-48 pt-3 lg:w-full">
                Welcome to your dashboard, kindly sort through the user base
            </p>
            <div className="mt-5 mb-10">
              <SearchInput 
                inputContainer="flex items-center bg-inputBg rounded-xl gap-2 p-2"
                placeholder= "Find a user" 
                className="outline-none placeholder:text-gray-700 placeholder:text-[15px] bg-inputBg"/>
            </div>
            <div>
              <ShowUsers/>
            </div>
        
    </div>
  )
}
