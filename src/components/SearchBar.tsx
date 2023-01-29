import { type NextPage } from "next";
import { Dayjs } from 'dayjs';
import { useState } from "react";
import { ListGroup } from "flowbite-react";
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TextField } from "@mui/material";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

const SearchBar: NextPage = () => {

    // Keep track of the focus state in the Where
    const [whereFocused, setWhenFocued] = useState(true);

    // Keep track of the value in the date
    const [startDate, setStartDate] = useState<Dayjs | null>(null);
    const [endDate, setEndDate] = useState<Dayjs | null>(null);

    // Activities dropdown parameters
    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
    PaperProps: {
        style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
        },
    },
    };

    const activities = [
        'Camping',
        'Hiking',
        'Rocking Climbing',
        'Canoeing',
        'Kayaking',
        'Sailing',
        'Skiing',
        'Snowboarding',
        'Swimming',
        'Scuba Diving',
        'Other'
      ];

    // Keep Track of activities
    const [activityName, setActivityName] = useState<string[]>([]);
    const handleChange = (event: SelectChangeEvent<typeof activityName>) => {
            const {
                target: { value },
            } = event;
            setActivityName(
                // On autofill we get a stringified value.
                typeof value === 'string' ? value.split(',') : value,
            );
        };
      
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

                <div className="basis-1/4">
                    <FormControl sx={{ width: 200 }}>
                        <InputLabel id="activityChoice">Activity</InputLabel>
                        <Select
                            labelId="activityChoice"
                            id="activityChoice"
                            multiple
                            value={activityName}
                            onChange={handleChange}
                            input={<OutlinedInput label="Activity" />}
                            renderValue={(selected) => selected.join(', ')}
                            MenuProps={MenuProps}
                        >
                        {activities.map((name) => (
                            <MenuItem key={name} value={name}>
                            <Checkbox checked={activityName.indexOf(name) > -1} />
                            <ListItemText primary={name} />
                            </MenuItem>
                        ))}
                        </Select>
                    </FormControl>
                </div>
            </div>

            <button type="submit" className="text-white bg-blue-800 ml-2 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg px-4 py-2">Search</button>
        </div>


        <div className={(whereFocused ? "hidden " : "") + "w-48"}>
            <ListGroup>
                <ListGroup.Item>
                Profile
                </ListGroup.Item>
                <ListGroup.Item>
                Settings
                </ListGroup.Item>
                <ListGroup.Item>
                Messages
                </ListGroup.Item>
                <ListGroup.Item>
                Download
                </ListGroup.Item>
            </ListGroup>
        </div>
    </form>
}

export default SearchBar
