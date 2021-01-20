import React from 'react'
import { Divider, Drawer, Button } from "@material-ui/core"
import { Link } from 'react-router-dom'
import { makeStyles } from "@material-ui/styles"






const useStyles = makeStyles({
  drawerPaper: {
    width: 256
  },
})

const ClosableDrawer = (props) => {
  const classes = useStyles()
  
  return (
    <nav>
      <Drawer
        variant="temporary"
        anchor="right"
        open={props.open}
        onClose={(e) => props.onClose(e)}
        classes={{ paper: classes.drawerPaper }}
        ModalProps={{keepMounted: true}}
      >
      <Button component={Link} to="/buylist"
        color="inherit"
        style={{ textDecoration: 'none' }}
      >
          買い物リスト
      </Button>
      <Divider/>
      <Button component={Link} to="/user"
        color="inherit"
        style={{ textDecoration: 'none' }}
      >
          ユーザーリスト
      </Button> 
      <Divider/>  
      <Button
        color="inherit"
        style={{ textDecoration: 'none' }}
      >  
          ログアウト
      </Button>   
      <Divider/>  
    </Drawer>
    </nav>
  )
}

export default ClosableDrawer
