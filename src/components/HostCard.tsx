import { Host } from "@prisma/client";
import { Card, Rating } from "flowbite-react";

interface HostCardProps {
  host: Host;
}

const HostCard = ({ host }: HostCardProps) => {
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
                    {(Math.random() * 5).toFixed(1)}
                  </p>
                </Rating>
              </div>
            </div>
          </div>

          <div className="table-row">
            <div className="table-cell pr-10">
              <span className="text-sm font-normal">
                {Math.round(
                  (Date.now() - host.dob.getMilliseconds()) /
                    (1000 * 60 * 60 * 24 * 365.25)
                )}{" "}
                years old{" "}
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
