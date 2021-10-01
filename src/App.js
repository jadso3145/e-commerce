import Header from './components/header/Header';
import './index.css'
import {HashRouter as Router} from "react-router-dom";
import Pages from './components/Pages';
import {DataProvider} from './context/DataProvider';
import Carrito from './components/carrito/Carrito';

function App() {
    return (
        <DataProvider>
            <div className="App">
                <Router>
                    <Header/>
                    <Carrito/>
                    <Pages/>
                </Router>
            </div>
        </DataProvider>
    );
}

export default App;
