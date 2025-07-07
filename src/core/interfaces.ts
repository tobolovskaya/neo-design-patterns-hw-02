export interface ILogger {
  log(message: string): void;
}

export interface IUser {
  email: string;
  phone: string;
  deviceToken: string;
}

export interface INotificationChannel {
  send(user: IUser, message: string): void;
}

export interface INotificationService {
  addChannel(channel: INotificationChannel): void;
  notifyAll(user: IUser, message: string): void;
}
