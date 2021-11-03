const input = process.argv.slice(2);
const timers = (input) => {
  for (const elem of input) {
    if (elem < 0 || isNaN(elem || elem === undefined)) {
      return;
    } else {
      let timer = elem * 1000;
      setTimeout(() => {
        process.stdout.write('\x07');
      }, timer);
    }
  }
};
timers(input);