import React, { useEffect } from "react";
import { useState } from "react";
import { GET_LAUNCHES } from './querry/launchesPast';
import { useQuery } from "@apollo/client";
import Loader from "./components/UI/Loader/Loader";
import MyCard from "./components/UI/card/MyCard";
import CreateForm from './components/UI/CreateForm/CreateForm';
import useObject from './hooks/useObject';
import MyButton from "./components/UI/button/MyButton";

const App = () => { 
  
  const [launches, setLaunches] = useState([]);
  const [limitCount, setLimitCount] = useState(10);
  const [isLoad, setIsLoad] = useState(true);
  const [isCheck, setIsCheck] = useState(false);
    
  const { 
    data: dataLaunches,
    loading: loadingLaunches,
    error: errorLaunches 
  } = useQuery(GET_LAUNCHES,{
    variables:{
      limit: limitCount
    }
  });
  
  
  useEffect(() => {
    if(!loadingLaunches) {
      setLaunches(dataLaunches.launchesPast.map(launch => {
        return {...launch , isCheck:false}
      }))
      setIsLoad(false);
    }
  },[dataLaunches]) 


  useEffect(() => {
    if(errorLaunches) {
      alert(errorLaunches)
    }
  },[errorLaunches]) 

  
  
  const hadleLogClick = () => {     //log
    console.log(launches);
    console.log(test);
    console.log(...test);
    console.log(launches);
  }

  const addNewMissionClick = (newLaunch) => {
    setLaunches([...launches, newLaunch])
  }
   
  const removeMission = (launch) => {
    setLaunches(launches.filter(p => p.id !== launch.id))
  }
  
  const changeIsChecked = (mission) => {
    setLaunches(launches.map(launch => {
      if(launch.id === mission.id){
        if(mission.isCheck){
          setIsCheck(false);
        }
        else{
          setIsCheck(true);
        }
        return {...launch, isCheck: isCheck}
      }
      else{
        return{...launch}
      }
    }))
    console.log(mission.id, " Change color!")
  }

  const loadMoreClick = () => {
    setLimitCount(limitCount+10)
    console.log(limitCount)
  }
  return (
    <div className="App">
      <button onClick={hadleLogClick}>

      </button>
      <CreateForm create={addNewMissionClick}/>
      {isLoad
        ? <Loader/>
        : <div>
          {launches.map(launch => 
            <MyCard disable={changeIsChecked} remove={removeMission} mission = {launch} key={launch.id} isCheck={launch.isCheck}>
            </MyCard>  
          )}
        </div>}
        <div>
          <MyButton onClick={loadMoreClick}>load more</MyButton>
        </div>
    </div>
  );
}

export default App;
