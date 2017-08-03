import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 

export default function(ComposedComponent) {
  class Authentication extends React.Component {
    static contextTypes = {
      router: PropTypes.object, 
    }

    componentWillMount() {
      if (!this.props.authenticated) {
        this.context.router.push('/');
      }
    }

    componentWillUpdate(nextProps) {
      // called whenever the comp is about the receive new props or be re-rendered.
      if (!nextProps.authenticated) {
        this.context.router.push('/');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  const mapStateToProps = (state) => ({
    authenticated: state.authenticated,
  });

  return connect(mapStateToProps)(Authentication);
}

// Our HOC is a function that receives a component we care about and returns a composed component
// We export a different instance of a class every time our HOC is called. 
// context is similar to props (very) but you have to define the 'types' in order for react to allow you to do this. 
// static defines a class level property (not an instance of the class but the actual class.)