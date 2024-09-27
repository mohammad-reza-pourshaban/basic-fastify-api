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

export const generateRandomNumber = (from: number, to: number): number => {
  return Math.floor(Math.random() * (to - from + 1)) + from;
}

export const getLoginSmsMessage = (smsCode: number): string => {
  return `your code is : ${smsCode}`;
}

export const getExpiryTime = (minAfter: number): Date => {
  const now = new Date();
  now.setMinutes(now.getMinutes() + minAfter);
  return now;
}
