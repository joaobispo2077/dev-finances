export function formatCurrency(value: string | number): string {
  const options = {
    style: "currency",
    currency: "BRL",
  };
  return new Intl.NumberFormat("pt-BR", options).format(Number(value));
}
