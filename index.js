/**
 * @format
 */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);


// import React from 'react';
// import { AppRegistry } from 'react-native';
// import { Provider } from 'react-redux';
// import App from './App';
// import store from './redux/store';
// import { name as appName } from './app.json';

// const TodoListApp = () => (
//   <Provider store={store}>
//     <App />
//   </Provider>
// );

// AppRegistry.registerComponent(appName, () => TodoListApp);

// import React, { useEffect } from 'react';
// import { AppRegistry } from 'react-native';
// import { Provider } from 'react-redux';
// import App from './App';
// import store from './redux/store';
// import { name as appName } from './app.json';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { persistStore, persistReducer } from 'redux-persist';
// import { PersistGate } from 'redux-persist/integration/react';

// const persistConfig = {
//   key: 'root',
//   storage: AsyncStorage,
// };

// const persistedReducer = persistReducer(persistConfig, store);

// const TodoListApp = () => {
//   useEffect(() => {
//     const persistor = persistStore(persistedReducer);
//     return () => persistor.persist();
//   }, []);

//   return (
//     <Provider store={persistedReducer}>
//       <PersistGate loading={null} persistor={persistStore(persistedReducer)}>
//         <App />
//       </PersistGate>
//     </Provider>
//   );
// };

// AppRegistry.registerComponent(appName, () => TodoListApp);


// import React, { useEffect } from 'react';
// import { AppRegistry } from 'react-native';
// import { Provider } from 'react-redux';
// import App from './App';
// import store from './redux/store';
// import { name as appName } from './app.json';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { PersistGate } from 'redux-persist/integration/react';
// import { persistStore, persistReducer } from 'redux-persist';

// const persistConfig = {
//   key: 'root',
//   storage: AsyncStorage,
// };

// const persistedReducer = persistReducer(persistConfig, store);
// const persistor = persistStore(persistedReducer);

// const TodoListApp = () => {
//   useEffect(() => {
//     persistor.persist();
//   }, []);

//   return (
//     <Provider store={persistedReducer}>
//       <PersistGate loading={null} persistor={persistor}>
//         <App />
//       </PersistGate>
//     </Provider>
//   );
// };

// AppRegistry.registerComponent(appName, () => TodoListApp);

import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';
import { name as appName } from './app.json';

const TodoListApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

// Register the app
AppRegistry.registerComponent(appName, () => TodoListApp);

