export type isFirstOnMonthDay = {
  i: number;
  date: number;
  dateKey: string;
  localDateData: Intl.DateTimeFormatOptions;
  fallback: string | number;
  monthOnFirstItem?: boolean;
};