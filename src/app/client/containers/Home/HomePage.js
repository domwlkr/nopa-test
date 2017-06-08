import React from 'react';
import { Layout, HomeIntro, HomeSecondary } from '../../components';
import { Link } from 'react-router';

export class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout routeClass="home" title="Welcome to Nopa!">
        <HomeIntro />
        <HomeSecondary />
      </Layout>
    );
  }
}

export default HomePage;
