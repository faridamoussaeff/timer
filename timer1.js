// Instructions: 
// Implement an alarm clock / timer which will beep
// after a specified amount of time has passed. 
// The user can specify an unlimited number of alarms
// using command line arguments.

// For this app, we can think of at least these three:
// No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.
// An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
// An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.

// Example usage: 
// node timer1.js 10 3 5 15 9
// this will make it beet at : 3, 5, 9, 10, 15 seconds  

const input = process.argv.slice(2);

const timers = (input) => {
  for (const elem of input) {
    if (elem < 0 || isNaN(elem || elem === undefined)) {
      return
    } else {
      let timer = elem * 1000 
      setTimeout(() => {
        process.stdout.write('\x07');
      }, timer);
    }
  }
}
timers(input);

