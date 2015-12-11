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
    console.log('index routed!');
  }

  worksPage() {
    this.current = 'worksPage';
    console.log('works routed!');
  }

  aboutPage() {
    this.current = 'aboutPage';
    console.log('about routed!');
  }

  contactPage() {
    this.current = 'contactPage';
    console.log('contacts routed!');
  }

  initialize() {
    Backbone.history.start();
  }
}

export default Router;
