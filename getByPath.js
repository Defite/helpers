const getByPath = (path, obj) => {
  return path.split('.').reduce((res, prop) => {
      return res && res[prop];
  }, obj);
}

export default getByPath;
