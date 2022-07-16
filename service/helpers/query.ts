type ParamValue = string | boolean | number | (string | boolean | number)[];

export function formatQueryParams(params: Record<string, ParamValue>) {
  const paramsArray: [string, string | boolean | number][] = [];

  Object.entries(params).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((item) => paramsArray.push([key, item]));
    } else {
      paramsArray.push([key, value]);
    }
  });

  return paramsArray.map(([key, value]) => `${key}=${value}`).join('&');
}