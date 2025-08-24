import { IncidentOccurrenceType } from '@/types/incidentType';
import { boroughInput } from '@/types/boroughType';
import incidentArray from '@/incidentData/incidentArray';
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

export const useRechartsDataMaker = (): Array<DataIncidentType> => {

  const mappedData = new Map<string, number>();

  const arr: DataIncidentType[] = [];

  incidentArray.map(d => {
    if (mappedData.has(d.vic_age_group)) {
      mappedData.set(d.vic_age_group, mappedData.get(d.vic_age_group) as number + 1);
    } else {
      mappedData.set(d.vic_age_group, 1);
    }
  });

  for (const [key, value] of mappedData) {
    arr.push({ name: key, incidents: value });
  };

  return arr;
};