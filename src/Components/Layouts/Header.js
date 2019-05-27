import React from 'react';
import { AppBar , Toolbar, Typography} from '@material-ui/core';
import CreateBtn from '../Exercise/Dialog/CreateFloatBtn';
import PropTypes from 'prop-types';

const Header = () =>{
    return (
        <div>
            <AppBar position="static">
                <Toolbar style={{ flexGrow: 1,}}>
                <Typography variant="h6">CRUD App
                </Typography>
                <CreateBtn />
                </Toolbar>
            </AppBar>
        </div>
    )
}
Header.propTypes = {
    classes: PropTypes.object.isRequired,
  };
export default Header;