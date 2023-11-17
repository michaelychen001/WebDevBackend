const url = require('url')
const urlObject = {
  protocol: 'https:',
  slashes: true,
  auth: null,
  host: 'www.google.com:443',
  port: '443',
  hostname: 'www.google.com',
  hash: '#tag=110',
  search: '?id=8&name=mouse',
  query: { id: '8', name: 'mouse' },
  pathname: '/ad/index.html',
  path: '/ad/index.html?id=8&name=mouse',
  href: 'https://www.google.com:443/ad/index.html?id=8&name=mouse#tag=110'
}
const parsedObj = url.format(urlObject)
console.log(parsedObj)
console.log("********** Finished it **********")