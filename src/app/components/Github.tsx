import React from 'react';

import GitHubCalendar from 'react-github-calendar';
// Filter function: only show contributions from the last 6 months of the current year.
const selectLastHalfYear = (contributions: any[]) => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth(); // Month is 0-indexed
  const shownMonths = 6;

  return contributions.filter((activity: { date: string | number | Date; }) => {
    const date = new Date(activity.date);
    const monthOfDay = date.getMonth();
    return (
      date.getFullYear() === currentYear &&
      monthOfDay > currentMonth - shownMonths &&
      monthOfDay <= currentMonth
    );
  });
};

const HalfYearGitHubCalendar = () => {
  return (
    <div style={{ margin: '2rem auto', maxWidth: '800px' }}>
      <GitHubCalendar
        username="hareshgoyal06"
        year="last" // Render the most recent year (like on GitHub)
        transformData={selectLastHalfYear}
        transformTotalCount={true}
        hideColorLegend={false}
        hideMonthLabels={false}
        hideTotalCount={false}
        labels={{
          totalCount: '{{count}} contributions in the last half year',
        }}
        // Appearance settings
        blockMargin={4}
        blockRadius={2}
        blockSize={12}
        fontSize={14}
        colorScheme="dark" // Enforce dark color scheme
        weekStart={0} // Sunday as start of the week
        // Custom container style
        style={{
          border: '2px solid #333',
          padding: '1rem',
          borderRadius: '8px',
          backgroundColor: '#1e1e1e',
        }}
        // Custom theme colors for light and dark modes
        theme={{
          light: ['#ebedf0', '#c6e48b', '#7bc96f', '#239a3b', '#196127'],
          dark: ['#1e1e1e', '#2d2d2d', '#3c3c3c', '#4b4b4b', '#5a5a5a'],
        }}
        // Optional: Handle errors gracefully without throwing
        throwOnError={false}
      />
    </div>
  );
};

export default HalfYearGitHubCalendar;
