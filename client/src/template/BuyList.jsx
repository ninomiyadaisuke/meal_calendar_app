import React, { useState, useEffect } from "react";
import { ListTodo, InputTodo, DatePicker } from '../components/BuyList'
import { createBuyList, getBuylistByDate, removeBuyList } from '../functions/buyList'
import {dateChange} from '../functions/formatValue'




const BuyList = () => {
  const initialDate = dateChange(new Date)
  const [item, setItem] = useState("")
  const [count, setCount] = useState(1);
  const [selectedDate, setSelectedDate] = useState(initialDate);
  const [selectBuylist, setSelectbuylist] = useState([])
  

//selectedDateの更新のたびに再レンダリング
  useEffect(() => {
      loadSelectBuylist(selectedDate)
    }, [selectedDate])


  const loadSelectBuylist = (date) => {
    //console.log(date);
    getBuylistByDate(date).then((res) => {
      setSelectbuylist(res.data)
      //console.log(res.data);
    })
  }
  
//Dateをformat
  const handleDateChange = (date) => {
    const newDate = dateChange(date)
    setSelectedDate(newDate);
    loadSelectBuylist(newDate)
    //console.log(typeof newDate, newDate);
  };


    const onClickItems = () => {
      //console.log(item, count);
      createBuyList(item, count, selectedDate)
        .then((res) => {
          alert(`${res.data.item}を追加しました。`)
          setItem("")
          setCount(1)
          loadSelectBuylist(selectedDate)
      })
    };
  

  const onChangecount = (e) => {
    setCount(e.target.value)
    // console.log(count);
  }

  const onChangeItem = (e) => {
    setItem(e.target.value)
    //console.log(item);
  }



  const setRemove = (id) => {
    if (window.confirm('本当に削除しますか？')) {
        //console.log(id);
        removeBuyList(id).then((res) => {
          alert(`${res.data.item}を削除しました。`)
          loadSelectBuylist(selectedDate)
        })
    } else {
        return false
    } 
  }

　
	return (
    <div>
      <DatePicker selectedDate={selectedDate} handleDateChange={handleDateChange}/>
      <InputTodo
        type={"text"}
        todoText={item}
        onChange={onChangeItem} />
      <InputTodo 
        type={"number"}
        todoText={count} 
        onChange={onChangecount}
      />
      <button onClick={onClickItems}>追加</button>
      <ListTodo
        buyList={selectBuylist}
        setRemove={setRemove}
        selectedDate={selectedDate}
        loadSelectBuylist={loadSelectBuylist}
      />
		</div>
	);
};




    
export default BuyList;
