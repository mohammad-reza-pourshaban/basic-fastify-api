import { SmsService } from "../../interfaces/provider";

export class TwilioProvider implements SmsService {
    async sendMessage(phoneNumber: string, message: string): Promise<boolean> {
        console.log(`Sending SMS to ${phoneNumber} via Twilio: ${message}`);
        return true;
    }
}
