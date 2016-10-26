import ContactModule from './contact.module.js';
import ContactComponent from './contact.component.js';
import ContactController from './contact.controller.js';
import ContactTemplate from './contact.html';

describe("Contact Module", () => {

  beforeEach(window.module(ContactModule));

  describe("Component", () => {
    let component = ContactComponent;

    it('includes the intended template',() => {
      expect(component.controller).toEqual(ContactController);
    });

    it('invokes the right controller', () => {
      expect(component.template).toEqual(ContactTemplate);
    });
  })
})
