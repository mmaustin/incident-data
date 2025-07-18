


const BrooklynDemographics = ({dataString}: {dataString: string}) => {
  const parsedData = JSON.parse(dataString);
  console.log(parsedData.length);
  

  return (
    <div>BrooklynDemographics</div>
  )
}
export default BrooklynDemographics