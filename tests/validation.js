import test from 'ava';
import validation from '../lib/validation';

const empty = {
  target: {
    name: 'empty',
    value: '',
  },
};

const input = {
  target: {
    name: 'good',
    value: '1972-08-21',
  },
};

const bad = {
  target: {
    name: 'bad',
    value: '1972-08-foo',
  },
};

const time = {
  target: {
    name: 'with time',
    value: '1972-08-21T13:00',
  },
};

const timeSpace = {
  target: {
    name: 'space in time',
    value: '1972-08-21 13:00',
  },
};

const reverse = {
  target: {
    name: 'reverse time to date',
    value: '13:00 1972-08-21',
  },
};

// Empty input
test('empty input', t => {
  t.true(validation(empty), 'Empty input returns true');
});

// Valid date-only input
test('valid input', t => {
  t.true(validation(input), 'Valid input returns true');
});

// Bad input
test('bad input', t => {
  t.is(validation(bad), 'bad must be a date!', 'Bad input returns string');
});

// Valid date/time input
test('valid with time input', t => {
  t.true(validation(time), 'Valid input returns true');
});

// Valid date/time input
test('valid with time input', t => {
  t.true(validation(timeSpace), 'Valid input returns true');
});

// Revers date/time input
test('reverse input', t => {
  t.true(validation(reverse), 'Reverse time/date input returns true');
});
