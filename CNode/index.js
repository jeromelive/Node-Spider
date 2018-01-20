var https = require('https'),
		fs = require('fs'),
		cheerio = require('cheerio');

var url = 'https://cnodejs.org';

startSpider(url);

function startSpider(url) {
	https.get(url, (res) => {
		console.log('状态码', res.statusCode);
		console.log('请求头', res.headers);
		var html = '',
				i = 1;
		res.setEncoding('utf-8'); // 防止中文乱码
		res.on('data', (chunk) =>{
			// console.log('第'+ i++ +'条')
			// console.log(chunk);
			fs.appendFile('./index.html', chunk, 'utf-8', (err) =>{
				if(err) {
					console.log(err);
				}
			})
			html += chunk;
		});

		res.on('end', () => {
			var $ = cheerio.load(html);
			$('a.topic_title').each((idx, element) => {
				// console.log($(element).text());
				fs.appendFile('./data.txt', $(element).text(), 'utf-8', (err) => {
					if(err) {
						console.log(err);
					}
				})
			})
		});

	}).on('error', (err) => {
		console.log(err);
	})
}