import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Import Components
import List from './components/list.js';
import Helmet from 'react-helmet';

// Import Actions
import { bannerMessage } from './AppActions';
import { getMessage } from './AppReducer.js';

export class App extends Component {

  componentWillMount() {
    this.props.dispatch(bannerMessage('NODEXPERTS'));
  }

  render() {
    return (
      <div>
        <Helmet
          title="NodeXperts - React-Redux -Boilerplate"
          titleTemplate="%s - Boilerplate"
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
        <List />

        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  // children: PropTypes.object.isRequired,
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
