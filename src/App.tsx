import Wrap from './Components/Wrap/Wrap'
import { persistor, store } from './StateManagement/Store'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'

function App() {
	return (
		<BrowserRouter>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<Wrap />
				</PersistGate>
			</Provider>
		</BrowserRouter>
	)
}

export default App
