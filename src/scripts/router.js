import Backbone from 'backbone';

class Router extends Backbone.Router {

  get routes() {
    return {
      '': 'indexPage',
      'works': 'worksPage',
      'about': 'aboutPage',
      'contact': 'contactPage'
    }
  }

  indexPage() {
    this.current = 'indexPage';
  }

  worksPage() {
    this.current = 'worksPage';
  }

  aboutPage() {
    this.current = 'aboutPage';
  }

  contactPage() {
    this.current = 'contactPage';
  }

  initialize() {
    Backbone.history.start();
  }
}

export default Router;
