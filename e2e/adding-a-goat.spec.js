
// adding-a-goat ===============================================
 describe('Adding a goat', () => {
    it('sample adding a goat form', () => {
     browser.get('http://localhost:3000/#/app/create');
     
     element(by.model('vm.goat.name')).sendKeys('Johnny Kangun');
     let greeting = element(by.binding('vm.goat.name'));
     expect(greeting.getText()).toEqual('Johnny Kangun');
   });
});
