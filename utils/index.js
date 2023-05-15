const dateOptions = { month: 'short', year: 'numeric' };

export const toLocalString = (date, locale = 'en-US') => date.toLocaleString(locale, dateOptions);

export const createHash = (length = 4) => {
  const caracteres = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let hash = '';

  for (let i = 0; i < length; i += 1) {
    const indiceAleatorio = Math.floor(Math.random() * caracteres.length);

    hash += caracteres.charAt(indiceAleatorio);
  }

  return hash;
};
