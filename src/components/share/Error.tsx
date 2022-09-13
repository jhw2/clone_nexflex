import React from "react";
import styles from './error.module.css';

interface IError {
  msg: string;
}
export const Error = ({ msg }: IError) => {
  return <div className={styles.error_msg}>{msg}</div>;
};
