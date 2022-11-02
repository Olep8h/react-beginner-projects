import React from 'react';
import './index.scss';

function App() {
    const [open, setOpen] = React.useState(false);
    return (
        <div className="App">
            <button onClick={() => setOpen(true)} className="open-modal-btn">✨ Open window</button>
            {open && (
                <div className="overlay">
                    <div className="modal">
                        <svg onClick={() => setOpen(false)} height="200" viewBox="0 0 200 200" width="200">
                            <title/>
                            <path
                                d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z"/>
                        </svg>
                        <img src="https://media.tenor.com/q9YVSNL8KtgAAAAd/uberdance1-%D1%83%D0%B1%D0%B5%D1%80%D0%BC%D0%B0%D1%80%D0%B3%D0%B8%D0%BD%D0%B0%D0%BB.gif"/>
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;

