'use server';


export const incidentData = async(): Promise<string> => {
  try {
    const dataPromise = await fetch("https://data.cityofnewyork.us/resource/5ucz-vwe8.json");
    const dataUnwrapped = await dataPromise.json();

    const dataToString = JSON.stringify(dataUnwrapped);

    return dataToString;
    
  } catch (error) {
    console.log(error);    
  };

  return "There was an error while fetching the data.";

};