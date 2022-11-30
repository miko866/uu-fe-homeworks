export const between = (value, first, last) => {
  const lower = Math.min(first, last),
    upper = Math.max(first, last);
  return value >= lower && value <= upper;
};

export const dataFormatter = (number) => {
  if (number > 1000000000) {
    return (number / 1000000000).toString() + 'B';
  } else if (number > 1000000) {
    return (number / 1000000).toString() + 'M';
  } else if (number > 1000) {
    return (number / 1000).toString() + 'K';
  } else {
    return number.toString();
  }
};
