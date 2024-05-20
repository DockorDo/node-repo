const request = require('request');
const cheerio = require('cheerio');
request('https://github.com/KallkaGo', function (error, response, body) {
    const $ = cheerio.load(body);
    console.log($('#fiuits .apple').text());
    console.log($('ul .pear').attr('class'));
    console.log($('li[class=orange]').html());
    $.html();
});

w