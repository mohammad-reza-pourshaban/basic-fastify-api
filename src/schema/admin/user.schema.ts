import S from "fluent-json-schema";
export const adminUserGetAllUsersSchema = {
    // body: S.object().prop("mine", S.number().minimum(1).required()),
    queryString: S.object(),
    params: S.object(),
    headers: S.object(),
};
export const adminUserCreateUserSchema = {
    // body: S.object().prop("mine", S.number().minimum(1).required()),
    queryString: S.object(),
    params: S.object(),
    headers: S.object(),
};
export const adminUserDeleteUserSchema = {
    // body: S.object().prop("mine", S.number().minimum(1).required()),
    queryString: S.object(),
    params: S.object(),
    headers: S.object(),
};
export const adminUserGetUserByIdSchema = {
    // body: S.object().prop("mine", S.number().minimum(1).required()),
    queryString: S.object(),
    params: S.object(),
    headers: S.object(),
};
export const adminUserUpdateUserSchema = {
    // body: S.object().prop("mine", S.number().minimum(1).required()),
    queryString: S.object(),
    params: S.object(),
    headers: S.object(),
};
