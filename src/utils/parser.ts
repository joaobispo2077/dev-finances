export function formatCurrency(value: string | number): string {
  const options = {
    style: "currency",
    currency: "BRL",
  };
  return new Intl.NumberFormat("pt-BR", options).format(Number(value));
}

export function formatDate(date: string | number | Date): string {
  return new Intl.DateTimeFormat("pt-BR").format(new Date(date));
}
