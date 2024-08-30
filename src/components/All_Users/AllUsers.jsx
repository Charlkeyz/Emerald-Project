// import SearchInput from "../Emerald components/SearchInput";
import SelectCountries from "../SelectCountries";
import SwitchBtn from "../SwitchBtn";
import { IoMdSearch } from "react-icons/io";
import { Button, Card, CardBody, CardFooter, CardHeader, Input, Pagination } from "@nextui-org/react";
import CardComponent from "../CardComponent";
import { useContext } from "react";
import { ContextApi } from "../ContextApi";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { Routes, Route, useLocation } from "react-router-dom";
import UserList from "../UserList";




export default function AllUsers() {
  const location = useLocation()
  const isUserLocation = location.pathname.includes("/users/")

  const {handleSearchUser, searchUsers, totalPage, currentPage, handlePageChange} = useContext(ContextApi)


  return (
    <Card className="w-full h-full bg-white lg:w-[50%] flex flex-col items-center rounded-3xl">

        <CardHeader className="flex flex-col mt-10 lg:pl-10 lg:items-start ">
          <p>{isUserLocation ? "Users List" : "All Users"}</p>
          <span>Filter by</span>
        </CardHeader>

        <CardBody>
            <section className=" w-full flex flex-col justify-center gap-10 items-center lg:flex-row p-5">
                <Input
                type='search'
                radius="full"  
                placeholder='Find a user'
                value={searchUsers}
                onChange={handleSearchUser}
                className="text-gray-700 rounded-full w-1/2 "
                startContent={<IoMdSearch className="text-gray-700" size={20} />}
                classNames={{
                  inputWrapper: ' bg-[#F2F2F2] h-14 '
                }}
              />
                <div className="flex w-screen items-center justify-center gap-10 p-2 lg:w-full ">
                    <SelectCountries/>
                    <div className="flex items-center gap-2"><SwitchBtn/><span>Show Country</span></div> 
                </div>
            </section>
            
            <Routes>
              <Route path="/" element={<CardComponent/>}/>
              <Route path="/users/:userid" element={<UserList/>}/>
            </Routes>

        </CardBody>
        <CardFooter 
            className={`${isUserLocation ? 'bg-white p-20 border border-none opacity-40 cursor-not-allowed pointer-events-none flex flex-col justify-between items-center gap-10 lg:flex-row'
             : 'flex flex-col justify-between items-center gap-10 p-20 lg:flex-row'}`}>

            <Button 
              startContent={<FaCloudDownloadAlt size={20} color="white"/>}
              className="bg-[#7946C1] text-white"
              radius="full"
              size="lg">
              Download Results
            </Button>
            <Pagination
              total={totalPage}
              showControls
              showShadow
              initialPage={currentPage}
              onChange={(page)=> handlePageChange(page)}/>
        </CardFooter>

    </Card>
  )
}
