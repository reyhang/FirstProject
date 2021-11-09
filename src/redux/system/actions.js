import {
    TOGGLE_LOADER,
    USER_LOGOUT,
    HIDE_LOADER,
    SET_THEME,
    SET_LANGUAGE,
  } from './actionTypes';


//Loader açar  
export function toggleLoader(){
    return {
        type: TOGGLE_LOADER,
    }
}

//Loader kapatır.
export function hideLoader(){
    return {
        type: HIDE_LOADER,
    }
}

//Sistemin temasını set eder.
export function setTheme(){
    return {
        type: SET_THEME,payload    }
}


