import React, {useState} from 'react'
import { updateBuyList } from '../../functions/buyList'
import { makeStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';


const useStyles = makeStyles((theme) => ({
    paper: {
      border: '1px solid',
      padding: theme.spacing(1),
      backgroundColor: theme.palette.background.paper,
    },
  }));




const ListTodo = (props) => {
    const {buyList, setRemove,loadSelectBuylist, selectedDate} =props

    const classes = useStyles();

    const [anchorEl, setAnchorEl] = useState(null);
    const [editItem, setEditItem] = useState("")
    const [editCount, setEditCount] = useState(1)

    const changeEditCount = (e) => {
        setEditCount(e.target.value)
        //console.log(editCount);
      }
    
      const changeEditItem = (e) => {
        setEditItem(e.target.value)
        // console.log(editItem)
      }

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;
    
    const handleClickEdit = (id) => {
        setAnchorEl(null);
        updateBuyList(id, editItem, editCount).then((res) => {
            alert(`${res.data.item}を更新しました`)
            loadSelectBuylist(selectedDate)
        })
        // console.log(id, editItem, editCount);   
        // console.log(editItem);
    }


    return (
        <div>
            {buyList && buyList.map((item) => (
                <div key={item._id}>
                    <p>{item.item}</p>
                    <p>{item.count}</p>
                    <button onClick={handleClick}>編集</button>
                    <button onClick={() => {
                        setRemove(item._id)
                    }}>削除</button>
                    <Popper id={id} open={open} anchorEl={anchorEl}>
                        <div className={classes.paper}>
                            <input type="text" defaultValue={editItem} onChange={changeEditItem}/>
                            <input type="number" defaultValue={editCount} onChange={changeEditCount} />
                            <button onClick={() =>handleClickEdit(item._id) }>編集を保存</button>
                        </div>
                    </Popper>

                </div>
            ))}
        
    </div> 
    );
};

export default ListTodo


