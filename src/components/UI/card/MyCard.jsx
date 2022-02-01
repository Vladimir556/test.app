import React from 'react';
import classes from './MyCard.module.css'
import MyButton from './../button/MyButton';

const MyCard = (props) => {
    return (
        <div className={classes.card}>
            <h2>{props.mission.mission_name} Number: {props.mission.id}</h2>
            <div>
                {props.mission.links.mission_patch
                    ? <img className={classes.image} src={props.mission.links.mission_patch} alt="изображение отсутсвует"/>
                    : <></>}
            </div>
            <div className={classes.content}>
                {props.mission.details}
            </div>
            <div className={classes.bottom__content}>
                <MyButton onClick = { () => props.remove(props.mission)}>Х</MyButton>
            </div>
        </div>
    );
};

export default MyCard;