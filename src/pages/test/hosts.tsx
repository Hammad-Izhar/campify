import { type NextPage } from "next";
import { api } from "../../utils/api";

const Hosts: NextPage = () => {
  const hello = api.hosts.all.useQuery();

  return <div>
    <div><pre>{JSON.stringify(hello, null, 2) }</pre></div>;
  </div>
};

export default Hosts;