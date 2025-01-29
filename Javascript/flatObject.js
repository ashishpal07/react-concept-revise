function flattanObject(details) {
  const obj = {};

  for (const key in details) {
    // its value can be object {}
    if (typeof details[key] === "object" && !Array.isArray(details[key])) {
      const temps = flattanObject(details[key]);

      for (const temp in temps) {
        obj[`${key}.${temp}`] = temps[temp];
      }
    }
    // its vlaue can be []
    else if (Array.isArray(details[key])) {
      details[key].forEach((detail, index) => {
        const temps = flattanObject(detail);
        for (const temp in temps) {
          obj[`${key}.[${index}].${temp}`] = temps[temp];
        }
      });
    }
    // its value can be contants
    else {
      obj[key] = details[key];
    }
  }
  return obj;
}

const output = flattanObject(details);
console.log(output);
