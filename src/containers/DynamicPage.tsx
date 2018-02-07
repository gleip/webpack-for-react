import * as React from 'react';
import Title from '../components/Title';
import Layout from './Layout';

const DynamicPage: React.StatelessComponent<{}> = () => (
  <Layout>
    <Title title="Динамическая страница" />
  </Layout>
);

export default DynamicPage;
