import { TypographyProps } from '@material-ui/core/Typography';
import * as React from 'react';
import { pure } from 'recompose';

import TypographyWithMargin from './TypographyWithMargin';

const Subheading = ({ children, ...rest }: TypographyProps) => (
  <TypographyWithMargin component="h2" variant="subheading" {...rest}>
    {children}
  </TypographyWithMargin>
);

export default pure(Subheading);
