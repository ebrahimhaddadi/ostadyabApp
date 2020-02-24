/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App  from './App';
import {name as appName} from './app.json';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'

AppRegistry.registerComponent(appName, () => gestureHandlerRootHOC(App));



// test app
// import {AppRegistry} from 'react-native';
// import  Test from './Test';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => Test);
//App2
// import {AppRegistry} from 'react-native';
// import App2  from './App2';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App2);
