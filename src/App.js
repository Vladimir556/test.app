import React, { useEffect } from "react";
import { useState } from "react";
import { GET_LAUNCHES } from './querry/launchesPast';
import { useQuery } from "@apollo/client";
import Loader from "./components/UI/Loader/Loader";
import MyCard from "./components/UI/card/MyCard";
import CreateForm from './components/UI/CreateForm/CreateForm';

const App = () => { 

  const [launches, setLaunches] = useState([]);

  const { 
    data: dataLaunches,
    loading: loadingLaunches,
    error: errorLaunches 
  } = useQuery(GET_LAUNCHES);
  

  useEffect(() => {
    if(!loadingLaunches) {
      setLaunches(dataLaunches.launchesPast)
    }
  },[dataLaunches]) 

  useEffect(() => {
    if(errorLaunches) {
      alert(errorLaunches)
    }
  },[errorLaunches]) 

  const hadleLogClick = () => {
    console.log(launches);
  }

  const addNewMissionClick = (newLaunch) => {
    setLaunches([...launches, newLaunch])
  }
   
  const removeMission = (launch) => {
    setLaunches(launches.filter(p => p.id !== launch.id))
  } 
  return (
    <div className="App">
      <button onClick={hadleLogClick}>

      </button>
      <CreateForm create={addNewMissionClick}/>
      {loadingLaunches
        ? <Loader/>
        : <div>
          {launches.map(launch => 
            <MyCard remove={removeMission} mission = {launch} key={launch.id}>
            </MyCard>  
          )}
        </div>}
    </div>
  );
}

export default App;
