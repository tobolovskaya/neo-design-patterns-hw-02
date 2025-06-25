import { INotification, IUser, ILogger } from "../core/interfaces";

export class SMSNotification implements INotification {
  constructor(private logger: ILogger) {}

  send(user: IUser, message: string): void {
    this.logger.log(`Sending SMS to ${user.phone}`);
    console.log(`SMS sent to ${user.phone}: ${message}`);
  }
}
