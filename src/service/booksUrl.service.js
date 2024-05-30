import { baseUrl } from "./baseUrl.service";

export const getBookUrl = async (arg) => {
  try {
    const {data} = await baseUrl.get(arg);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
