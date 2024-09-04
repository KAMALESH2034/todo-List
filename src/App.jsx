import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css"
import TodoAdd from './components/TodoAdd';
import FilterTodo from './components/FilterTodo';
import TodoItems from './components/TodoItems';
function App() {
   const [data, setData] =useState([
    {
      id:1,
      task :{
        name:"Task 1",
        description:"this is task 1 description",
        status:"notCompleted"
            }
    },
      {
        id:2,
        task :{
          name:"Task 2",
          description:"this is task 2 description",
          status:"notCompleted"
        }
      },
      {
        id:3,
        task :{
          name:"Task 3",
          description:"this is task 3 description",
          status:"notCompleted"
        }
       }  
 ]);

  const [inpName, setInpName] = useState("");
  const [inpDesc, setInpDesc] = useState("");

  const [editId, setEditId] = useState("");
  const [btnText, setBtnText] = useState("Add Todo");

  function handleDelete(id){
    const cardList = data.filter((card) => card.id !== id);
    setData(cardList);
    
    if(editId === id){
      setInpName("");
      setInpDesc("");
      setBtnText("Add Todo");
    }
  }

  function handleEdit(id,name, des){
    setInpName(name);
    setInpDesc(des);
    setBtnText("Update Todo");
    setEditId(id);
  }

  function addCard(e){
    e.preventDefault();

    let buttonText = e.nativeEvent.submitter.innerText;

    if(buttonText === "Add Todo"){
   
      const newId = data.length + 1;
      setData([
        ...data,
        {
          id:newId,
          task :{
            name : inpName,
            description : inpDesc,
            status : "notCompleted",
        }
      }
      ]);
    }

    if (buttonText === "Update Todo"){
      let ind;
      data.forEach((card,index) =>{
        if(card.id === editId){
          ind = index;
        }
      
    });

    let newData = [...data];
    newData[ind] = {
      id:editId,
      task :{
        ...newData[ind].task,
        name : inpName,
        description : inpDesc
  },
    };
    setData(newData);
    setBtnText("Add Todo");
        }
        setInpName("");
        setInpDesc("");
}

function handleStatus(e,id){
  let ind;
  data.forEach((card,index) =>{
    if(card.id === id){
      ind = index;
    }

});
let newData = [...data];

newData[ind] = {
  ...newData[ind],
  task :{
    ...newData[ind].task,
    status : e.target.value
    }
  }
    setData(newData);
}

const [filtercard, setFilterCard] = useState("All");

function handleFilter(e){
  setFilterCard(e.target.value);
}

  return (
    <div className="App">
      <div className="container">
        <div className='head sticky-top'>
        <header className='todo-header'>
        <h1 className="text-center ">My Todo</h1>

        <TodoAdd 
        addCard={addCard}
        inpName={inpName}
        inpDesc={inpDesc}
        setInpName={setInpName}
        setInpDesc={setInpDesc}
        btnText={ btnText }
        />
      </header>

      <FilterTodo handleFilter={handleFilter} filtercard={filtercard} />
    </div>
      <div className='container  mt-3 col-lg-12 p-3'>
      <div className='mb-5  d-flex justify-content-center justify-content-around align-content-around row'>
       
    
        {
          data.length ? (
            data.filter((card) =>
              {
              if(filtercard === "All")
              {
                return card;
              }else if(filtercard === "Completed"){
                if(filtercard === card.task.status){
                  return card;
                }
              }else if(filtercard === "notCompleted"){
                if(filtercard === card.task.status){
                  return card;
              }
            }
          }).map((card) => (
            <TodoItems
            key={card.id}
            id={card.id}
            name={card.task.name}
            description={card.task.description}
            status={card.task.status}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            handleStatus={handleStatus}
            />
          ))
          ) : (
            <h1 className="text-center">No Data Found</h1>
          )
        }
      </div>
       
    
     
      </div>
      

      </div>
      </div>
  )
}

export default App