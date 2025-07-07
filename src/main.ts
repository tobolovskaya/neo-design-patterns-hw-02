import { User } from "./models/User";
import { Logger } from "./services/Logger";
import { EmailNotification } from "./services/EmailNotification";
import { SMSNotification } from "./services/SMSNotification";
import { PushNotification } from "./services/PushNotification";
import { NotificationService } from "./services/NotificationService";
import { INotificationChannel } from "./core/interfaces";

// Compose dependencies
const logger = new Logger();
const notificationService = new NotificationService();

// Add channels via service (SRP)
const channels: INotificationChannel[] = [
  new EmailNotification(logger),
  new SMSNotification(logger),
  new PushNotification(logger)
];
channels.forEach(channel => notificationService.addChannel(channel));

// Create user
const user = new User(
  "example@email.com",
  "+380123456789",
  "device-token-abc"
);

// Send notifications via service
notificationService.notifyAll(user, "Ваш платіж оброблено успішно!");

           
