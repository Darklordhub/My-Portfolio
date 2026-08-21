export const sitePath = (path = ''): string => {
  const base = import.meta.env.BASE_URL;
  const normalizedPath = path.replace(/^\/+/, '');

  return normalizedPath ? `${base}${normalizedPath}` : base;
};

