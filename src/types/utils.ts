export type WithTimestamps<T> = T & {
  created_at: string;
  updated_at: string;
  deleted_at?: string | null;
};

export interface Point {
  type: "Point";
  coordinates: [lat: number, long: number];
}
export interface Location {
  lat: number;
  long: number;
}
