import namor from "namor";

const range = (len: any) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newPerson = () => {
  return {
    unit: namor.generate({ words: 1, numbers: 2 }),
    subsystem: namor.generate({ words: 1, numbers: 1 }),
    component: namor.generate({ words: 1, numbers: 0 }),
    jul: Math.floor(Math.random() * 250),
    aug: Math.floor(Math.random() * 250),
    sep: Math.floor(Math.random() * 250),
    oct: Math.floor(Math.random() * 250),
    nov: Math.floor(Math.random() * 250),
    dec: Math.floor(Math.random() * 250),
    jan: Math.floor(Math.random() * 250),
    feb: Math.floor(Math.random() * 250),
    mar: Math.floor(Math.random() * 250),
    apr: Math.floor(Math.random() * 250),
    may: Math.floor(Math.random() * 250),
    jun: Math.floor(Math.random() * 250),
  };
};
export default function makeData(...lens: any) {
  const makeDataLevel: any = (depth = 0) => {
    const len = lens[depth];
    return range(len).map((d) => {
      return {
        ...newPerson(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      };
    });
  };

  return makeDataLevel();
}
