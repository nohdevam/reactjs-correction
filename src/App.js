import React, { useState } from 'react';

import './App.css';

import Header from './component/Header/Header';
import Content from './component/content/content';
import MyButton from './component/MyButton/MyButton';

function App() {
    const [ myCompteur, setMyCompteur ] = useState(0);

    const [textValue, setTextValue ] = useState('');

    const [myColor, setMyColor] = useState([]);
    const [userName, setUserName] = useState([]);
    const [password, setPassword] = useState([]);
    
    const couleur = () => {return '#'+(Math.random()*0xFFFFFF<<0).toString(16);
};
    const data = [
        {
            titre: 'News',
            contenu: 'Lorem ipsum',
            idItem: 1
        },
        {
            titre: 'News',
            contenu: 'Lorem ipsum',
            idItem: 2
        },
        {
            titre: 'News',
            contenu: 'Lorem ipsum',
            idItem: 3
        },
        {
            titre: 'News',
            contenu: 'Lorem ipsum',
            idItem: 4
        },
        {
            titre: 'News',
            contenu: 'Lorem ipsum',
            idItem: 5
        },
        {
            titre: 'News',
            contenu: 'Lorem ipsum',
            idItem: 6
        },
        {
            titre: 'News',
            contenu: 'Lorem ipsum',
            idItem: 7
        }
    ];

    const myForm = (
        <div>
            <label for="nom">Entrez votre nom s'il vous plait</label>
            <br/>
            <input type="text" name="nom" id={userName} onChange={(e) => setUserName(e.target.value)} />
            <br/>
            <label>Bonjour {userName} </label>
            <br/>
            <label for="mdp">Entrez votre mot de passe</label>
            <br/>
            <input type="text"
                name="mdp"
                id="nom"
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
            <br/>
    <label>{password.length <=5 ? 'Le mot de passe doit comporter plus de 5 caractère' : null}</label>
        </div>
    )
    return (
        <div className="App">
            <Header/>
        
            {myForm}
        <div>
            <input type='text' value={textValue} onChange={(e) => setTextValue(e.target.value)}/>
            <p>{textValue}</p>
        </div>

            <div style={{ display:'flex',flexDirection:'row'}}>
                <MyButton titre="Charger une couleur" myhandler={() => setMyColor([ ...myColor, couleur() ])}/> {myColor.map((item) => {
                    return <div style={{ width:'200px', height:'300px', fontSize: 50, backgroundColor: item }}> </div>
                })} 
            </div>

            <div style={{margin: '100px'}}>
                <MyButton titre="Incrémenter compteur" myHandler={() => setMyCompteur(myCompteur + 1)} />
      
                <MyButton titre="Décrémenter compteur" myHandler={() => setMyCompteur(myCompteur - 1)} />
            <div style={{ width: '200px', height: '200px', fontSize: 38 }}>{myCompteur}</div>
            </div>
            <Content data={data} />
        </div>
    ); 
            }        

export default App;