export default class ResponseModel<T>{
  data?: T;
  message?: string;
  errors?: boolean;
}
