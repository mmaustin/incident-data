'use client';

const BrooklynDemoDisplay = ({dataString}: {dataString: string}) => {
  const parsedData = JSON.parse(dataString);
  console.log(parsedData.length);
  

  return (
    <div className="h-screen">Brooklyn Demo Display</div>
  )
}
export default BrooklynDemoDisplay;