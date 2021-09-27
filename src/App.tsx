import React from 'react';
import './App.css';

function App() {
    const handleFileInput = (ev: any) => {
        console.log(ev.target.files[0])
    }
    return (
        <div className="App">
            <h3>Upload a file here</h3>
            {/*<div className="InputContainer">*/}

            {/*    <input onInput={handleFileInput} type={'file'}/>*/}
            {/*</div>*/}
            <div className="Viewer">
                <div className="Left">
                    <h4>Left Preview</h4>
                    <div className="InputContainer">
                        <input id={'Left-Upload'} onInput={handleFileInput} type={'file'}/>
                    </div>
                    <textarea className={'TextArea'} defaultValue={'XML Preview'}/>
                </div>
                <div className="Right">
                    <h4>Left Right</h4>
                    <div className="InputContainer">
                        <input id={'Right-Upload'} onInput={handleFileInput} type={'file'}/>
                    </div>
                    <textarea className={'TextArea'} defaultValue={'XML Preview'}/>
                </div>
            </div>
        </div>
    );
}

export default App;
