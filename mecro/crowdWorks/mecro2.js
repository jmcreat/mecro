var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;
var inter;
var b = 1;
var driver = new webdriver.Builder()
    .forBrowser('chrome').build(); //forBrowser 로 브라우저 설정후 Build
var util = require('util');
let interVar;
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
})
.then(function(test){
  console.log(test);
  console.log(makeRandom()*1000*0.8)
interVar = setInterval(intervalroof,makeRandom()*1000*0.8);
})
 // driver.findElement(By.xpath("//a[@class='link_inspectlist link_worker_list']")).click();


//      driver.findElement(By.xpath("//tbody/tr")).getText()

function intervalroof() {
      var promise = new Promise(function(resolve, reject) {
  driver.navigate().refresh()
  .then(function(){
    console.log('random 시간'+makeRandom()*0.8)
    driver.wait(until.elementLocated(By.xpath("//table[@class='tbl_inspectlist']")))
    .then(function(){
        driver.findElement(By.xpath("//table[@class='tbl_inspectlist']/tbody/tr[1]/td[11]")).getText()
        .then(function(test){
          console.log('검수대기 '+test);
          if(test>0){
            console.log('검수대기 발견!!');
            driver.findElement(By.xpath("//table[@class='tbl_inspectlist']/tbody/tr[1]/td[4]")).click();
            slackAlett();
            clearInterval(interVar);

          }
        })
    })
  })



      });
}
function makeRandom(){
  return parseInt(Math.random()*10+10);
}

const Slack = require('slack-node');  // 슬랙 모듈 사용
const apiToken = "xoxb-70950968704-oruLnDfg5UnF34u5MLLt2KKu";


function slackAlett(){
const slack = new Slack(apiToken);
const send = async(message) => {
  slack.api('chat.postMessage', {
	  username: 'myhubot',  // 슬랙에 표시될 봇이름
	  text:"검수대기 발견!!",
	  channel:'#general'  // 전송될 채널 및 유저
	}, function(err, response){
	  console.log(response);
	});
}
send('메세지 내용');
}
