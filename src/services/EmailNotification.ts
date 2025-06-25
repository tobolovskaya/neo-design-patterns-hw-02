import { INotification, IUser, ILogger } from "../core/interfaces";

export class EmailNotification implements INotification {
  constructor(private logger: ILogger) {}

  send(user: IUser, message: string): void {
    this.logger.log(`Sending EMAIL to ${user.email}`);
    console.log(`Email sent to ${user.email}: ${message}`);
  }
}
