import React, { useState,useCallback } from 'react'
import { makeStyles } from "@material-ui/styles"
import { Link } from 'react-router-dom'
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core"




const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  menubar: {
    backgroundColor: "#fff",
    color: "#444",
  },
  toolbar: {
    margin: "0 auto",
    maxWidth: 1024,
    width: "100%",
  },
})

const Header = () => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  const handleDrawerToggle = useCallback((event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return
    }
    setOpen(!open)
  }, [setOpen, open])  

  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar className={classes.toolBar}>
          <Button component={Link} to="/"  color="inherit" style={{ textDecoration: 'none' }} >
            まかないカレンダー
          </Button>
          <Button component={Link} to="/buylist"  color="inherit" style={{ textDecoration: 'none' }} >
            買い物リスト
          </Button>
          <Button component={Link} to="/user"  color="inherit" style={{ textDecoration: 'none' }} >
            ユーザーリスト
          </Button>          
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
