export function getQueryArrayParam(param?: string) {
  const paramArray = param?.split(',').filter((param) => !!param);
  return paramArray?.length ? paramArray : undefined;
}

export function getUrlArrayParam(param?: string) {
  const paramArray = param?.split('.').filter((param) => !!param);
  return paramArray?.length ? paramArray : undefined;
}