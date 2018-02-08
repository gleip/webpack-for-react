import * as React from 'react';

export interface Props {
  title: string;
}

const Title: React.StatelessComponent<Props> = props => (
  <h1>{props.title}</h1>
);

export default Title;
