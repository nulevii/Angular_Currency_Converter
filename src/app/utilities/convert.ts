export const convert = (
  ammount: string,
  currency1: string,
  currency2: string
) => {
  const convertedAmmount = (
    Number(ammount) *
    (Number(currency1) / Number(currency2))
  ).toFixed(2);
  return convertedAmmount.replace(/\.?0+$/, '');
};
