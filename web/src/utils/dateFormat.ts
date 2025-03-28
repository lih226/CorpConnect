/*
    Formats a date based on how recent it is (referenced from GroupMe):
    - Today: Shows time only (e.g., "9:24 AM")
    - Within a week: Shows day of week and time (e.g., "Wed 3:58 PM") 
    - Otherwise: Shows full date and time (e.g., "Mar 7, 2025, 7:46 PM")
*/
export function formatDateByRecency(date: Date): string {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const dateDay = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  
  // Time formatting options
  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  };
  
  // Calculate days difference
  const daysDiff = Math.floor((today.getTime() - dateDay.getTime()) / (1000 * 60 * 60 * 24));
  
  // Today: Show time only
  if (daysDiff === 0) {
    return date.toLocaleTimeString('en-US', timeOptions);
  }
  
  // Within the last week: Show day of week and time
  if (daysDiff > 0 && daysDiff < 7) {
    const weekdayOptions: Intl.DateTimeFormatOptions = {
      weekday: 'short',
      ...timeOptions
    };
    return date.toLocaleString('en-US', weekdayOptions);
  }
  
  // More than a week ago: Show full date and time
  const fullOptions: Intl.DateTimeFormatOptions = {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    ...timeOptions
  };
  
  return date.toLocaleString('en-US', fullOptions);
}