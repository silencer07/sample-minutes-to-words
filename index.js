// expecting time to be a string in the format like '8:15' or '12:30'

const hours = new Map();
hours.set(0, 'midnight');
hours.set(1, 'one');
hours.set(2, 'two');
hours.set(3, 'three');
hours.set(4, 'four');
hours.set(5, 'five');
hours.set(6, 'six');
hours.set(7, 'seven');
hours.set(8, 'eight');
hours.set(9, 'nine');
hours.set(10, 'ten');
hours.set(11, 'eleven');
hours.set(12, 'midday');

const specialHours = [0, 12];

const minutes = new Map();
minutes.set(1, 'one');
minutes.set(2, 'two');
minutes.set(3, 'three');
minutes.set(4, 'four');
minutes.set(5, 'five');
minutes.set(6, 'six');
minutes.set(7, 'seven');
minutes.set(8, 'eight');
minutes.set(9, 'nine');
minutes.set(10, 'ten');
minutes.set(11, 'eleven');
minutes.set(12, 'twelve');
minutes.set(15, 'quarter');
minutes.set(20, 'twenty');
minutes.set(27, 'twenty seven');


function convertTimeToWords(time) {
  const [hour, minute] = time.split(':');
  const convertedMinute = parseInt(minute);
  let convertedHour = parseInt(hour);
  if (convertedMinute > 30) {
    convertedHour += 1;
  }

  // const suffix = specialHours.findIndex((h) => h === convertedHour) > -1 ? '' : ' o\'clock';
  let answer = `${hours.get(convertedHour)}`;

  const mid = convertedMinute <= 30 ? 'past' : 'to';

  if (minute === '00') {
    if (specialHours.findIndex((h) => h === convertedHour) === -1) {
      answer += 'o\'clock';
    }
  } else if (minute === '30') {
    answer = `half ${mid} ${answer}`;
  } else if (convertedMinute <= 30) {
    answer = `${minutes.get(convertedMinute)} ${mid} ${answer}`;
  } else if (convertedMinute > 30) {
    answer = `${minutes.get(60 - convertedMinute)} ${mid} ${answer}`;
  }

  return answer;
}

module.exports = { convertTimeToWords };

/**
 * TODO/Improvements:
 * - use a number to word library, there should be a library for numbers which is way tested than my map implementation
 * - I need to refactor how minutes word is evaluate, the first nested if looks ugly
 * - divide this large function into smaller ones, for example i can have a function that gets the hour because it has it's own logic
 * - more test case! :D
 */