const minutesInHour = 60;

const isMeetingInWorkTime = (startWork, finishWork, startMeeting, durationMeeting) => {

  const parseTimeToMinutes = (timeString) => {
    const time = timeString.split(':');
    const hours = parseInt(time[0], 10);
    const minutes = parseInt(time[1], 10);

    return hours * minutesInHour + minutes;
  };

  const startWorkInMinutes = parseTimeToMinutes(startWork);
  const finishWorkInMinutes = parseTimeToMinutes(finishWork);
  const startMeetingInMinutes = parseTimeToMinutes(startMeeting);
  const finishMeetingInMinutes = startMeetingInMinutes + durationMeeting;

  return startMeetingInMinutes >= startWorkInMinutes && finishMeetingInMinutes <= finishWorkInMinutes;
};

export { isMeetingInWorkTime };

