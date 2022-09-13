import axios, { AxiosInstance } from "axios";
import { useCallback, useEffect, useState } from "react";

interface IUseAxios<T> {
  data: T | undefined;
  isOk: boolean;
  isloading: boolean;
  errorMsg: string;
}

export const useAxios = <T, P>(
  url: string,
  params: P | {} = {},
  customAxios?: AxiosInstance
): IUseAxios<T> => {
  const [data, setData] = useState<T>();
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [isloading, setloading] = useState(true);
  const http: AxiosInstance = customAxios ? customAxios : axios;

  useEffect(() => {
    getResponsData();
  }, [url]);

  const getResponsData = useCallback(async () => {
    try {
      setloading(true);
      const request = await http.get<T>(url, { params });
      setData(request.data);
    } catch (e: any) {
      setErrorMsg(e.message);
    } finally {
      setloading(false);
    }
  }, [url, params]);

  return {
    data,
    isOk: !errorMsg,
    isloading,
    errorMsg,
  };
};
