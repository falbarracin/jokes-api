export class ExternalServiceError extends Error {
  status: number;
  constructor(service: string) {
    super(`External service ${service} failed`);
    this.status = 502;
    this.name = "ExternalServiceError";
  }
}