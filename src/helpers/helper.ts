var JSONbig = require("json-bigint");

function replacer(key: string, value: any): any {
  return typeof value === "bigint"
    ? { type: "BigInt", value: value.toString() }
    : value;
}

function reviver(key: string, value: any): any {
  return value && value.type === "BigInt" ? BigInt(value.value) : value;
}

export const JSONstringify = (obj: any): string => {
  return JSONbig.stringify(obj, replacer);
};

export const JSONparse = (jsonString: string): any => {
  return JSONbig.parse(jsonString, reviver);
};
