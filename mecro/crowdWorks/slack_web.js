// var bunyan  = require("bunyan"),
//     BunyanSlack = require('bunyan-slack'),
//     log;
//
// log = bunyan.createLogger({
//     name: "myApp",
//     stream: new BunyanSlack({
//         webhook_url: "https://hooks.slack.com/services/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",
//         channel: "botTest",
//         username: "jmcreat",
//     }),
//     level: "error"
// });
//////////////////////////////////////////////////////////////////////
const Slack = require('slack-node');  // 슬랙 모듈 사용

apiToken = "api topken 입력";
const slack = new Slack(apiToken);

const send = async(message) => {
  slack.api('chat.postMessage', {
	  username: 'myhubot',  // 슬랙에 표시될 봇이름
	  text:"1111",
	  channel:'#general'  // 전송될 채널 및 유저
	}, function(err, response){
	  console.log(response);
	});
}

send('메세지 내용');
///////////////////////////////////////////////////////////////////////
// const Slack = require('slack-node');  // 슬랙 모듈 사용
//
// const webhookUri = "https://hooks.slack.com/services/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";  // Webhook URL
//
// const slack = new Slack();
// slack.setWebhook(webhookUri);
//
// const send = async(message) => {
//   slack.webhook({
// 	  text:"인터넷 검색 포털 사이트",
// 	  attachments:[
// 		{
// 		  fallback:"링크주소: <https://www.google.com|구글>",
// 		  pretext:"링크주소: <https://www.google.com|구글>",
// 	      color:"#00FFFF",
// 	      fields:[
// 	        {
// 	          title:"알림",
// 	          value:"해당링크를 클릭하여 검색해 보세요.",
// 	          short:false
// 	        }
// 	      ]
// 	    }
// 	  ]
// 	}, function(err, response){
// 	  console.log(response);
// 	});
// }
