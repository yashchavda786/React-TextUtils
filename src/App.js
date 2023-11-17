import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import { useState } from 'react';
import TextArea from './components/TextArea';
import Alert from './components/Alert';

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
let name = "Yash";
function App() {

    const [mode, setMode] = useState('light');
    const [alert, setAlert] = useState(null);
    const [bgColorClass, setBGColorClass] = useState('light');

    const showAlert = (message, type) => {
        setAlert({
            message: message,
            type: type
        });
        setTimeout(() => {
            setAlert(null);
        }, 1000)
    }
    const changeMode = (bgColorClass) => {
        if (mode === 'dark') {
            setMode('light');
            document.body.style.backgroundColor = 'white';
            document.body.style.color = 'black';
            setBGColorClass('light');
            showAlert("Light Mode Has been enabled", 'success');
            document.title = "TextUtils - Light Mode";
        } else {
            setMode('dark');
            document.body.style.backgroundColor = 'black';
            document.body.style.color = 'white';
            setBGColorClass('dark');
            showAlert("Dark Mode Has been enabled", 'success');
            document.title = "TextUtils - Dark Mode";
        }

    }
    return (
        <>
            {/* <Router>
                
                <Navbar title={name} mode={mode} changeMode={changeMode} bgColorClass={bgColorClass} setBGColorClass={setBGColorClass} />
                <Alert alert={alert} />                    
                <Routes>

                    <Route exact path="/" element={<TextArea showAlert={showAlert} title="Enter Text" mode={mode} bgColorClass={bgColorClass} />}/>
                    <Route exact path ="/about" element={<About />}/>
                </Routes>
                
            </Router> */}
            <Navbar title={name} mode={mode} changeMode={changeMode} bgColorClass={bgColorClass} setBGColorClass={setBGColorClass} />
            <Alert alert={alert} />
            <TextArea showAlert={showAlert} title="Enter Text" mode={mode} bgColorClass={bgColorClass} />
        </>
    );
}

export default App;