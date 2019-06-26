const getByPath = (path, obj) => {
  return path.split('.').reduce((res: any, prop) => {
      return res && res[prop];
  }, obj);
}

export default getByPath;
