'use client'

import { useNumber } from "@/providers/objectProvider";

export default function Home() {

  const n = useNumber();
  console.log(n);
  
  return (
    <div className="bg-amber-200 uppercase h-screen">
     up and running???
    </div>
  );
}
