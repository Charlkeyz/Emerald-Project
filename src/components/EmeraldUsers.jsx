import AllUsers from "./All_Users/AllUsers"
import Emerald from "./Emerald components/Emerald"



export default function EmeraldUsers() {
  return (
    <>
      <div className="bg-[#262A41]  ">
          <div className="flex flex-col justify-between items-center lg:flex-row lg:p-14  ">
            <Emerald/>
            <AllUsers/> 
          </div>
      </div>
    </>
  )
}
