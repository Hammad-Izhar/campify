import { type NextPage } from "next";
import Listing from "../components/Listing"


const Components: NextPage = () => {
  return <div className='flex flex-wrap'>
    <div className='w-1/2'>
      <Listing
        name="Robert Scheideger"
        rating={3.14}
        gender="Male"
        age={21}
        interest="Likes to eat Peacock"
        experience="Camping for 40 years"
      />
    </div>
  </div>
};

export default Components;
