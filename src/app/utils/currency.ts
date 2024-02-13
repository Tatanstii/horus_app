export const getCOPCurrency = (value: number): string => {
  const intl = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 3,
  });
  return intl.format(value);
};
