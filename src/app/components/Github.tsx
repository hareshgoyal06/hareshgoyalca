"use client";

import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import { VT323 } from 'next/font/google';

const vt323 = VT323({
  subsets: ['latin'],
  weight: '400',
});

// Mid-tone green theme for contributions
export const greenThemeMid = [
  "#e8f5e9", // very light green
  "#c8e6c9", // light green
  "#a5d6a7", // moderate green
  "#81c784", // saturated green
  "#66bb6a", // darker green for high commit levels
];

// Filter function: only show contributions from the last 6 months
const selectLastHalfYear = (contributions: any[]) => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth(); // 0-indexed
  const shownMonths = 6;

  return contributions.filter((activity) => {
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
      className={`${vt323.className} text-white p-2 rounded-lg w-full max-w-md mx-auto`}
      style={{
        margin: '1rem auto',
      }}
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
        // Scaled-down appearance settings
        blockMargin={5}
        blockRadius={2}
        blockSize={24}
        fontSize={24}
        colorScheme="dark"
        weekStart={0}
        // Custom container style with no background
        style={{
          padding: '0.5rem',
          borderRadius: '4px',
        }}
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
