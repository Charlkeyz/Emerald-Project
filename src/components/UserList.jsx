import { Avatar, Card, CardBody, CardFooter } from "@nextui-org/react";
import { useContext } from "react";
import { ContextApi } from "./ContextApi";
import { Link, useParams } from "react-router-dom";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";




export default function UserList() {

    const {userid} = useParams()
    
    const {currentUsers} = useContext(ContextApi)
    const user = currentUsers.find( user => user.id === userid)

    if (!user) return <p>User not found</p>;
    

    const {image, name, address, age, email, country, date, phone, cell} = user

    

    
  return (
    <>
        <Card className=" shadow-none">
            <CardBody className="flex flex-col items-center gap-4 lg:flex-row" >
                <div className="flex items-center flex-col">
                    <Link to="/" className="flex items-center gap-3"><FaArrowLeft color="#75D6D1" size={25}/> RESULT </Link>
                    <Avatar 
                        src={image} 
                        alt="image"
                        radius="full"
                        size="lg"
                        className="border-5 border-[#75D6D1] w-48 h-48 m-5"/>
                </div>
                <div className="flex flex-col items-center justify-center lg:items-start gap-3">
                    <p className="font-bold text-3xl">{name}<span className="font-extralight px-2">{age}</span></p>
                    <p className="text-center">{address} <span>{country}</span></p>
                    <p 
                        className="flex items-center gap-2 bg-[#D9D9E0] rounded-full text-sm px-5 py-2">
                            <FaRegEnvelope color="gray"/><span className="tracking-widest">{email}</span>
                    </p>
                    <p className="bg-[#F7D9F2] flex items-center gap-2 rounded-full text-sm px-5 py-2 tracking-widest">
                        <span>JOINED:</span> {date}
                    </p>
                </div>
            </CardBody>
            <CardFooter 
                className="flex flex-col items-center justify-center gap-5 text-xs bg-white border border-none opacity-40 cursor-not-allowed pointer-events-none">
                <p className="flex items-center gap-2"><MdOutlinePhoneInTalk/>{phone}</p>
                <p>{cell}</p>
            </CardFooter>
        </Card>
    </>
  )
}
