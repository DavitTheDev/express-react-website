import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './css/global.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import About from './pages/About'
// import Home from './pages/Home'
import Search from './pages/Search'
import ViewProject from './pages/ViewProject'

const LOCAL_STORAGE_KEY = "mermisi.database";

export default function App() {

	const [database, setDatabase] = useState([])

	useEffect(() => {
		const storedData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
		if (storedData) setDatabase(storedData);
	}, [])

	useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(database))
    }, [database])

	useEffect(() => {
        fetch("/db.json")
        .then(res => res.json())
        .then((result) => { 
			setDatabase(prevData => result); 
		})
		
	}, [])


	// return <h1>It Works!</h1> /*
	return (
		<>
			<div id="exceptFooter">
				<Router>
					<Navbar />
					<div className="content">
						<Switch>
							<Route exact path="/"            > <Search database={database}/> </Route>
							<Route exact path="/about"       > <About/> </Route>
							<Route exact path="/home"        > <Search database={database}/> </Route>
							<Route exact path="/search"      > <Search database={database}/> </Route>
							<Route exact path="/project/:id" component={ViewProject}></Route>
						</Switch>
					</div>
				</Router>
			</div>
			<Footer />
		</>
	)
	// */

}
