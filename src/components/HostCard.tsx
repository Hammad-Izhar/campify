import { Host } from "@prisma/client";
import { Card, Rating } from "flowbite-react";
import { useEffect, useState } from "react";

interface HostCardProps {
  host: Host;
}

const HostCard = ({ host }: HostCardProps) => {
  const [age, setAge] = useState(99);
  const [rating, setRating] = useState(3.7);

  useEffect(() => {
    setAge(18 + Math.random() * 70);
    setRating(5 * Math.random());
  }, [host]);
  return (
    <Card className="bg-black">
      <div className="table w-full">
        <div className="table-header-group">
          <div className="table-row">
            <div className="table-cell pr-10 pb-1">
              <h5 className="text-xl font-bold tracking-tight ">{host.name}</h5>
            </div>
            <div className="table-cell">
              <div>
                <Rating>
                  <Rating.Star />
                  <p className="ml-2 text-right text-sm font-bold ">
                    {rating.toFixed(2)}
                  </p>
                </Rating>
              </div>
            </div>
          </div>

          <div className="table-row">
            <div className="table-cell pr-10">
              <span className="text-sm font-normal">
                {age.toFixed(0)} years old
              </span>
            </div>
          </div>

          <div className="table-row">
            <div className="table-cell pr-10">
              <span className="text-sm font-normal">{host.bio}</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default HostCard;
