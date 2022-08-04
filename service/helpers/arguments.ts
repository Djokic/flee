const prettifyArgName = (name: string) => {
  const parts = name
    .replace('--', '')
    .split('-');

  for (let i = 1; i < parts.length; i++) {
    parts[i] = parts[i].charAt(0).toUpperCase() + parts[i].slice(1);
  }

  return parts.join('');
};

export const getArguments = (): Record<string, string | boolean> => {
  const args = process.argv.slice(2);

  return args.reduce((acc, curr) => {
    const [key, value] = curr.split('=');
    return { ...acc, [prettifyArgName(key)]: value !== undefined ? value : true };
  }, {});
};
