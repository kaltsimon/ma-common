import { WithStyles, withStyles } from '@material-ui/core/styles';
import Typography, { TypographyProps } from '@material-ui/core/Typography';
import * as React from 'react';
import { pure } from 'recompose';

const decorateWithMargin = withStyles(() => ({
  margin: {
    margin: '0.8em 0',
  },
}));

const TypographyWithMargin: React.ComponentType<
  TypographyProps
> = decorateWithMargin(
  ({ classes, children, ...rest }: TypographyProps & WithStyles<'margin'>) => {
    const { margin, ...restClasses } = classes;
    return (
      <Typography className={margin} classes={restClasses} {...rest}>
        {children}
      </Typography>
    );
  }
) as any;

// Don't ask me...

export default pure(TypographyWithMargin);
