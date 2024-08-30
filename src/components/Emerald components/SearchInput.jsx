/* eslint-disable react/prop-types */
// import {Input} from "@nextui-org/react";
import { IoMdSearch } from "react-icons/io";
import { Input } from "@nextui-org/react";

export default function SearchInput() {
  
  

    return (
      <Input
        type='search'
        placeholder='Find a user'
        className="text-gray-700"
        startContent={<IoMdSearch className="text-gray-700" size={20} />}
        classNames={{
          inputWrapper: 'bg-[#7D7F8D]'
        }}
      />
    );
  }