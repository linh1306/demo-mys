import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
const baseURL = 'https://dev.mys.tinasoft.com.vn'
export interface ILoginBody {
  emailOrUsername: string;
  password: string;
  userFcmToken?: {
    token: string;
    deviceId: string;
  };
}
export interface ILoginResponse {
  accessToken: string;
  refreshToken: string;
  role?: number | string;
}

const path = {
  login: "/auth/login",
};

async function login(body: ILoginBody): Promise<ILoginResponse> {
  try {
    const response = await axios.post(baseURL + path.login, body);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error('Đã xảy ra lỗi:', error);
    return {} as ILoginResponse;
  }
}

export { login }