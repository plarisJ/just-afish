import AfishPost from './components/AfishPost';
import AfishItem from './components/AfishItem';
import './App.css';
import AppHeader from './components/AppHeader';
import afishs from './data/Afishs';
import React, { useEffect, useState } from "react";


function App() {
    const [selectedAfish, setSelectedAfish] = useState(afishs[0]);
    const afishElements = afishs.map((afish,index)=>{
        return <AfishItem key={index} afish={afish}/>;
    })

    let afishPost = null;
    if (!!selectedAfish){
        afishPost = <AfishPost afish={selectedAfish}/>
    }

    return (
        <div className="app">
            <AppHeader/>
            <div className="app-grid">
                {afishElements}
            </div>
            {afishPost}
        </div>
    );
}

export default App;
