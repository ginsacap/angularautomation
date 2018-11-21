describe('My First Test Scenario',function(){

    it('Should Test All the Links on Home Page', () => 

    {
        browser.sleep(2000);
        browser.get('google.com');
        browser.sleep(2000);
        var type1 = element(by.linkText('FLYTAP'));
        type1.click();
        expect(type1.getText).toEqual('FLYTAP');
    });
});



describe('Enter GURU99 Name', function() {
 it('should add a Name as GURU99', function() {
 browser.get('https://angularjs.org');
 element(by.model('yourName')).sendKeys('GURU99');
  var guru= element(by.xpath('html/body/div[2]/div[1]/div[2]/div[2]/div/h1'));
expect(guru.getText()).toEqual('Hello GURU99!');
  });
});





