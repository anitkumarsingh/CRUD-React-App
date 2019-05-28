import React from 'react';
import { AppBar , Toolbar, Typography} from '@material-ui/core';
import CreateBtn from '../Exercise/Dialog/CreateFloatBtn';

const Header = ({muscles,onExerciseCreate}) =>{
    return (
        <div>
            <AppBar position="static">
                <Toolbar >
                <Typography variant="h6">CRUD App
                </Typography>
                <CreateBtn muscles={muscles} onCreate={onExerciseCreate} />
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header;