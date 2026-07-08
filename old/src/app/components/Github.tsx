"use client";

import React from "react";
import GitHubCalendar from "react-github-calendar";
import { VT323 } from "next/font/google";

const vt323 = VT323({
  subsets: ["latin"],
  weight: "400",
});

// Flat theme for contributions (using a popular flat UI palette)
export const flatTheme = [
  "#2c3e50", // Level 0: no contributions (dark blue-gray)
  "#3498db", // Level 1: blue
  "#2ecc71", // Level 2: green
  "#f1c40f", // Level 3: yellow
  "#e74c3c", // Level 4: red
];

// Filter function: show contributions from the beginning of the current year
const selectCurrentYear = (contributions: any[]) => {
  const currentYear = new Date().getFullYear();

  return contributions.filter((activity) => {
    const date = new Date(activity.date);
    return date.getFullYear() === currentYear;
  });
};

const GreenThemeGitHubCalendar = () => {
  return (
    <div
      className={`${vt323.className} text-white p-2 rounded-lg w-full max-w-4xl mx-auto`}
      style={{
        margin: "1rem auto",
      }}
    >
      <GitHubCalendar
        username="hareshgoyal06"
        year="last"
        transformData={selectCurrentYear}
        transformTotalCount={true}
        hideColorLegend={false}
        hideMonthLabels={false}
        hideTotalCount={true}
        labels={{
          totalCount: "{{count}} contributions this year",
        }}
        // Scaled-down appearance settings
        blockMargin={6}
        blockRadius={3}
        blockSize={28}
        fontSize={26}
        colorScheme="dark"
        weekStart={0}
        // Custom container style with no background
        style={{
          padding: "0.5rem",
          borderRadius: "4px",
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
