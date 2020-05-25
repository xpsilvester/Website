const https = require('https');
const cheerio = require('cheerio');
const fs = require('fs');

let url = 'https://voice.baidu.com/act/newpneumonia/newpneumonia'

https.get(url, function (res) {
    let chunks = [],
    size = 0;
    res.on('data', function (chunk) {
        chunks.push(chunk);
        size += chunk.length;
    });

    res.on('end', function () {
        let data = Buffer.concat(chunks, size);
        let html = data.toString();
        let $ = cheerio.load(html);
        
        let config = $('#captain-config')[0].children[0].data
        //console.log(config)
        let strData = [].concat(config)
        //console.log(strData)
        fs.writeFile('./data.json', JSON.stringify(strData) ,'utf-8', function(err, data) {
            if (err) {
                throw err;
            }
        });
    });
})