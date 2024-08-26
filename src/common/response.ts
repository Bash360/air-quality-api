export class StandardResponse<T> {
  statusCode: number;
  Result: T;

  constructor(statusCode: number, data: T = null) {
    this.statusCode = statusCode;
    this.Result = data;
  }
}
