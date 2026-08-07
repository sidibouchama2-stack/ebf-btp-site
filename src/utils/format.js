const formatter = new Intl.NumberFormat("fr-FR");

export function formatMRU(amount) {
  return `${formatter.format(amount)} MRU`;
}

export function formatNumber(amount) {
  return formatter.format(amount);
}
