import { IncidentOccurrenceType } from '@/types/incidentType';
import { boroughInput } from '@/types/boroughType'

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
  // = data.map(incident => {
  //   if (incident.boro === type) {
  //     return incident;
  //   };
  // }
  // );
  
  return filteredData as [IncidentOccurrenceType];
};

//export const allBoroughsData