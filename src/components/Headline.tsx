import { TypographyProps } from '@material-ui/core/Typography';
import * as React from 'react';
import { pure } from 'recompose';

import TypographyWithMargin from './TypographyWithMargin';

const Headline = ({ children, ...rest }: TypographyProps) => (
  <TypographyWithMargin component="h1" variant="headline" {...rest}>
    {children}
  </TypographyWithMargin>
);

export default pure(Headline);
