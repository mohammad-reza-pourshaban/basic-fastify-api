import { SMS_PROVIDERS } from "../providers/sms";
import smsRepository from "../repositories/notify/sms.repository";

class SmsService {
    async sendMessage(providerName: SMS_PROVIDERS, phoneNumber: string, message: string): Promise<boolean> {
        return await smsRepository.sendMessage(providerName, phoneNumber, message);
    }
}

export default new SmsService();
