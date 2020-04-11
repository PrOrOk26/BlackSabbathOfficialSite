export default function* range(start, stop, step = 1) {
  if (typeof stop === 'undefined') {
      stop = start;
      start = 0;
  }

  for (let i = start; step > 0 ? i < stop : i > stop; i += step) {
      yield i;
  }
}