import { SmsProviderManager } from "../../providers/sms";

class SmsRepository {
    private providerManager: SmsProviderManager;

    constructor() {
        this.providerManager = new SmsProviderManager();
    }

    async sendMessage(providerName: string, phoneNumber: string, message: string): Promise<boolean> {
        const provider = this.providerManager.getProvider(providerName);
        return await provider.sendMessage(phoneNumber, message);
    }
}

export default new SmsRepository();
