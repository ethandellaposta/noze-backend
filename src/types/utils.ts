export type WithTimestamps<T> = T & {
  created_at: string;
  updated_at: string;
  deleted_at?: string | null;
};

export interface Point {
  x: number;
  y: number;
}
