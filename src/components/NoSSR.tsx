import dynamic from "next/dynamic";
import { ReactNode } from "react";

const NoSSRWrapper = (props: { children: ReactNode | ReactNode[] }) => {
  return <>{props.children} </>;
};

export default dynamic(() => Promise.resolve(NoSSRWrapper), { ssr: false });
