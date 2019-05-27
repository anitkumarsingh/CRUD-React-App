import React ,{ Fragment } from 'react';
import { Paper, Typography,List,ListItem,ListItemText } from '@material-ui/core';

export default ({ styles,propsData,propsCategoryData,onSelect,prosExercise }) =>{
  console.log(propsCategoryData);
  let catergory = propsCategoryData;
  console.log(catergory)
    return(
        <Paper style={styles.Paper}>
          {propsData.map(([group,exercises])=>{
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
    )
}