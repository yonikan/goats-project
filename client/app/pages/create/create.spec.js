import CreateModule from './create'
import CreateController from './create.controller';
import CreateComponent from './create.component';
import CreateTemplate from './create.html';

describe('Create', () => {
  let $rootScope, makeController;

  beforeEach(window.module(CreateModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new CreateController();
    };
  }));

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('renders goats creator component', () => {
      expect(CreateTemplate).toMatch(/<goat-creator-form>/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = CreateComponent;

      it('includes the intended template',() => {
        expect(component.template).toEqual(CreateTemplate);
      });

      // it('uses `controllerAs` syntax', () => {
      //   expect(component).toHave.property('controllerAs');
      // });

      it('invokes the right controller', () => {
        expect(component.controller).toEqual(CreateController);
      });
  });
});
