import { FastifyRequest, FastifyReply } from 'fastify';
import userService from '../../services/user.service';
import { User } from '../../models/User.model';
import { success, error } from '../../helpers/reply';
import smsService from '../../services/sms.service';
import { SMS_PROVIDERS } from '../../providers/sms';
import { generateRandomNumber, getExpiryTime, getLoginSmsMessage } from '../../helpers/helper';
import { FastifyRequestEx } from '../../interfaces/common';

class UserController {
    async sendSms(req: FastifyRequestEx, reply: FastifyReply) {
        try {
            const { phone } = req.body as { phone: string };
            let user = await userService.findUnique({ where: { phone: phone } });
            const smsCode = generateRandomNumber(111111, 999999);
            const smsCodeExpiredAt = getExpiryTime(2);
            if (user) {
                await userService.update({ where: { phone }, data: { smsCode, smsCodeExpiredAt } })
            } else {
                await userService.create({ data: { phone, smsCode, countryId: 1, smsCodeExpiredAt } })
            }
            await smsService.sendMessage(SMS_PROVIDERS.KAVENEGAR, phone, getLoginSmsMessage(smsCode));
            success(reply, { user });
        } catch (err) {
            console.log({ err });
            error(reply, "ERROR500", err);
        }
    }

    async login(req: FastifyRequestEx, reply: FastifyReply) {
        try {
            const { phone, smsCode } = req.body as { phone: string, smsCode: number };
            let user = await userService.findFirst({ where: { phone } })
            if (!user || user.smsCode != smsCode) throw new Error('phone or 6 digit is wrong!');
            const now = new Date();
            if (user.smsCodeExpiredAt < now) throw new Error('Your code has expired');
            //todo:complete this section
            const token = 'efwfefw';
            success(reply, { user });
        } catch (err) {
            console.log({ err });
            error(reply, "ERROR500", err);
        }
    }

    async me(req: FastifyRequestEx, reply: FastifyReply) {
        try {
            let { user } = req;
            user = await userService.findUnique({ where: { id: user.id } });
            success(reply, { user });
        } catch (err) {
            console.log({ err });
            error(reply, "ERROR500", err);
        }

    }
}

export default new UserController();
