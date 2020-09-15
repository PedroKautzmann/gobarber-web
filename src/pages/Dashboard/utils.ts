export const months = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];

export const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

export const getInitials = (fullName: string): string => {
  const nameArray = fullName.toUpperCase().split(' ');
  return `${nameArray[0][0]}${nameArray[nameArray.length - 1][0]}`;
};
