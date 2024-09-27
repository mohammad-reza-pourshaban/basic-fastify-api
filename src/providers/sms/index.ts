import { SmsService } from "../../interfaces/provider";
import { KavenegarsProvider } from "./kavenegar.provider";
import { TwilioProvider } from "./Twilio.provider";

export enum SMS_PROVIDERS {
    TWILIO = 'TWILIO',
    KAVENEGAR = 'KAVENEGAR'
}

export class SmsProviderManager {
    private providers: { [key: string]: SmsService } = {};

    constructor() {
        this.providers[SMS_PROVIDERS.TWILIO] = new TwilioProvider();
        this.providers[SMS_PROVIDERS.KAVENEGAR] = new KavenegarsProvider();
    }

    getProvider(providerName: string): SmsService {
        const provider = this.providers[providerName];
        if (!provider) {
            throw new Error(`SMS provider ${providerName} not found`);
        }
        return provider;
    }
}
