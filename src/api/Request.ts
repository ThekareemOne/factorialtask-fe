import axios, { AxiosResponse } from "axios"
import Global from "./Global"
import { RequestOptions, Data, Parameters, ContentType } from "../types"

axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL

const Request = {
  post: <T>(
    url: string,
    data: Data,
    contentType: ContentType = "application/json",
  ): Promise<T> => {
    const method = "POST"
    return RequestHandler.handleRequest<T>({ url, data, method, contentType })
  },
  get: <T>(
    url: string,
    parameters?: Parameters,
    contentType = "application/json",
    accept = "application/json",
  ): Promise<T> => {
    const method = "GET"
    return RequestHandler.handleRequest<T>({
      url,
      parameters,
      method,
      contentType,
      accept,
    })
  },
  patch: <T>(
    url: string,
    data: Data,
    contentType = "application/json",
  ): Promise<T> => {
    const method = "PATCH"
    return RequestHandler.handleRequest<T>({ url, data, method, contentType })
  },
  put: <T>(
    url: string,
    data: Data,
    contentType = "application/json",
  ): Promise<T> => {
    const method = "PUT"
    return RequestHandler.handleRequest<T>({ url, data, method, contentType })
  },
  option: <T>(
    url: string,
    data: Data,
    contentType = "application/json",
  ): Promise<T> => {
    const method = "OPTIONS"
    return RequestHandler.handleRequest<T>({ url, data, method, contentType })
  },
  delete: <T>(
    url: string,
    parameters: Parameters,
    contentType = "application/json",
  ): Promise<T> => {
    const method = "DELETE"
    return RequestHandler.handleRequest<T>({
      url,
      parameters,
      method,
      contentType,
    })
  },
}

const RequestHandler = {
  handleRequest: <T>({
    url,
    data,
    method,
    contentType,
    accept,
  }: RequestOptions): Promise<T> => {
    return new Promise((resolve, reject) => {
      axios({
        method,
        url,
        data,
        headers: {
          Accept: accept || Global.accept,
          "Content-Type": contentType,
        },
      })
        .then(function (response) {
          resolve(response.data as T)
        })
        .catch(function (error) {
          reject(error)
        })
    })
  },
  handleResponse: (response: AxiosResponse) => {
    return response
  },
}

export default Request
