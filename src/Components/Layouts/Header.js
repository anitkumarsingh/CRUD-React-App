import React from 'react';
import { AppBar , Toolbar, Typography} from '@material-ui/core'

const Header = () =>{
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                <Typography variant="h6">CRUD App
                </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default Header;