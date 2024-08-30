

import { Avatar, Button, Card, CardBody, CardFooter,  } from "@nextui-org/react";
import { useContext } from "react";
import { ContextApi } from "./ContextApi";
import { FaRegEnvelope } from "react-icons/fa";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


export default function CardComponent() {

  const { isSelected, currentUsers} = useContext(ContextApi)
  const navigate = useNavigate()

  

  
  return (
    
        <div className=" px-5 flex flex-col justify-center gap-10 w-full">
            {
              currentUsers.map((user, index) => {
                const {image, name, address, phone, email, country, id} = user
                  
                return(
                  <Card key={index} shadow="lg" className="flex flex-col justify-center items-center lg:flex-row" >
                      <CardBody className="w-full flex items-center  lg:flex-row lg:items-start ">
                          <div className="flex flex-col items-center justify-around lg:flex-row">
                              <Avatar  
                                radius="full"
                                size="lg" 
                                src={image}
                                className="border-5 border-[#75D6D1] w-24 h-24 m-5" />

                              <div className="flex flex-col gap-5 text-sm">
                                  <p className="font-bold text-xl flex flex-col items-center gap-2 lg:items-start">{name}<span className="font-light text-sm text-center lg:text-start lg:block">
                                      {`${address}, ${isSelected ? country : ""}`} </span>
                                  </p>
                                  <p className="flex items-center gap-1 text-[#C9BDD1]"><FaRegEnvelope/> <span>{email}</span></p>
                              </div>
                          </div>
                      </CardBody>
                      <CardFooter className=" text-sm flex flex-col justify-around gap-10 lg:mt-10 lg:items-end lg:gap-0 lg:flex-row ">
                        <p className="flex items-center gap-1 text-[#C9BDD1]"><MdOutlinePhoneInTalk/> <span>{phone}</span></p>
                        <Button 
                          className="bg-[#75D6D1] rounded-2xl drop-shadow-lg py-7"
                          onClick={()=> navigate(`/users/${id}`)}>
                          <FaArrowRight className="text-white" size={20}/>
                        </Button>
                      </CardFooter>
                  </Card>
                )
              })
            }
        </div>
  
  )
}
