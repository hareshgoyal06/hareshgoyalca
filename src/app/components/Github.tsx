"use client";

import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import { VT323 } from 'next/font/google';

const vt323 = VT323({
  subsets: ['latin'],
  weight: '400',
});

// Flat theme for contributions (using a popular flat UI palette)
export const flatTheme = [
  "#2c3e50", // Level 0: no contributions (dark blue-gray)
  "#3498db", // Level 1: blue
  "#2ecc71", // Level 2: green
  "#f1c40f", // Level 3: yellow
  "#e74c3c", // Level 4: red
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
          light: flatTheme,
          dark: flatTheme,
        }}
        throwOnError={false}
      />
    </div>
  );
};

export default GreenThemeGitHubCalendar;
