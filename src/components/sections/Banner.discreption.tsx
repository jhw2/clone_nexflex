import React, { memo } from "react";
interface IBanner_background {
  overview: string;
}
const truncate = (str: string | undefined, n: number): string => {
  if (!str) return "";
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
};
export const Banner_description = memo(
  ({ overview }: IBanner_background) => {
    return (
      <h1 className="banner_description">
        {truncate(overview, 100)}
      </h1>
    );
  }
);
Banner_description.displayName = "Banner_description";
