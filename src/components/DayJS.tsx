import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import timezone from 'dayjs/plugin/timezone';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import utc from 'dayjs/plugin/utc';
import React from 'react';

export default function DayJS({
  date,
  format,
}: {
  date: string;
  format?: string;
}): JSX.Element {
  dayjs.extend(utc);
  dayjs.extend(timezone);
  dayjs.extend(localizedFormat);
  dayjs.extend(advancedFormat);

  return (
    <>
      {dayjs(date)
        .tz(dayjs.tz.guess())
        .format(format ?? 'LLLL z')}
    </>
  );
}
