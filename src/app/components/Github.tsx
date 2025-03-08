"use client";

import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import { VT323 } from 'next/font/google';

const vt323 = VT323({
  subsets: ['latin'],
  weight: '400',
});

// Middle ground green theme for contributions—lighter greens for fewer commits and darker greens for more.
export const greenThemeMid = [
    "#e8f5e9", // very light green
    "#c8e6c9", // light green
    "#a5d6a7", // moderate green
    "#81c784", // saturated green
    "#66bb6a", // darker green for high commit levels
];

// Filter function: only show contributions from the last 6 months of the current year.
const selectLastHalfYear = (contributions: any[]) => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth(); // 0-indexed
  const shownMonths = 6;

  return contributions.filter((activity: { date: string | number | Date }) => {
    const date = new Date(activity.date);
    const monthOfDay = date.getMonth();
    return (
      date.getFullYear() === currentYear &&
      monthOfDay > currentMonth - shownMonths &&
      monthOfDay <= currentMonth
    );
  });
};

const GreenThemeGitHubCalendar = () => {
  return (
    <div
      style={{ margin: '2rem auto', maxWidth: '800px' }}
      className={vt323.className} // Apply VT323 font
    >
      <GitHubCalendar
        username="hareshgoyal06"
        year="last"
        transformData={selectLastHalfYear}
        transformTotalCount={true}
        hideColorLegend={false}
        hideMonthLabels={false}
        hideTotalCount={true}
        labels={{
          totalCount: '{{count}} contributions in the last half year',
        }}
        // Appearance settings: bigger boxes and larger text
        blockMargin={5}
        blockRadius={2}
        blockSize={24}
        fontSize={26}
        colorScheme="dark"
        weekStart={0}
        // Custom container style: pitch-black background with no border
        style={{
          padding: '1rem',
          borderRadius: '8px',
          backgroundColor: '#000000',
        }}
        // Use the custom mid-tone green theme for both light and dark modes.
        theme={{
          light: greenThemeMid,
          dark: greenThemeMid,
        }}
        throwOnError={false}
      />
    </div>
  );
};

export default GreenThemeGitHubCalendar;
