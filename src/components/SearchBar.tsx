import { type NextPage } from "next";
import { Dayjs } from "dayjs";
import { useState } from "react";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { createTheme, TextField, ThemeProvider } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { LOCATIONS, TAGS, useMapState } from "../state/useMapState";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const SearchBar: NextPage = () => {
  // Keep track of the value in the date
  const [startDate, setStartDate] = useState<Dayjs | null>(null);
  const [endDate, setEndDate] = useState<Dayjs | null>(null);
  const [location, setLocation] = useState<string>("");

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

  // Keep Track of activities
  const searchMap = useMapState((state) => state.searchMap);
  const [activityName, setActivityName] = useState<string[]>(TAGS);
  const handleChange = (event: SelectChangeEvent<typeof activityName>) => {
    const {
      target: { value },
    } = event;
    setActivityName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const submit = (e: any) => {
    console.log("activities", activityName);
    searchMap(
      location,
      startDate === null ? undefined : startDate.toDate(),
      endDate === null ? undefined : endDate.toDate(),
      activityName.map((s) => s.toLowerCase())
    );
    return false;
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="m-2 flex justify-center rounded-lg">
        <FormControl
          className="align-center mx-1 basis-1/6"
          onChange={(e) => console.log("change", e)}
        >
          <Autocomplete
            disablePortal
            id="locationChoice"
            options={LOCATIONS}
            onInputChange={(e) => setLocation((e.target as any).innerText)}
            renderInput={(params) => (
              <TextField
                sx={{ className: "text-white" }}
                {...params}
                label="Location"
                onChange={(e) => console.log("inside change", e)}
              />
            )}
          />
        </FormControl>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Start Date"
            value={startDate}
            onChange={(newValue) => {
              setStartDate(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
            className="mx-1"
          />
          <DatePicker
            label="End Date"
            value={endDate}
            onChange={(newValue) => {
              setEndDate(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
            className="mx-1"
          />
        </LocalizationProvider>

        <FormControl className="mx-1 basis-1/6">
          <InputLabel id="activityChoice">Activity</InputLabel>
          <Select
            labelId="activityChoice"
            id="activityChoice"
            multiple
            value={activityName}
            onChange={handleChange}
            input={<OutlinedInput label="Activity" />}
            renderValue={(selected) => selected.join(", ")}
            MenuProps={MenuProps}
          >
            {TAGS.map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={activityName.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <button
          type="button"
          className="ml-1 rounded-lg bg-blue-800 px-4 py-2 text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
          onClick={submit}
        >
          Search
        </button>
      </div>
    </ThemeProvider>
  );
};

export default SearchBar;
