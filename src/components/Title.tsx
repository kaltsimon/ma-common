import { TypographyProps } from '@material-ui/core/Typography';
import * as React from 'react';
import { pure } from 'recompose';

import TypographyWithMargin from './TypographyWithMargin';

const Title = pure(({ children, ...rest }: TypographyProps) => (
  <TypographyWithMargin component="h2" variant="title" {...rest}>
    {children}
  </TypographyWithMargin>
));

export default Title;
