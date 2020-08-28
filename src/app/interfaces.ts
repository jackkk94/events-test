export interface Ievent {
  date: Date;
  name: IeventName;
  poster: Iposter;
  uuid: string;
  pg_rating: string;
  duration: string;
  description: Idescription;
  is_active: boolean;
  dateArray?: Date[];
  NearestSchedule: IShedule;
}

export interface IeventName {
  en: string;
  ru: string;
}

export interface Iposter {
  name: string;
  path: string;
}

export interface Idescription {
  en: string;
  ru: string;
}


export interface IdateItem {
  events: Ievent[];
  date: Date;
}

export interface IShedule {
  begin_time: Date;
  end_time: Date;
}