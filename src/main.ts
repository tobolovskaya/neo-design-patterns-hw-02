import { User } from "./models/User";
import { Logger } from "./services/Logger";
import { EmailNotification } from "./services/EmailNotification";
import { SMSNotification } from "./services/SMSNotification";
import { PushNotification } from "./services/PushNotification";

// Compose dependencies
const logger = new Logger();
const channels = [
  new EmailNotification(logger),
  new SMSNotification(logger),
  new PushNotification(logger),
];

// Create user with injected channels
const user = new User(
  "example@email.com",
  "+380123456789",
  "device-token-abc",
  channels
);

// Use
user.sendNotification("Ваш платіж оброблено успішно!");

           
