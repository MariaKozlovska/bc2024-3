const https = require('https');
const fs = require('fs');

const url = 'https://bank.gov.ua/NBU_ovdp?json&val_code=UAH&date=10.09.2024';

https.get(url, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    fs.writeFileSync('data.json', data, 'utf8');
    console.log('JSON data saved as data.json');
  });

}).on('error', (err) => {
  console.error('Error fetching data: ', err);
});
