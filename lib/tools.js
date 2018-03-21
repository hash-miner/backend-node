const tools = module.exports = {};

tools.urlParser = function(query){
var regex = /[?&]([^=#]+)=([^&#]*)/g,
        url = query,
        params = {},
        match;
    while(match = regex.exec(url)) {
        params[match[1]] = match[2];
    }
  return params;
}