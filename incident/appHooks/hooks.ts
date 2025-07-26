import { incidentOccurrenceType } from '@/types/incidentType';
import { boroughInput } from '@/types/boroughType'

export const useBrooklynData = (data: Array<incidentOccurrenceType>): Array<incidentOccurrenceType> => {
  const filteredData = data.map(incident => {
    if (incident.boro === 'BROOKLYN') {
      return incident;
    };
  }
  );
  return filteredData as [incidentOccurrenceType];
};

export const useBronxData = (data: Array<incidentOccurrenceType>): Array<incidentOccurrenceType> => {
  const filteredData = data.map(incident => {
    if (incident.boro === 'BRONX') {
      return incident;
    };
  }
  );
  return filteredData as [incidentOccurrenceType];
};

export const useManhattanData = (data: Array<incidentOccurrenceType>): Array<incidentOccurrenceType> => {
  const filteredData = data.map(incident => {
    if (incident.boro === 'MANHATTAN') {
      return incident;
    };
  }
  );
  return filteredData as [incidentOccurrenceType];
};
export const useSIData = (data: Array<incidentOccurrenceType>): Array<incidentOccurrenceType> => {
  const filteredData = data.map(incident => {
    if (incident.boro === 'STATEN ISLAND') {
      return incident;
    };
  }
  );
  return filteredData as [incidentOccurrenceType];
};
export const useQueensData = (data: Array<incidentOccurrenceType>): Array<incidentOccurrenceType> => {
  const filteredData = data.map(incident => {
    if (incident.boro === 'QUEENS') {
      return incident;
    };
  }
  );
  return filteredData as [incidentOccurrenceType];
};

export const useUniversalData = (type: boroughInput, data: Array<incidentOccurrenceType>): Array<incidentOccurrenceType> => {
  const filteredData = data.map(incident => {
    if (incident.boro === type) {
      return incident;
    };
  }
  );
  return filteredData as [incidentOccurrenceType];
};

//export const allBoroughsData