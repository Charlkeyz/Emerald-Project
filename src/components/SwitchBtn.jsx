
// import { Switch} from "@nextui-org/react";
import { useContext } from "react";
import { ContextApi } from "./ContextApi";

export default function SwitchBtn() {

  const {handleToggle, isSelected} = useContext(ContextApi)
 return (

      

    <div
      onClick={handleToggle}
      className={`w-20 h-8 flex items-center cursor-pointer rounded-full p-1 ${
        isSelected ? 'bg-[#B7E4E7]' : 'bg-gray-400'
      }`}
    >
      <div
        className={`${ isSelected ? "bg-[#30BBB5]" : "bg-white"} w-6 h-6 rounded-full shadow-md transform duration-300 ${
          isSelected ? 'translate-x-8' : ''
        }`}
      ></div>

    </div>
    
  );
}

