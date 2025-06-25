import { INotification, IUser, ILogger } from "../core/interfaces";

export class PushNotification implements INotification {
  constructor(private logger: ILogger) {}

  send(user: IUser, message: string): void {
    this.logger.log(`Sending PUSH to ${user.deviceToken}`);
    console.log(`Push sent to ${user.deviceToken}: ${message}`);
  }
}
