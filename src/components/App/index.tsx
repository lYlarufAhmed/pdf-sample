import React from 'react';
import './styles.css';
import Previewer from "../Previewer";

function App() {
    const handleFileInput = (ev: any) =>  {
        console.log(ev.target.files[0])
    }
    return (
        <div className="App">
            <h3>Upload a file here</h3>
            <div className="Viewer">
                <Previewer className={'Left'} handleFileInput={handleFileInput}/>
                <Previewer className={'Left'} handleFileInput={handleFileInput}/>
            </div>
        </div>
    );
}

export default App;
