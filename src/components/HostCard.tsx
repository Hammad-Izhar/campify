import { Host } from "@prisma/client";
import { Card, Rating } from "flowbite-react";

interface HostCardProps {
  host: Host;
}

const HostCard = ({ host }: HostCardProps) => {
  return (
    <Card href="#">
      <div className="table w-full">
        <div className="table-header-group">
          <div className="table-row">
            <div className="table-cell pr-10 pb-1">
              <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                {host.name}
              </h5>
            </div>
            <div className="table-cell">
              <div>
                <Rating>
                  <Rating.Star />
                  <p className="ml-2 text-right text-sm font-bold text-gray-900 dark:text-white">
                    3.5
                  </p>
                </Rating>
              </div>
            </div>
          </div>

          <div className="table-row">
            <div className="table-cell pr-10">
              <span className="text-sm font-normal text-gray-700 dark:text-gray-400">
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
              <span className="text-sm font-normal text-gray-700 dark:text-gray-400">
                {"BIO"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default HostCard;
