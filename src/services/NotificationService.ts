import { INotificationService, INotificationChannel, IUser } from "../core/interfaces";

export class NotificationService implements INotificationService {
  private channels: INotificationChannel[] = [];

  addChannel(channel: INotificationChannel): void {
    this.channels.push(channel);
  }

  notifyAll(user: IUser, message: string): void {
    this.channels.forEach(channel => channel.send(user, message));
  }
}
