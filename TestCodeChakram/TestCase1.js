/**
 * Created by daxes on 10/28/2016.
 */

//for authentication=false & cache=disabled api testing


var chakram = require('chakram');
  expect = chakram.expect;
var url = "http://api.dev.innova-path.com/api/v1/class/assignments?oauth_signature_method=HMAC-SHA1&oauth_timestamp=1477629733&oauth_nonce=GVdrCG&oauth_version=1.0&oauth_signature=OrtwvNd24DHsqvsvY7bPk9b4NIg=&authentication=false&cache=disabled";
var url2 = "https://api.dev.talentscreen.io/api/v1/class/assignments";
var testurl="https://www.google.com/";
var apiResponse;
var testjson={


} ;


describe('list of test cases \n 1. get api \n',function() {

    function api() {

        apiResponse = chakram.get(testurl);
        console.log(apiResponse);
        return apiResponse;

    };


    it('status 200 check',function(){

        return expect(api()).to.have.status(200);

    });


    it('header check',function(){
        return expect(api()).to.have.header("Content-Type: text/html; charset=UTF-8");

    });

    it('json test',function(){



            return api().then(function(data){

                    var jsondata = data.body;

                    expect(jsondata).to.contains(testjson);


            });



    });










});
