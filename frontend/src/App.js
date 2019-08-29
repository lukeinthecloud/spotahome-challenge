import React from 'react';

import AppRouter      from './Router';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { initialize } from './services/bootstrap.service';

initialize();

function App() {
	return (
		<AppRouter/>
	);
}

export default App;
