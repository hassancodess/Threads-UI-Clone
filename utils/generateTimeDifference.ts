export const getTimeDifference = (inputDate: string): string =>  {
    const currentDate = new Date();
    const timeDifference = currentDate.getTime() - new Date(inputDate).getTime();
  
    const millisecondsPerMinute = 60 * 1000;
    const millisecondsPerHour = 60 * 60 * 1000;
    const millisecondsPerDay = 24 * 60 * 60 * 1000;
  
    if (timeDifference < millisecondsPerMinute) {
      return 'just now';
    } else if (timeDifference < millisecondsPerHour) {
      const minutes = Math.floor(timeDifference / millisecondsPerMinute);
      return `${minutes}m ago `;
    } else if (timeDifference < millisecondsPerDay) {
      const hours = Math.floor(timeDifference / millisecondsPerHour);
      return `${hours}h ago`;
    } else if (timeDifference < millisecondsPerDay * 2) {
      return 'yesterday';
    } else {
      const days = Math.floor(timeDifference / millisecondsPerDay);
      return `${days}d ago`;
    }
  }
  