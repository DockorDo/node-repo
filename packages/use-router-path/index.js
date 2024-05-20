const { pathToRegexp, match, parse, compile } = require("path-to-regexp");

// pathToRegexp(path, keys?, options?)
// match(path)
// parse(path)
// compile(path)

const regexp = pathToRegexp("/foo/:bar",[{ name: 'bar', prefix: '/', suffix: '', pattern: '[^\\/#\\?]+?', modifier: '' }])
const matchRegexp= match("/user/:id", { decode: decodeURIComponent})

console.log(matchRegexp("/user/123"))
console.log(regexp)