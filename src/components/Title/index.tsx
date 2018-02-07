import * as React from 'react';

const Title: React.StatelessComponent<{ title: string }> = props => (
  <h1>{props.title}</h1>
);

export default Title;
