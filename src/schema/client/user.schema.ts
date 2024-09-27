import S from "fluent-json-schema";


class ClientUserSchema {
    sendSms = {
        body: S.object().prop("phone", S.string().minLength(11).maxLength(11).required()),
        // queryString: S.object(),
        // params: S.object(),
        // headers: S.object(),
    };
    login = {
        body: S.object()
            .prop("phone", S.string().minLength(11).maxLength(11).required())
            .prop("smsCode", S.number().minimum(111111).maximum(999999).required())
    };
}

export default new ClientUserSchema();