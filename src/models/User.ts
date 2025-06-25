import { INotification, IUser } from "../core/interfaces";

export class User implements IUser {
  constructor(
    public email: string,
    public phone: string,
    public deviceToken: string,
    private channels: INotification[]
  ) {}

  sendNotification(message: string): void {
    this.channels.forEach((channel) => channel.send(this, message));
  }
}
