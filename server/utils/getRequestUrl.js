function getRequestUrl(req) {
  if(req.url.slice(-1) === '/' && req.url.length > 1) return req.url.substr(0, req.url.length - 1);
  return req.url;
}

module.exports = getRequestUrl;
