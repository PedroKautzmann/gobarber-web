const getInitials = (fullName: string): string => {
  const nameArray = fullName.toUpperCase().split(' ');
  return `${nameArray[0][0]}${nameArray[nameArray.length - 1][0]}`;
};

export default getInitials;
