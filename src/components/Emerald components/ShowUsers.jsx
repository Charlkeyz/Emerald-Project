import { Button } from "@nextui-org/react";
import { useContext } from "react";
import { FaUsers } from "react-icons/fa";
import { FaMale } from "react-icons/fa";
import { FaFemale } from "react-icons/fa";
import { ContextApi } from "../ContextApi";

export default function ShowUsers() {

    const {setSelectGender} = useContext(ContextApi)
    const showUsers = [
        {
            title: "All users",
            image:  <FaUsers color="white"/>,
            bgColor: "#F935A9",
            gender: "all"
        },
        {
            title: "Male users",
            image: <FaMale color="white"/>,
            bgColor: "#30BBB5",
            gender: "male"
        },
        {
            title: "Female users",
            image: <FaFemale color="white"/>,
            bgColor: "#7946C1",
            gender: "female"
        }

    ]
  return (
   <>
        <p className="text-center mb-5 lg:text-start">Show Users</p>
        <div className="flex flex-col justify-between items-center w-full gap-5 lg:flex-row">
        {showUsers.map((item, index)=> (
            <div key={index}>
                <Button 
                    style={{backgroundColor: item.bgColor}}
                    
                    onClick={()=> setSelectGender(item.gender)} 
                    size="lg" className="rounded-xl p-16 flex justify-center items-center text-4xl lg:p-12">
                    {item.image}
                </Button>
                <p className="text-center text-textPrimary py-4 text-xs">{item.title}</p>
            </div>
        ))}
        </div>
   </>
  )
}
