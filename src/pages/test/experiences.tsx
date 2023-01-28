import { type NextPage } from "next";
import { api } from "../../utils/api";

const Experiences: NextPage = () => {
  const experiences = api.experiences.getWithinArea.useQuery({
    maxLatitude: 43.768585,
    maxLongitude: -72.865057,
    minLatitude: 43.26229,
    minLongitude: -74.319066,
  });

  return (
    <div>
      <div>
        <pre>{JSON.stringify(experiences, null, 2)}</pre>
      </div>
      ;
    </div>
  );
};

export default Experiences;
