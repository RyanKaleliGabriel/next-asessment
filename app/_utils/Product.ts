function ProductSerialNo(serialNo: string) {
  const numChars = serialNo.length;
  if (numChars <= 21) return serialNo.toUpperCase();
  return `${serialNo.substring(0, 22).toUpperCase()}...`;
}

function ProductName(name: string) {
  const numChars = name.length;
  if (numChars <= 55) return name;
  return `${name.substring(0, 56)}...`;
}

function CategoryDescription(description: string) {
  const numChars = description.length;
  if (numChars <= 69) return description;
  return `${description.substring(0, 70)}...`;
}

function DashProdName(name: string) {
  const numChars = name.length;
  if (numChars <= 12) return name.toUpperCase();
  return `${name.substring(0, 13).toUpperCase()}`;
}

export { ProductSerialNo, ProductName, CategoryDescription, DashProdName };
