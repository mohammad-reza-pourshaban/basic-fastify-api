import S from "fluent-json-schema";
export const testIndexSchema = {
    // body: S.object().prop("mine", S.number().minimum(1).required()),
    queryString: S.object(),
    params: S.object(),
    headers: S.object(),
};
