
// loading-a-goat ===============================================
 describe('LOADING a goat', () => {
    it('display staff in list', () => {
     browser.get('http://localhost:3000/#/app/home');
     
     element(by.id('')).click();  // clicking on  a button with an id

     let items = element.all(by.repeater('staff in staffList')); //the ng-repeat directive staff in staffList
     expect(items.count()).toEqual(5);
     expect(items.get(0).getText()).toEqual('miller');
   });
});
