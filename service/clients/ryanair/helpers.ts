const NOT_VALID_MESSAGE = "Not valid query";

export function transformQueryToQueryString(query: string): string {
  const parts = query.trim().split("\n");
  const queryStringParts: string[] = [];

  if (parts.pop()?.trim() !== "}") {
    throw new Error(NOT_VALID_MESSAGE);
  }

  const rootElement = parts.shift();
  if (rootElement?.indexOf("{") === -1) {
    throw new Error(NOT_VALID_MESSAGE);
  }

  const rootName = rootElement?.replace("{", "").trim();
  const propsStack: string[] = [];

  parts.forEach((part) => {
    if (part.indexOf("{") > -1) {
      propsStack.push(part.replace("{", "").trim());
    }

    if (part.indexOf("}") > -1) {
      propsStack.pop();
    }

    if (part.indexOf("{") === -1 && part.indexOf("}") === -1) {
      let pathValue = propsStack.join(".");
      pathValue += pathValue ? "." : "";
      queryStringParts.push(`${rootName}=${pathValue}${part.trim()}`);
    }
  });

  return queryStringParts?.join("&");
}