export default {
  // eslint-disable-next-line quotes
  "pre-commit": `cd ${__dirname} && ./node_modules/.bin/nano-staged --config ./nano-staged.json`,
};
