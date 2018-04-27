var webdriver =require('selenium-webdriver'),
  By =  webdriver.By,
  until = webdriver.until;
const cheerio = require('cheerio')
var request = require('request');
var driver = new webdriver.Builder()
  .forBrowser('chrome').build();
let list =[];
//driver.get('http://ticket.cgv.co.kr/Reservation/Reservation.aspx?MOVIE_CD=20016057&MOVIE_CD_GROUP=20015673&PLAY_YMD=20180426&THEATER_CD=0013&PLAY_START_TM=&PLAY_NUM=&SCREEN_CD=018')

driver.get('http://ticket.cgv.co.kr/Reservation/Reservation.aspx')
.then(function(){
  driver.sleep(2000)
  //영화 순위체크
  driver.findElement(By.xpath("//*[@class='content scroll-y']/li[1]")).click()
  .then(function(res){

    driver.sleep(2000)
    //영화 타입
    driver.findElement(By.xpath("//*[@class='selectbox-movie-type checkedBD']/ul/li[2]")).click()
  })
  .then(function(){
    driver.sleep(2000)
    //상영관 왕십리
    driver.findElement(By.xpath("//*[@theater_cd='0013']")).click()

  })
  .then(function(){
    driver.sleep(2000)
    //영화 날짜
    driver.findElement(By.xpath("//*[@date='20180426']")).click()
  })
  .then(function(){
    driver.sleep(2000)
    //영화 시간
    driver.findElement(By.xpath("//*[@class='time-list nano has-scrollbar has-scrollbar-y']/div/div[1]/ul/li[2]")).click()
  })
  .then(function(res){

    driver.sleep(2000)
    driver.executeScript("OnTnbRightClick()")
    //function 실행
        // driver.findElement(By.id("tnb_step_btn_right")).click()
  })
  .then(function(){
    driver.sleep(2000);
    driver.findElement(By.xpath("//input[@id='txtUserId']")).sendKeys("jmcreat");
    driver.findElement(By.xpath("//input[@id='txtPassword']")).sendKeys("audcjf90!");
    driver.findElement(By.xpath("//button[@class='btn_login']")).click();
  })
  .then(function(){
    driver.sleep(3000)
    driver.executeScript("OnTnbRightClick()")//function 실행
        // driver.findElement(By.id("tnb_step_btn_right")).click()
  })
  .then(function(){
    driver.sleep(2000)
    driver.wait(until.elementLocated(By.xpath("//*[@class='ft_layer_popup popup_alert ko']")))
    //imax 전용 팝업
    // .then(function(){
    //   driver.sleep(2000)
    //  driver.findElement(By.xpath("//*[@class='ft_layer_popup popup_alert ko'][2]/div[1]/a")).click()
    //   })

    .then(function(){
      driver.findElement(By.xpath("//*[@class='ft_layer_popup popup_alert ko'][1]/div[1]/a")).click()
    })

  })
  .then(function(){
    driver.findElement(By.xpath("//*[@class='group adult']/ul/li[3]")).click()

  })



  // .then(function(){
  //   driver.findElement(By.xpath("//*[@class='seat_group']/div/div[1]/a/span[@class='sreader mod']")).getText()
  //   .then(function(res){
  //     console.log('seat name : '+res)
  //   })
  // })

  .then(function(){


    driver.findElement(By.xpath("//*[@class='seats']/ul/li[3]")).click()
    // request('http://ticket.cgv.co.kr/Reservation/Reservation.aspx',function(error,res,body){
    //   const $ = cheerio.load(body)
    //   $('.seats').each(function(i,elem){
    //     list[i]=$(this).text();
    //   });
    //   //div
    // })



  })
})
