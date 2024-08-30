import AllUsers from "./All_Users/AllUsers"
import Emerald from "./Emerald components/Emerald"



export default function EmeraldUsers() {
  return (
    <>
      <div className="w-full h-full">
          <div className="flex flex-col justify-between items-center lg:flex-row">
            <Emerald/>
            <AllUsers/> 
          </div>
      </div>
    </>
  )
}
