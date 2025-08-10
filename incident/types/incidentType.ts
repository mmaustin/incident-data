type GeocodedColumn = {
  type?: string,
  coordinates?: number[]
};

export type IncidentOccurrenceType = {
  "incident_key"?: string,
  "occur_date"?: string,
  "occur_time"?: string,
  "boro"?: string,
  "loc_of_occur_desc"?: string,
  "precinct"?: string,
  "jurisdiction_code"?: string,
  "loc_classfctn_desc"?: string,
  "location_desc"?: string,
  "statistical_murder_flag": string,
  "perp_age_group"?: string,
  "perp_sex"?: string,
  "perp_race"?: string,
  "vic_age_group": string,
  "vic_sex": string,
  "vic_race": string,
  "x_coord_cd"?: string,
  "y_coord_cd"?: string,
  "latitude": string,
  "longitude": string,
  "geocoded_column"?: GeocodedColumn,
  ":@computed_region_yeji_bk3q"?: string,
  ":@computed_region_92fq_4b7q"?: string,
  ":@computed_region_sbqj_enih"?: string,
  ":@computed_region_efsh_h5xi"?: string,
  ":@computed_region_f5dn_yrer"?: string  
};

//export default incidentOccurrenceType;