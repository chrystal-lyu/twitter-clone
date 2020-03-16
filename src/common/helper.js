export const youtube_parser = (url) => {
  let regEx = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  let match = url.match(regEx);
  return (match && match[7].length === 11) ? match[7] : false;
}
export const number_to_thousand = (num) => {
  if (num > 0) {
    return num > 999 ? Math.floor(num/100).toFixed(1)/10 + 'k' : num;
  }
}