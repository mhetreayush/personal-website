"use client";

import { useDaysAgoFromDate } from "../hooks/useGetDaysAgoFromDate";

const PostedAgo = ({ date }: { date: string }) => {
  const { daysAgo } = useDaysAgoFromDate(date);

  return <p className="italic text-gray-800">Posted {daysAgo} days ago.</p>;
};

export { PostedAgo };
