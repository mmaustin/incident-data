import { IncidentOccurrenceType } from '@/types/incidentType';
import { boroughInput } from '@/types/boroughType';
import { DataIncidentType } from '@/types/dataTypes';

export const useBrooklynData = (data: Array<IncidentOccurrenceType>): Array<IncidentOccurrenceType> => {
  const filteredData = data.map(incident => {
    if (incident.boro === 'BROOKLYN') {
      return incident;
    };
  }
  );
  return filteredData as [IncidentOccurrenceType];
};

export const useBronxData = (data: Array<IncidentOccurrenceType>): Array<IncidentOccurrenceType> => {
  const filteredData = data.map(incident => {
    if (incident.boro === 'BRONX') {
      return incident;
    };
  }
  );
  return filteredData as [IncidentOccurrenceType];
};

export const useManhattanData = (data: Array<IncidentOccurrenceType>): Array<IncidentOccurrenceType> => {
  const filteredData = data.map(incident => {
    if (incident.boro === 'MANHATTAN') {
      return incident;
    };
  }
  );
  return filteredData as [IncidentOccurrenceType];
};
export const useSIData = (data: Array<IncidentOccurrenceType>): Array<IncidentOccurrenceType> => {
  const filteredData = data.map(incident => {
    if (incident.boro === 'STATEN ISLAND') {
      return incident;
    };
  }
  );
  return filteredData as [IncidentOccurrenceType];
};
export const useQueensData = (data: Array<IncidentOccurrenceType>): Array<IncidentOccurrenceType> => {
  const filteredData = data.map(incident => {
    if (incident.boro === 'QUEENS') {
      return incident;
    };
  }
  );
  return filteredData as [IncidentOccurrenceType];
};

export const useUniversalData = (type: boroughInput, data: Array<IncidentOccurrenceType>): Array<IncidentOccurrenceType> => {
  const filteredData = data.filter(incident => incident.boro === type);
  
  return filteredData as [IncidentOccurrenceType];
};

export const useRechartsDataMaker = (boroughData: Array<IncidentOccurrenceType>): Array<DataIncidentType> => {

  const mappedDataOne = new Map<string, number>();

  const arr: DataIncidentType[] = [];

  boroughData.map(dataSet => {
    if (mappedDataOne.has(dataSet.vic_age_group)) {
      mappedDataOne.set(dataSet.vic_age_group, mappedDataOne.get(dataSet.vic_age_group) as number + 1);
    } else {
      mappedDataOne.set(dataSet.vic_age_group, 1);
    }
  });

  for (const [key, value] of mappedDataOne) {
    arr.push({ name: key, incidents: value });
  };

  return arr;
};

export const useRechartsDataMakerMurder = (boroughData: Array<IncidentOccurrenceType>): Array<DataIncidentType> => {

  const mappedDataOne = new Map<string, number>();

  const arr: DataIncidentType[] = [];

  boroughData.map(dataSet => {
    if (mappedDataOne.has(dataSet.statistical_murder_flag)) {
      mappedDataOne.set(dataSet.statistical_murder_flag, mappedDataOne.get(dataSet.statistical_murder_flag) as number + 1);
    } else {
      mappedDataOne.set(dataSet.statistical_murder_flag, 1);
    }
  });

  for (const [key, value] of mappedDataOne) {
    arr.push({ name: key, incidents: value });
  };

  return arr;
};

export const useRechartsDataMakerDemographics = (boroughData: Array<IncidentOccurrenceType>): Array<DataIncidentType[]> => {

  const mappedDataOne = new Map<string, number>();
  const mappedDataTwo = new Map<string, number>();

  const arrOne: DataIncidentType[] = [];
  const arrTwo: DataIncidentType[] = [];

  boroughData.map(dataSet => {
    if (mappedDataOne.has(dataSet.vic_race)) {
      mappedDataOne.set(dataSet.vic_race, mappedDataOne.get(dataSet.vic_race) as number + 1);
    } else {
      mappedDataOne.set(dataSet.vic_race, 1);
    }
  });

  boroughData.map(dataSet => {
    if (mappedDataTwo.has(dataSet.perp_race)) {
      mappedDataTwo.set(dataSet.perp_race, mappedDataTwo.get(dataSet.perp_race) as number + 1);
    } else {
      mappedDataTwo.set(dataSet.perp_race, 1);
    }
  });

  for (const [key, value] of mappedDataOne) {
    arrOne.push({ name: key, incidents: value });
  };

  for (const [key, value] of mappedDataTwo) {
    arrTwo.push({ name: key, incidents: value });
  };
  
  return [arrOne, arrTwo];
};

export const useEveryOdd = (sentence: string): Array<string> => {

  const arr: Array<string> = [];
  const splitSentence: Array<string> = sentence.split(" ");

  for(let i = 0; i < splitSentence.length; i++){
    if(i % 2 !== 0){
      arr.push(splitSentence[i]);
    };
  }

  return arr;

}