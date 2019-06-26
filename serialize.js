const serialize = (obj) => {
  const str = [];
  for (const p in obj) {
    if (obj.hasOwnProperty(p)) {
      if (typeof obj[p] !== 'object') {
        str.push(`${encodeURIComponent(p)}=${encodeURIComponent(obj[p])}`);
      } else {
        str.push(serialize(obj[p]));
      }
    }
  }
  return str.join('&');
}

export default serialize;
