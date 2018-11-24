import * as React from 'react';
import Typography, { TypographyProps } from '@material-ui/core/Typography';

const Header: React.SFC<TypographyProps> = props => (
    <Typography>
        {props.children}
    </Typography>
);

export default Header;