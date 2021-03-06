import React,{ Fragment} from 'react';
import Grid from '@material-ui/core/Grid';
import './Scroll.css';
import { Paper, 
         Typography,
         List,ListItem,
         ListItemText,
         ListItemSecondaryAction,
         IconButton 
        } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import Edit from '@material-ui/icons/Edit';

const styles ={
    Paper:{
        padding:20,
        marginTop:10,
        marginBottom:10,
        height:500,
        overflowY:'auto'
    }
}

const Exercise = ({
    exercises,
    catergory,
    onSelect,
    onDelete,
    onEditMode,
    editMode,
    exercise:{
        id,
        title ='Welcome!',
        description ='  Please select list on left panel'
    }
  }) =>{
    return(
        <Grid container>
          <Grid item sm={4}>
             <Paper style={styles.Paper}>
                {exercises.map(([group,exercises])=>{
                    if(!catergory || catergory === group){
                    return(
                        <Fragment key={group + 'fragment'}>
                        <Typography variant="subtitle1" 
                                    style={{textTransform:'capitalize'}} 
                                    key={group + 'grps'}>
                        {group}
                        </Typography>
                        <List compoent="ui">
                            {exercises.map(({id,title})=>{
                            return(
                                <ListItem button key={title +'id'}
                                onClick={()=>onSelect(id)}
                                >
                                <ListItemText primary={title}/>
                                <ListItemSecondaryAction>
                                    <IconButton edge="end" aria-label="Edit" onClick={()=>onEditMode(id)}>
                                        <Edit />
                                    </IconButton>
                               
                                    <IconButton edge="end" aria-label="Delete" onClick={()=>onDelete(id)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                            )
                            })}
                        
                        </List>
                    </Fragment>
                    )
                    }
                    return null;   
                })}
        </Paper>
          </Grid>
          <Grid item sm>
              {editMode ? (
                   <Paper style={styles.Paper}>
                    Hello
               </Paper>
              ):(
                <Paper style={styles.Paper}>
                <Typography variant="h4" component="h4" 
                            gutterBottom>
                    {title}
                </Typography>
                <Typography variant="subtitle1" component="h4">
                    {description}
                </Typography>
            </Paper>
              )}
             
          </Grid>
        </Grid>
    )
}
export default Exercise;