import React from 'react';
import MyButton from '../button/MyButton';
import MyInput from '../MyInput/MyInput';
import { useState } from 'react';

const CreateForm = ({create}) => {
    const [mission,setMission] = useState({mission_name: '' , details: '', links: {mission_patch : ''}});

    const addNewMission = (e) => {
        e.preventDefault()
        const newMission = {
            ...mission, id: Date.now()
        }
        console.log(Date.now())
        create(newMission)
        setMission({mission_name: '' , details: '', links: {mission_patch : ''}})
    }
    return (
        <form>
            <MyInput 
                value = {mission.mission_name}
                onChange = {e => setMission({...mission ,mission_name: e.target.value})}
                type="text" 
                placeholder="Название миссии"/>

            <MyInput 
                value = {mission.details}
                onChange = {e => setMission({...mission ,details: e.target.value})}
                type="text" 
                placeholder="Описание миссии"/>

            <MyInput 
                value = {mission.links.mission_patch}
                onChange = {e => setMission({...mission ,links: {mission_patch : e.target.value}})}
                type="text" 
                placeholder="Ссылка на изображение"/>
            <MyButton onClick={addNewMission}>Добавить миссию</MyButton>
        </form>
    );
};

export default CreateForm;