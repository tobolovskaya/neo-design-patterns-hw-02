import { User } from '../models/User';

export interface INotificationChannel {
    send(message: string): void;
}

export interface ILogger {
    log(message: string): void;
}

export interface INotification {
  send(user: IUser, message: string): void;
}

export interface IUser {
  email: string;
  phone: string;
  deviceToken: string;
}

export interface INotificationService {
    addChannel(channel: INotificationChannel): void;
    sendEmail(user: User, message: string): void;
    sendSMS(user: User, message: string): void;
    sendPush(user: User, message: string): void;
}
