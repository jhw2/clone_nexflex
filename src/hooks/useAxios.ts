import axios, { AxiosInstance } from "axios";
import { useEffect, useState } from "react";

interface IUseAxios<T> {
  data: T | undefined;
  isOk: boolean;
  isloading: boolean;
  errorMsg: string;
}

export const useAxios = <T>(url: string, customAxios?: AxiosInstance): IUseAxios<T> => {
const [data, setData] = useState<T>();
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [isloading, setloading] = useState(true);
  const http: AxiosInstance = customAxios ? customAxios : axios;

  useEffect(() => {
    getResponsData();
  }, []);

  const getResponsData = async () => {
    try {
      setloading(true);
      const request = await http.get<T>(url);
      setData(request.data);
    } catch (e: any) {
      setErrorMsg(e.message);
    } finally {
      setloading(false);
    }
  };

  return {
    data,
    isOk: !errorMsg,
    isloading,
    errorMsg,
  };
};
