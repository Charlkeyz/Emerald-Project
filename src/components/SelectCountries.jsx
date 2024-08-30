import { useContext} from 'react';
import {ContextApi} from '../components/ContextApi'
import { Select, SelectItem } from "@nextui-org/react";



export default function SelectCountries() {
  // const [selectedCountry, setSelectedCountry] = useState("");

  const {countries, handleCountries, selectCountry} = useContext(ContextApi)
  

  // const handleChange = (event) => {
  //   setSelectedCountry(event.target.value);
  // };

  return (

    <Select     
      label="Select country" 
      aria-label='Select country'
      radius='full'
      color='secondary'
      value={selectCountry}
      onChange={handleCountries}
      className=' rounded-full'
      classNames={{
        label: "text-gray-700",
        value: "text-black"
      }}>
      {countries.map((country) => (
        <SelectItem key={country} value={country}>
          {country}
        </SelectItem>
      ))}
    </Select>
    
    // <div className="relative">
    //     <select
    //       id="country-select"
    //       value={selectedCountry}
    //       onChange={handleChange}
    //       className="w-1/2 p-2 bg-white border border-gray-300 rounded-full shadow-sm focus:outline-none 
    //       transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
    //     >
    //       <option value="" disabled>
    //         Select a country
    //       </option>
    //       {countries.map((country, index) => (
    //         <option
    //           key={index}
    //           value={country}
    //           className=" pointer hover:bg-blue-100 hover:text-blue-600 transition-all
    //             duration-200 ease-in-out transform hover:translate-x-1">
    //           {country}
    //         </option>
    //       ))}
    //     </select>

    //     {/* Background glow animation for the entire select */}        
    // </div>
    
  );
}
