/**
 * Created by daxes on 11/5/2016.
 */
var TestLib = require('./TestLib');
var chakram = require('chakram');
expect = chakram.expect;
var url3="http://api.dev.innova-path.com/api/v1/class/questions?authentication=false&cache=disabled";
var testlib = new TestLib(url3);



describe('using lib objects at url  '+testlib.url,function() {

    it('test 1 ', function () {


        var response = testlib.response;
        if(testlib.response != null) {


            testlib.getBody(testlib.url);

            //status check
            testlib.checkstatus(testlib.url,200);
            testlib.checkstatus(testlib.url,403);

            //header check
            testlib.CheckHeadersPresenet(response, 'content-type');
            testlib.CheckHeaders(response, 'content-type', 'application/json; charset=utf-8');


            testlib.CheckHeadersPresenet(response,'access-control-allow-origin');
            testlib.CheckHeaders(response,'access-control-allow-origin','*');

            testlib.StatusRange(response,0,200);
            testlib.StatusRange(response,0,404);


          //  testlib.JsonCheck(response,"success","false");
                testlib.jsonpresent(response,{"success":false});
                testlib.jsonpresent(response,{"message":'No token provided.'});

        }



        chakram.wait();
    });

});