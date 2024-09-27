import { SmsService } from "../../interfaces/provider";

export class KavenegarsProvider implements SmsService {
    async sendMessage(phoneNumber: string, message: string): Promise<boolean> {
        console.log(`Sending SMS to ${phoneNumber} via Kavenegar: ${message}`);
        return true;
    }
}
