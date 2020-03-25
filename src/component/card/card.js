import React from 'react';
import styles from './card.module.css';

const Card = (props) => {
    return <card className={styles.card}><div>{props.titre}</div>
    <br/>
    <div>{props.contenu}</div></card>;   
};

export default Card;
