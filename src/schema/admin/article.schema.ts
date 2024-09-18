import S from "fluent-json-schema";
export const adminArticleGetAllArticlesSchema = {
    // body: S.object().prop("mine", S.number().minimum(1).required()),
    queryString: S.object(),
    params: S.object(),
    headers: S.object(),
};
export const adminArticleCreateArticleSchema = {
    // body: S.object().prop("mine", S.number().minimum(1).required()),
    queryString: S.object(),
    params: S.object(),
    headers: S.object(),
};
export const adminArticleDeleteArticleSchema = {
    // body: S.object().prop("mine", S.number().minimum(1).required()),
    queryString: S.object(),
    params: S.object(),
    headers: S.object(),
};
export const adminArticleGetArticleByIdSchema = {
    // body: S.object().prop("mine", S.number().minimum(1).required()),
    queryString: S.object(),
    params: S.object(),
    headers: S.object(),
};
export const adminArticleUpdateArticleSchema = {
    // body: S.object().prop("mine", S.number().minimum(1).required()),
    queryString: S.object(),
    params: S.object(),
    headers: S.object(),
};
