import React from 'react';
import ShowsList from './ShowsList';
import SelectedShow from './SelectedShow';
import './App.css'

const App = () => {

    return (
        <div className="app">
            <ShowsList />
            <SelectedShow />
        </div>
    );
};


export default App;