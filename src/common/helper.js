export const youtube_parser = (url) => {
  let regEx = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  let match = url.match(regEx);
  return (match && match[7].length === 11) ? match[7] : false;
}
