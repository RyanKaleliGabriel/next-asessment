function ProductName(name: string) {
  const numChars = name.length;
  if (numChars <= 55) return name;
  return `${name.substring(0, 56)}...`;
}

function DashProdName(name: string) {
  const numChars = name.length;
  if (numChars <= 12) return name.toUpperCase();
  return `${name.substring(0, 13).toUpperCase()}`;
}

export { ProductName, DashProdName };
