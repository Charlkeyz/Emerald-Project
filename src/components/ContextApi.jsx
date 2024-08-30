/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import axios from "axios";
import { createContext, useEffect } from "react";
import { useState } from "react";


export const ContextApi = createContext()

export const ContextApiProvider = ({children}) => {


    const [isSelected, setIsSelected] = useState(false)
    
    const [searchUser, setSearchUser] = useState("")
    const [selectCountry, setSelectCountry] = useState("")
    const [selectGender, setSelectGender] = useState("all")
    const [currentPage, setCurrentPage] = useState(1)
    


    const [filteredUsers, setFilteredUsers] = useState([])
    const [countries, setCountries] = useState([])
    const [users, setUsers] = useState([]);

    const fetchData = async () => {
        try {
            const responseCountry = await axios.get('https://restcountries.com/v3.1/all');
            const countriesData = responseCountry.data;

            // Extracting country names and sorting them alphabetically
            const countryNames = countriesData.map(country => country.name.common).sort();
            setCountries(countryNames);  
            
            // Fetching user data from randomuser API
                const usersResponse = await axios.get("https://randomuser.me/api/?results=50");
                const usersData = usersResponse.data.results;

                // Extracting relevant user information
                const formattedUsers = usersData.map(user => ({
                    id: user.login.uuid,
                    date: user.dob.date,
                    name: `${user.name.first} ${user.name.last}`,
                    title: user.name.title,
                    address: `${user.location.street.number} ${user.location.street.name}, ${user.location.city}`,
                    country: user.location.country,
                    gender: user.gender,
                    cell: user.cell,
                    age: user.dob.age,
                    image: user.picture.large,
                    phone: user.phone,
                    email: user.email,
                }));

                setUsers(formattedUsers)
                setFilteredUsers(formattedUsers)

            
        } catch (error) {
            console.log(error)
        }
    }
    
    const handleFilteredUsers = () => {
        const filterUser = users.filter((user)=> {
            const searchLower = searchUser.toLowerCase()
            const matchesSearch =
            (user.name && user.name.toLowerCase().includes(searchLower)) ||
            (user.gender && user.gender.toLowerCase().includes(searchLower)) ||
            (user.age && user.age.toString().includes(searchLower)) ||
            (user.email && user.email.toLowerCase().includes(searchLower)) ||
            (user.phone && user.phone.toString().includes(searchLower));

            const matchCountry = selectCountry === "" || user.country.toLowerCase() === selectCountry.toLowerCase()
            const matchGender = selectGender === "all" || user.gender.toLowerCase() === selectGender.toLowerCase()

            return matchesSearch && matchCountry && matchGender
        })

        setFilteredUsers(filterUser)
        //set pagination to 1
        setCurrentPage(1)

    }

     // Effect to trigger filtering when searchUser or selectedCountry changes
    useEffect(() => {
        handleFilteredUsers();
    }, [searchUser, selectCountry, users, selectGender]);


    useEffect(()=> {
        fetchData()
    },[])

    //handle the switch component
    const handleToggle = () => {
        setIsSelected(!isSelected)
      }

      //handle the search input
      const handleSearchUser = (e) => {
        setSearchUser(e.target.value)
      }

      //handle select input
      const handleCountries = (e) => {
        setSelectCountry(e.target.value)
      }

        //pagination
        const userPerPage = 3
        const indexOfLastUser = currentPage * userPerPage
        const indexOfFirstUser = indexOfLastUser - userPerPage
        
        const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser)
        const totalPage = Math.ceil(filteredUsers.length / userPerPage)

        //pagination
        const handlePageChange = (page) => {
            setCurrentPage(page)
        } 

   
    


    const value = {
        countries,
        totalPage,
        currentUsers,
        handlePageChange,
        users,
        handleToggle,
        setSelectGender,
        isSelected,
        filteredUsers,
        currentPage,
        setCurrentPage,
        handleSearchUser,
        selectCountry, 
        setUsers, 
        searchUser, 
        handleCountries}

    return(
        <ContextApi.Provider value={value}>
            {children}
        </ContextApi.Provider>
    )
   
}