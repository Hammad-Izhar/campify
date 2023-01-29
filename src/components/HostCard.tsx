import { Card, Rating } from "flowbite-react";

interface ListingProps {
  name: string;
  rating: number;
  gender: string;
  age: number;
  distance: number;
  interest: string;
  experience: string;
}

const HostCard = ({
  name,
  rating,
  gender,
  age,
  distance,
  interest,
  experience,
}: ListingProps) => {
  return (
    <Card href="#">
      <div className="table w-full">
        <div className="table-header-group">
          <div className="table-row">
            <div className="table-cell pr-10 pb-1">
              <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                {name}
              </h5>
            </div>
            <div className="table-cell">
              <div>
                <Rating>
                  <Rating.Star />
                  <p className="ml-2 text-right text-sm font-bold text-gray-900 dark:text-white">
                    {rating}
                  </p>
                </Rating>
              </div>
            </div>
          </div>

          <div className="table-row">
            <div className="table-cell pr-10">
              <span className="text-sm font-normal text-gray-700 dark:text-gray-400">
                {" "}
                {gender}, {age} years old{" "}
              </span>
            </div>
          </div>

          <div className="table-row">
            <div className="table-cell pr-10">
              <span className="text-sm font-normal text-gray-700 dark:text-gray-400">
                {" "}
                {distance} miles away
              </span>
            </div>
          </div>

          <div className="table-row">
            <div className="table-cell pr-10">
              <span className="text-sm font-normal text-gray-700 dark:text-gray-400">
                {" "}
                {interest}{" "}
              </span>
            </div>
          </div>

          <div className="table-row">
            <div className="table-cell pr-10">
              <span className="text-sm font-normal text-gray-700 dark:text-gray-400">
                {" "}
                {experience}{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default HostCard;
