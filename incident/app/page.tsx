/* eslint-disable @typescript-eslint/no-unused-vars */

import DataProvider from "@/components/clientProvider/DataProvider";
import { incidentData } from "@/utils/actions";
import { ReactNode } from "react";

export default async function Home() {

  const data = incidentData();
  console.log(typeof data);
  
  return (
    <div className="bg-amber-200 uppercase h-screen">
     up and running???
     <DataProvider d={data}/>
    </div>
  );
}
