import axios, { AxiosResponse } from "axios";

interface RequestOptions {
  token?: string;
  file?: File;
}

const axiosBase = axios.create({
  timeout: 60000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const get = async <T>(
  path: string,
  opt?: RequestOptions
): Promise<T> => {
  let headers: any = {};
  try {
    if (opt?.token) {
      headers.Authorization = `Bearer ${opt?.token}`;
    }
    const res: AxiosResponse<T> = await axiosBase.get<T>(path, { headers });
    const { data } = res;
    return data;
  } catch (error) {
    return errorHandle(error);
  }
};

export const post = async <T>(
  path: string,
  items: any,
  opt?: RequestOptions
): Promise<T> => {
  let headers: any = {};
  try {
    if (opt?.token) {
      headers.Authorization = `Bearer ${opt?.token}`;
    }
    if (opt?.file) {
      headers["Content-Type"] = "multipart/form-data;";
    } else {
      // Handle other content types if needed
    }
    const res: AxiosResponse<T> = await axiosBase.post<T>(path, items, {
      headers,
    });
    const { data } = res;
    return data;
  } catch (error) {
    return errorHandle(error);
  }
};

export const json = async <T>(
  path: string,
  items: any,
  opt?: RequestOptions
): Promise<T> => {
  let headers: any = {};
  try {
    if (opt?.token) {
      headers.Authorization = `Bearer ${opt?.token}`;
    }
    let form = JSON.stringify(items);
    const res: AxiosResponse<T> = await axiosBase.post<T>(path, form, {
      headers,
    });
    const { data } = res;
    return data;
  } catch (error) {
    return errorHandle(error);
  }
};

const errorHandle = (error: any) => {
  console.log(error);
  return null;
};
