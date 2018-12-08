import {createStore} from 'redux';
import reduce from '../reduces/reduce'

const store = createStore(reduce);

export default store;