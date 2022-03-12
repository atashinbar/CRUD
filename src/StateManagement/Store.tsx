import { createStore } from 'redux'
import { rootReducer } from './Reducers'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
	key: 'root',
	storage
	// blacklist: ['agenda']
}

const persistedReducer = persistReducer<any, any>(persistConfig, rootReducer)

export const store = createStore(persistedReducer)
export const persistor = persistStore(store)
