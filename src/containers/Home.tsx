import * as React from 'react';
import Title from '../components/Title';
import { Link } from 'react-router-dom';
import Layout from './Layout';

const Home: React.StatelessComponent<{}> = () => (
  <Layout>
    <Title title="Компонент Home 1" />
    <Link to="/dynamic" >На динамическую страницу</Link>
  </Layout>
);

export default Home;
