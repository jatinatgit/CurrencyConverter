import React from 'react';
import PropTypes from 'prop-types';
import { Header } from 'semantic-ui-react';

const Page = props => {
  const { children } = props;

  return (
    <div className='app-container'>
        <header className="app-header">
            <img src="assets/images/logo.svg" height="100" width="150" alt="Currency converter logo"></img>
            <Header as="h3">Currency converter</Header>
        </header>
        {children}
    </div>
  )
};

Page.propTypes = {
  children: PropTypes.node
}

Page.defaultProps = {
  children: {},
}

export default Page;