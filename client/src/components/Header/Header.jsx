import React, { useState,useCallback } from 'react'
import { makeStyles } from "@material-ui/styles"
import { Link } from 'react-router-dom'
import { AppBar, Button, IconButton, Toolbar, Typography } from "@material-ui/core"
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
import { ClosableDrawer} from "./index"

const useStyles = makeStyles((theme) => ({
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
  grow: {
    flexGrow: 1
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  }, 
  customHoverFocus: {
    "&:hover, &.Mui-focusVisible": { backgroundColor: "none" }
  },
  iconColor: {
    color: "white"
  }
}))

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
          <div className={classes.grow}></div>
    <div className={classes.sectionDesktop} >
      <Button component={Link} to="/buylist"
        color="inherit"
        style={{ textDecoration: 'none' }}
      >
        買い物リスト
      </Button>
      <Button component={Link} to="/user"
        color="inherit"
        style={{ textDecoration: 'none' }}
      >
        ユーザーリスト
      </Button> 
      <Button
        color="inherit"
        style={{ textDecoration: 'none' }}
      >  
        ログアウト
      </Button>            
    </div>
          <div className={classes.sectionMobile}>
            <IconButton className={classes.customHoverFocus}
              onClick={handleDrawerToggle}
            >
              <FormatAlignJustifyIcon
                className={classes.iconColor} /> 
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <ClosableDrawer open={open} onClose={handleDrawerToggle} />
    </div>
  )
}

export default Header
