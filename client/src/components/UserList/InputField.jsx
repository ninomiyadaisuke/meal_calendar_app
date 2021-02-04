import React from 'react'
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Fade from '@material-ui/core/Fade';


const InputField = (props) => {

  const {handleChange, handleClick, name} = props
  return (
    <>
      <Grid container justify="center" style={{marginBottom:"30px"}}>
        <TextField type="text" placeholder="名前を入力" style={{ marginTop:"10px"}}　value={name} onChange={handleChange} />
        <Button onClick={handleClick}　TransitionComponent={Fade} TransitionProps={{ timeout: 600 }} variant="contained" color="primary"　style={{ marginLeft: "10px" }}>ユーザーを作成</Button> 
      </Grid>
    </>
  )
}

export default InputField
