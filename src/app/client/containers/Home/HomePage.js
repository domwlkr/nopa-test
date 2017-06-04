import React from 'react';
import { Layout, HomeIntro, HomeSecondary } from '../../components';
import { Link } from 'react-router';

const HomePage = (props) => {
  return (
    <Layout title="Welcome to Nopa!">
      <HomeIntro />
      <HomeSecondary />
    </Layout>
  );
};

export default HomePage;
