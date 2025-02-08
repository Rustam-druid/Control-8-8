
import Toolbar from "./components/Toolbar/Toolbar.tsx";
import {Route, Routes} from "react-router-dom";
import Quotes from "./Containers/Quotes/Quotes.tsx";
import NewQuote from "./Containers/NewQuote/NewQuote.tsx";
import EditQuote from "./Containers/EditQuote/EditQuote.tsx";

const App = () => {


    return (
        <>
            <div className="container border border-black border-3 p-0" style={{width: 900}}>
                <header className="mb-4 bg-dark-subtle border-bottom border-black border-3"
                        style={{height: 60}}></header>
                <div className="top">
                    <Toolbar/>
                </div>
                <main className="container">
                    <Routes>
                        <Route path="/" element={(<Quotes/>)}/>
                        <Route path="/Quotes" element={(<Quotes/>)}/>
                        <Route path="/NewQuote" element={(<NewQuote />)}/>
                        <Route path="*" element={(<h1>Not page found</h1>)}/>
                    </Routes>
                </main>
                <footer className="mt-4 bg-dark-subtle border-top border-black border-3"
                        style={{height: 60}}></footer>
            </div>

        </>
    );
};

export default App;