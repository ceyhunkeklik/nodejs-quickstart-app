import moment from 'moment';

const sayHi = (time = 2000) => {
  console.log('Async function was called.');
  return new Promise(resolve => {
    setTimeout(() => {
      const text = `Hi after ${moment.duration(time).asSeconds()} second(s)`;
      resolve(text);
    }, time);
  });
};

const app = async () => {
  const result = await sayHi();
  console.log(result);
  console.log('Async function was completed.');
};

app();
