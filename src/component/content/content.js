import React from 'react';
import styles from './content.module.css';
import Card from '../card/card';

const Content = (props) => { 
   
const data = [
    {
        titre : "News", 
        contenu : "Lorem ipsum",
        idItem : 1
    },
    {
        titre : "News", 
        contenu : "Lorem ipsum",
        idItem : 2
    },
    {
        titre : "News", 
        contenu : "Lorem ipsum",
        idItem : 3
    },
    {
        titre : "News", 
        contenu : "Lorem ipsum",
        idItem : 4
    },
    {
        titre : "News", 
        contenu : "Lorem ipsum",
        idItem : 5
    },
    {
        titre : "News", 
        contenu : "Lorem ipsum",
        idItem : 6
    },
    {
        titre : "News", 
        contenu : "Lorem ipsum",
        idItem : 7
    }
    
]
    return (
    <div className= {styles.content}>
        {data.map(
            (item) => {
                return <Card titre={item.titre} contenu={item.contenu} id={item.idItem}/>
                    }
        )
        }     
    </div>

    );
};

export default Content;