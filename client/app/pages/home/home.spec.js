import HomeModule       from './home'
import HomeController   from './home.controller';
import HomeComponent    from './home.component';
import HomeTemplate     from './home.html';

describe('Home', () => {
  let $rootScope, makeController;

  beforeEach(window.module(HomeModule.name));



  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new HomeController();
    };
  }));



  // beforeEach(inject((_$rootScope_) => {
  //   $rootScope = _$rootScope_;
  //   makeController = () => {
  //     return new HomeController();
  //   };
  // }));


  // jasmin syntax
  describe('Template', () => {
    it('renders goats listing component IN JASMIN',() => {
      expect(HomeTemplate).toMatch(/<goats-listing>/g);
    });
  });


  // jasmin syntax
  describe('Component', () => {
      // component/directive specs
      let component = HomeComponent;

      it('includes the intended template IN JASMIN',() => {
        expect(component.template).toEqual(HomeTemplate);
      });

      // it('uses `controllerAs` syntax', () => {
      //   expect(component).toHave.property('controllerAs');
      // });

      it('invokes the right controller', () => {
        expect(component.controller).toEqual(HomeController);
      });
  });
});
