import { type NextPage } from "next";
import Listing from "../components/Listing"


const Components: NextPage = () => {
  return <div className='flex flex-wrap'>
      <div className='w-1/3'>
          <Listing
              name="Robert Scheidegger"
              rating={3.14}
              gender="Male"
              age={21}
              distance={0.5}
              interest="Likes to eat Peacock"
              experience="Camping for 40 years"
          />
      </div>
  </div>
};

export default Components;
