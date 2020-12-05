export const toUnixTimeStamp = (value) => {
  //   return Date.parse(value.split('-').reverse().join('-'));
  return new Date(value).getTime();
};

export function DateFormat(date_) {
  const month = [];
  month[0] = '01';
  month[1] = '02';
  month[2] = '03';
  month[3] = '04';
  month[4] = '05';
  month[5] = '06';
  month[6] = '07';
  month[7] = '08';
  month[8] = '09';
  month[9] = '10';
  month[10] = '11';
  month[11] = '12';
  return `${date_.getFullYear()}-${month[date_.getMonth()]}-${
    date_.getDate() >= 10 ? date_.getDate() : `0${date_.getDate()}`
  }`;
}

export const formatDate = (value, mode) => {
  const datetime = new Date(value);
  // const locale = Languages.data[i18n.language]
  //   ? Languages.data[i18n.language].locale
  //   : 'en-US';
  const locale = 'en-US';

  switch (mode) {
    case 'long':
      return datetime.toLocaleDateString(locale, {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
      });
    case 'short':
      return datetime.toLocaleDateString(locale, {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      });
    default:
      return datetime.toLocaleDateString(locale);
  }
};

export const formatNumber = (value, mode = 'long') => {
  const number = value * 1;
  let tmp = '';
  let { length } = `${number}`;

  switch (mode) {
    case 'short':
      if (number >= 1000000000) return `${(number / 1000000000).toFixed(1)}B`;
      if (number >= 1000000) return `${(number / 1000000).toFixed(1)}M`;
      if (number >= 1000) return `${(number / 1000).toFixed(1)}K`;
      return `${number}`;
    case 'long':
      while (length > 0) {
        tmp = `${`${number}`.slice(
          length - 3 >= 0 ? length - 3 : 0,
          length,
        )}.${tmp}`;
        length -= 3;
      }
      return tmp.slice(0, tmp.length - 1);
    default:
      return number;
  }
};
