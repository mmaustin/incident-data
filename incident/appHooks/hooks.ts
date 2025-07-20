import { incidentOccurrenceType } from '@/types/incidentType';

export const useBrooklynData = (data: [incidentOccurrenceType]): Array<incidentOccurrenceType> => {
  const filteredData = data.map(incident => {
    if(incident.boro === 'BROOKLYN'){
      return incident;
    };
  });
  return filteredData as [incidentOccurrenceType];
};