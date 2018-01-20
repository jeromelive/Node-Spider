const superagent = require('superagent');
const async = require('async');
const getData = require('./getData');
const https = require('https');
const fs = require('fs');

function controlRequest(city, position, indexCallback) {
	let ok = 0;
	let page = 0;
	let urls = [];
	async.series([
		(cb) => {
			https.get('https://www.lagou.com', (res) => {
				res.setEncoding('utf-8');
				var html = '';
				res.on('data', (chunk) => {
					html += chunk.trim();
				});
				res.on('end', () => {
					fs.appendFile('lagou.html', html, 'utf-8', (err) => {
						if(err) {console.log(err);}
					})
				})
			}).on('error', (err) => {
				if(err) {console.log(err)}
			})
			// superagent
			// 	.post(`https://www.lagou.com/jobs/positionAjax.json?needAddtionalResult=false&city=${city}&kd=${position}&pn=1`)
			// 	.send({
			// 		'pn': page,
			// 		'kd': position,
			// 		'first': true
			// })
			// .set(getData.option)
			// .end((err, res) => {
			// 	if(err) throw err;
			// 	let dataObj = JSON.parse(res.text);
			// 	if(dataObj.success === true) {
			// 		page = dataObj.content.positionResult.totalCount;
			// 		cb(null, page);
			// 	} else {
			// 		console.log('获取数据失败,' + res.text);
			// 	}
			// })
		},
		(cb) => {
			console.log('end');
		}
	])
}

module.exports = controlRequest;