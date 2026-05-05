//This function lets me access nested object values using a string path, so my mapping logic stays dynamic and flexible.
export const getValueFromPath = (obj: any, path: string) => {
  return path.split(".").reduce((acc, key) => acc?.[key], obj);
};