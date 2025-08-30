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

  const mappedData = new Map<string, number>();

  const arr: DataIncidentType[] = [];

  boroughData.map(dataSet => {
    if (mappedData.has(dataSet.vic_age_group)) {
      mappedData.set(dataSet.vic_age_group, mappedData.get(dataSet.vic_age_group) as number + 1);
    } else {
      mappedData.set(dataSet.vic_age_group, 1);
    }
  });

  for (const [key, value] of mappedData) {
    arr.push({ name: key, incidents: value });
  };

  return arr;
};

export const useRechartsDataMakerMurder = (boroughData: Array<IncidentOccurrenceType>): Array<DataIncidentType> => {

  const mappedData = new Map<string, number>();

  const arr: DataIncidentType[] = [];

  boroughData.map(dataSet => {
    if (mappedData.has(dataSet.statistical_murder_flag)) {
      mappedData.set(dataSet.statistical_murder_flag, mappedData.get(dataSet.statistical_murder_flag) as number + 1);
    } else {
      mappedData.set(dataSet.statistical_murder_flag, 1);
    }
  });

  for (const [key, value] of mappedData) {
    arr.push({ name: key, incidents: value });
  };

  return arr;
};