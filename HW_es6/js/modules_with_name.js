export const PI = 3.141592;

const _sgrt = (s, x, last) => {
  return x != last ? _sgrt(s, (x + s / x) / 2.0, x) : x;
};

export let sgrt = (s) => {
  return _sgrt(s, s / 2, 0);
};

export let square = (x) => {
  return x * x;
};

