import { type NextPage } from "next";
import { Dayjs } from 'dayjs';
import { useState } from "react";
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TextField } from "@mui/material";

const SearchBar: NextPage = () => {

    // Keep track of the focus state in the Where
    const [whereFocused, setWhenFocued] = useState(true);

    // Keep track of the value in the date
    const [startDate, setStartDate] = useState<Dayjs | null>(null);
    const [endDate, setEndDate] = useState<Dayjs | null>(null);

    return <form>   
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div className="flex m-2 rounded-lg">
            <div className="flex basis-[100%] bg-gray-300 rounded-lg border border-gray-400">
                <div className="basis-1/3 px-4 py-2 border-r border-gray-400">
                    <input type="search" className="block bg-gray-300 w-full align-center text-sm focus:outline-none" placeholder="Where?" 
                        onFocus={() => { setWhenFocued((prevState) => {return false})}} 
                        onBlur={() => {setWhenFocued((prevState) => {return true})}}
                        required />
                </div>
                
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        label="Start Date"
                        value={startDate}
                        onChange={(newValue) => {
                            setStartDate(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                        className="text-sm"
                    />
                    <DatePicker
                        label="End Date"
                        value={endDate}
                        onChange={(newValue) => {
                            setEndDate(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>

                <div className="basis-1/4 px-4 py-2">
                    <input type="search" className="block bg-gray-300 w-full align-center text-sm focus:outline-none" placeholder="Who?" required />
                </div>
            </div>

            <button type="submit" className="text-white bg-blue-800 ml-2 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-4 py-2">Search</button>
        </div>


        <div id="dropdown" className={(whereFocused ? "hidden " : "") + "z-10 ml-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"} >
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
            <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Providence, RI</a>
            </li>
            <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Manhattan, NY</a>
            </li>
            <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Tokyo, Japan</a>
            </li>
            <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">BRUH</a>
            </li>
            </ul>
        </div>
        <div inline-datepicker data-date="02/25/2022"></div>
    </form>
}

export default SearchBar
