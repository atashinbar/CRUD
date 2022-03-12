import { applyMiddleware, createStore } from 'redux'
import { rootReducer } from './Reducers'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'

const persistConfig = {
	key: 'root',
	storage
}

const persistedReducer = persistReducer<any, any>(persistConfig, rootReducer)

export const store = createStore(persistedReducer, applyMiddleware(thunk))
export const persistor = persistStore(store)
