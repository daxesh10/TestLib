/**
 * Created by daxes on 10/28/2016.
 */
var TestLib = require('./TestLib');
var chakram = require('chakram');
expect = chakram.expect;
var testurl="https://www.google.com/";
var testurl2 = "http://api.randomuser.me/0.6?gender=female";
var url = "http://api.dev.innova-path.com/api/v1/class/assignments?oauth_signature_method=HMAC-SHA1&oauth_timestamp=1477629733&oauth_nonce=GVdrCG&oauth_version=1.0&oauth_signature=OrtwvNd24DHsqvsvY7bPk9b4NIg=&authentication=false&cache=disabled";
var url2 = "https://api.dev.talentscreen.io/api/v1/class/assignments";


var testlib = new TestLib(testurl2);

describe('using lib objects at url  '+testlib.url,function(){

   it('test 1 ',function(){

       //url getting response
       var response = testlib.response;
      // console.log("response 1 : " +response);
       console.log("this response 1 : " +response);
       if(testlib.response != null)
       {
           //status check
           testlib.checkstatus(response);

           //header check
           testlib.CheckHeadersPresenet(response,'content-type');
           testlib.CheckHeaders(response,'content-type', 'application/json; charset=utf-8');

           testlib.CheckHeadersPresenet(response,'server');
           testlib.CheckHeaders(response,'server','cloudflare-nginx');

           testlib.CheckHeadersPresenet(response,'content-encoding');
           testlib.CheckHeaders(response,'content-encoding','gzip');

           testlib.CheckHeadersPresenet(response,'access-control-allow-origin');
           testlib.CheckHeaders(response,'access-control-allow-origin','*');

           testlib.EncodingCheck(response);

           testlib.JsonCheck(response,'results[0].user.gender','female');
          // testlib.JsonCheck(response,'results[1].location.city', 'rantasalmi');


           //index=0 is the index in json ,path = user.gender to check for specific attribute
           // , value = female value of the attribute
            testlib.JsonCheckWithContain(response,0,'user.gender','female');
       }



       chakram.wait();
   }) ;




});