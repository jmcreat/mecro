var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;
var inter;
var b = 1;
var driver = new webdriver.Builder()
    .forBrowser('chrome').build(); //forBrowser 로 브라우저 설정후 Build
var util = require('util');

driver.get('https://www.crowdworks.kr/')
.then(function() {
    console.log('true accept page');
    return driver.wait(until.elementLocated(By.xpath("//input[@id='cw_loginId']")));
})
.then(function() {
    console.log('true login_page');
    driver.findElement(By.xpath("//input[@id='cw_loginId']")).sendKeys('');
    driver.findElement(By.xpath("//input[@id='cw_pw']")).sendKeys('');
 driver.findElement(By.xpath("//input[@id='siteLogin']")).click();
  return driver.wait(until.elementLocated(By.xpath("//a[@id='link_home']")));
})
.then(function() {
    console.log('into the main');
    driver.findElement(By.xpath("//a[@id='link_check']")).click();
  return driver.wait(until.elementLocated(By.xpath("//table[@class='tbl_inspectlist']")));
})
.then(function() {
    console.log('into check page');
driver.findElement(By.xpath("//table[@class='tbl_inspectlist']/tbody/tr[1]/td[11]")).getText()
.then(function(test){
  console.log(test);
})
// .then(function(){
//   console.log(makeRandom()*1000)
//   //setInterval(intervalroof,makeRandom()*1000);
//   //until 사용해서 다음으로 넘어가기
// })

 // driver.findElement(By.xpath("//a[@class='link_inspectlist link_worker_list']")).click();
})

//      driver.findElement(By.xpath("//tbody/tr")).getText()
function sleepmethod() {
    var promise = new Promise(function(resolve, reject) {
        driver.getTitle().then(function(title) {
            console.log('title = ' + title);
            resolve();
        }, function(e) {
            reject();
        })
    });
    return promise;
}
function intervalroof() {
  driver.navigate().refresh();
  console.log(makeRandom())
}
function makeRandom(){
  return parseInt(Math.random()*10+10);
}
