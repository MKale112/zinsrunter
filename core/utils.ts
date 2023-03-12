export const formatNumber = (v?: number) => {
  console.log(v);
  if (!v) return undefined;
  console.log(Number(v.toString().replaceAll('.', '')));
  return Number(v.toString().replaceAll('.', ''));
};
