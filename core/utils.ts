export const formatNumber = (v?: number) => {
  console.log(v);
  if (!v) return undefined;
  // console.log(v, Number(v.toString().replaceAll('.', '').replaceAll(',', '.')));
  return Math.round(Number(v.toString().replaceAll('.', '').replaceAll(',', '.')));
};
