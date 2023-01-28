import { type NextPage } from "next";
import { api } from "../../utils/api";

const Experiences: NextPage = () => {
  const experiences = api.experiences.getWithinArea.useQuery({
    maxLatitute: 43.768585, 
    maxLongitude: -72.865057,
    minLatitute: 43.262290,
    minLongitude: -74.319066
  });

  return <div>
    <div><pre>{JSON.stringify(experiences, null, 2) }</pre></div>;
  </div>
};

export default Experiences;