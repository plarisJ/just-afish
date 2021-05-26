import AfishPost from './components/AfishPost';
import AfishItem from './components/AfishItem';
import './App.css';
import AppHeader from './components/AppHeader';
import afishs from './data/Afishs';
import React, { useEffect, useState } from "react";
import AppSearch from './components/AppSearch';


function App() {
    const [selectedAfish, setSelectedAfish] = useState(null);
    const [searchdAfish, setSearchAfish] = useState('');
    function onAfishOpenClick(theFish){
        setSelectedAfish(theFish);
    }
    function onAfishCloseClick(){
        setSelectedAfish(null);
    }

    
    const afishElements = afishs.filter((afish)=> {
        return afish.title.includes(searchdAfish);
    }).map((afish,index)=>{
        return <AfishItem key={index} afish={afish} onAfishClick={onAfishOpenClick}/>;
    });

    let afishPost = null;
    if (!!selectedAfish){
        afishPost = <AfishPost afish={selectedAfish} onBgClick={onAfishCloseClick}/>
    }

    return (
        <div className="app">
            <AppHeader/>
            <section className="app-section">
                <div className="app-container">
                    <AppSearch value={searchdAfish} onValueChange={setSearchAfish}/>
                    <div className="app-grid">
                        {afishElements}
                    </div>
                </div>
            </section>
            {afishPost}
        </div>
    );
}

export default App;
