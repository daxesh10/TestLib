/**
 * Created by daxes on 10/28/2016.
 */
var chakram = require('chakram');
expect = chakram.expect;
var response;

function TestLib(url)
{
this.url = url;
this.response = chakram.get(url);
}






TestLib.prototype.getResponse= function(url)
{
    describe('get response ',function(){

        it('checking',function(){


           // console.log("url : "+url);
            this.response =  chakram.get(url);
           // console.log("response " + this.response);

            return this.response;
        });
    });


}



TestLib.prototype.checkstatus= function(response)
{
    describe('check status  ',function(){

        it('status 200 ok ? :',function(){



//can not use this.response here in it coz it will return undefined;
            return  expect(response).to.have.status(200);
        });
    });


}

TestLib.prototype.CheckHeaders = function(response,headertype,headervalue)
{
    describe('check headers',function(){

            it('checking  header = '+headertype +",  value ="+headervalue,function(){

               return expect(response).to.have.header(headertype,headervalue);

            });


    });
};



TestLib.prototype.CheckHeadersPresenet = function(response,headertype)
{
    describe('check headers',function(){

        it('checking  header presesnt  = '+headertype ,function(){

            return expect(response).to.have.header(headertype);

        });


    });
};

TestLib.prototype.EncodingCheck=function(response){

    describe('gzip Test:  ',function(){

       it('Not  encoding with gzip  test',function(){

           return expect(response).not.to.be.encoded.with.gzip;

       }) ;

    });

}

TestLib.prototype.JsonCheck=function(data,JsonAttribute,JsonObject){

    describe('test for json Attribute: '+JsonAttribute,function(){

       it('\n\nchecking for '+JsonObject,function(){


           return expect(data).to.have.json(JsonAttribute, JsonObject);
       }) ;

    });

}


TestLib.prototype.JsonCheckWithContain= function(response,index,path,value){

    describe('json testin path '+path,function(){

       it('\n\n value of the path = '+value,function(){

           var get_data = response.body;

           if(get_data != null) {

               //console.log("####### the data retrived is "+JSON.stringify(get_data).toString());

            console.log((expect(data).to.have.status(200)) ? "the status 200 " : "not 200");
            var s_data = get_data[index].path;

            console.log("test data " + s_data);

             return expect(s_data).to.contain(value);


           }


       }) ;

    });

}



TestLib.prototype.PutRequest= function (url,data,PutTestObject) {

    describe('put request in url = \n'+url,function(){
       it('puting data \n\n'+data,function(){


           var putRequest;
           //var name1 = Math.random().toString(32).slice(2);

           it("Testing PUT operation", function () {
               putRequest = chakram.put(url,data);
               expect(putRequest).to.have.status(200);

               expect(putRequest).to.comprise.of.json(PutTestObject);
               return chakram.wait();
           });

           return chakram.wait();
       }) ;


    });

}

TestLib.prototype.PostRequest= function (url,data) {

    describe('put request in url = \n'+url,function(){
        it('puting data \n\n'+data,function(){


            var postRequest;
            //var name1 = Math.random().toString(32).slice(2);

            it("Testing PUT operation", function () {
                postRequest = chakram.post(url,data);
                expect(postRequest).to.have.status(200);

              return chakram.wait();
            });

            return chakram.wait();
        }) ;


    });






}

TestLib.prototype.DeleteReq=function(url){

    describe('deltee by ',function(){

                it("Testing DELETE operation on url " +url, function () {
                var deleteData = chakram.delete(url);
                expect(deleteData).to.have.status(200);
                expect(deleteData).to.have.header('Access-Control-Allow-Headers');
                expect(deleteData).to.comprise.of.json({
                    message: "1 resource(s) deleted."
                });
                return chakram.wait();
            });

    });


}


module.exports = TestLib;