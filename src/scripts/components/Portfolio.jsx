import React from 'react';

class Portfolio extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentRoute: props.router.current
    }
  }

  componentWillMount() {
    this.props.router.on('route', this.onRoute);
  }

  componentWillUnmount() {
    this.props.router.off('route', this.onRoute);
  }

  onRoute = () => {
    this.setState({
      currentRoute: this.props.router.current
    });
  }

  render() {
    let currentView;

    switch(this.state.currentRoute) {
      case 'indexPage' :
        currentView = <IndexPage/>;
        break;
      case 'worksPage' :
        currentView = <WorksPage/>;
        break;
      case 'aboutPage' :
        currentView = <AboutPage/>;
        break;
      case 'contactPage' :
        currentView = <ContactPage/>;
        break;
      default :
        currentView = <IndexPage/>;
    };

    return (
      <div>
        {currentView}
      </div>
    );
  }
}

export default Portfolio;
