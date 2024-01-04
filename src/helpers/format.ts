import { format } from "date-fns";

export const formatDate = (dateString: string) => {
  const formattedDate = format(new Date(dateString), "HH:mm dd/MM/yyyy");
  return formattedDate;
};

export function formatNumber(value: string | number) {
  const numberValue = Number(value);
  if (!isNaN(numberValue)) {
    return numberValue.toFixed(2).replace('.', ',');
  }
  return value; 
}
