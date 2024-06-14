import { baseUrl } from "./baseUrl.service";

export const userRegister = async (arg,form) => {
  try {
    const {data} = await baseUrl.post(arg,form);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
