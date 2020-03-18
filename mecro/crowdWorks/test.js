var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;
var inter;
var b = 1;
var driver = new webdriver.Builder()
    .forBrowser('chrome').build(); //forBrowser 로 브라우저 설정후 Build
var util = require('util');

driver.get('https://www.naver.com/')
.then(function() {
    console.log('true accept page');
console.log('ramdom value :' + makeRandom()*1000)
setInterval(intervalroof,makeRandom()*1000)
})
function intervalroof() {
  driver.navigate().refresh();
  console.log(makeRandom())
}
function makeRandom(){
  return parseInt(Math.random()*10+10);
}
