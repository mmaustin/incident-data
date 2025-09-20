'use client'
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEveryOdd } from "@/appHooks/hooks";
import { Button } from "@/components/ui/button";

const TryingToRemember = () => {

  const appleBrownBetty = (abb: string) => {
    console.log(abb);  
  }

    // const everyOther = useEveryOdd("How much would could a woodchuck chuck if a woodchuck could chuck wood.");
    // console.log(everyOther);

  return (
    <div>
      <Button onClick={() => appleBrownBetty("Apple Brown Betty")}>Activate</Button>
    </div>
  )
}
export default TryingToRemember;