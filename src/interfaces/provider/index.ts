export interface SmsService {
    sendMessage(phoneNumber: string, message: string): Promise<boolean>;
  }
  