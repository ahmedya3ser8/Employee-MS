export const formatRange = (start: string, end: string) => {
  const startDate = new Date(start);
  const endDate = new Date(end);

  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "2-digit",
  };

  const startFormatted = startDate.toLocaleDateString("en-US", options);
  const endFormatted = endDate.toLocaleDateString("en-US", options);

  const year = endDate.getFullYear();

  return `${startFormatted} — ${endFormatted}, ${year}`;
};

export const formatMonthYear = (month: number, year: number) => {
  const date = new Date(year, month);
  return date.toLocaleString('en-US', {
    month: 'long',
    year: 'numeric'
  });
}

export const formatDate = (date: string | Date) => {
  if (!date) return null;

  return new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
};

export const formatTime = (date: string | Date) => {
  if (!date) return null;

  return new Date(date).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });
};

export const formatWorkingHours = (value: number) => {
  if (!value) return null;

  const totalMinutes = Math.round(value * 60);

  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return `${hours}h ${minutes}m`;
};