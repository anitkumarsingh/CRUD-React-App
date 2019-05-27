import React from 'react';
import { AppBar , Toolbar, Typography} from '@material-ui/core';
import CreateBtn from '../Exercise/Dialog/CreateFloatBtn'

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
export default Header;