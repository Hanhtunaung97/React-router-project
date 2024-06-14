import { baseUrl } from "./baseUrl.service";

export const Auth = async (arg, form) => {
  try {
    const { data } = await baseUrl.get(arg);
    const finder = data?.find((el) => el.email === form.email);
    if (!finder) {
      throw new Error("Email not Correct!");
    }
    const comparePassword = finder.password === form.password;
    if (!comparePassword) {
      throw new Error("Password not Correct");
    }
    return finder;
  } catch (error) {
    throw new Error(error.message);
  }
};
