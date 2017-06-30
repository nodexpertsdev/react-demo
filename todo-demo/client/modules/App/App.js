import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// TODO: Cleanup Message and Banner Message components

// Import Components
import Helmet from 'react-helmet';
// import Message from './components/message.js';

// Import Actions
import { getMessage } from './AppReducer.js';

export class App extends Component {
  componentWillMount() {
    // this.props.dispatch(setData());
  }

  render() {
    return (
      <div>
        <Helmet
          title="NodeXperts"
          titleTemplate="%s - Redux Todos App"
          meta={[
            { charset: 'utf-8' },
            {
              'http-equiv': 'X-UA-Compatible',
              content: 'IE=edge',
            },
            {
              name: 'viewport',
              content: 'width=device-width, initial-scale=1',
            },
          ]}
        />
        {/* <Message message={this.props.message} />*/}
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  message: PropTypes.string,
};

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    message: getMessage(state),
  };
}

export default connect(mapStateToProps)(App);
