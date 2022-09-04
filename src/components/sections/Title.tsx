import React from "react";
interface ITitle {
  classNames: string;
  children?: JSX.Element | JSX.Element[] | string;
}
export const Title = ({ classNames, children }: ITitle) => {
  return <h1 className={classNames}>{children}</h1>;
};
