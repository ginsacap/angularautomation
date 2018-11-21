
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
        'browserName': 'firefox'
    },
    specs: ['spec.js'],
   framework: 'jasmine2' ,
   onPrepare: function() {
    browser.driver.manage().window().maximize();
    require('jasmine-reporters');
    jasmine.getEnv().addReporter(
      new jasmine.JUnitXmlReporter('xmloutput', true, true));
    //                                          
},
 };