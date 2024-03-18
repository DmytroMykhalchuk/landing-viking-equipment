import { AppStateType, InferActionsTypes } from '../store';
import { darkMode, lightMode } from '../../../src/constants/layoutConstants';
import { Dispatch } from 'redux';
import { themeModeKey } from '../../constants/reduxConstants';
import { ThemeModeType } from './appTypes';
import { ThunkAction } from 'redux-thunk';

const TOGGLE_FATCHING = 'app/TOGGLE_FATCHING';
const TOGGLE_THEME_MODE = 'app/TOGGLE_THEME_MODE';

const REDIRECT_TO = 'app/REDIRECT_TO';

const initialState = {
   isFetching: false,
   redirect: '',
   themeMode: (localStorage.getItem('themeMode') || 'light') as ThemeModeType,
};

type StateType = typeof initialState;
const appReducer = (state = initialState, action: ActionsTypes): StateType => {
   switch (action.type) {
      case TOGGLE_FATCHING: {
         return {
            ...state,
            isFetching: !state.isFetching,
         };
      }

      case REDIRECT_TO: {
         return {
            ...state,
            redirect: action.path,
         };
      }

      case TOGGLE_THEME_MODE: {
         return {
            ...state,
            themeMode: action.currentTheme === darkMode ? lightMode : darkMode,
         };
      }

      default: return state;
   }
}

export type ActionsTypes = InferActionsTypes<typeof actions>;
export type DispatchType = Dispatch<ActionsTypes>;

const actions = {
   toggleFetching: () => { return { type: TOGGLE_FATCHING } as const },
   setRedirect: (path: string) => { return { type: REDIRECT_TO, path } as const },
   toggleThemeMode: (currentTheme: ThemeModeType) => { return { type: TOGGLE_THEME_MODE, currentTheme } as const },
};

type ThunksTypes = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>;

export const toggleFetchingApp = (): ThunksTypes => {
   return async (dispatch) => {
      dispatch(actions.toggleFetching());
   };
};

export const makeRedirect = (path: string): ThunksTypes => {
   return async (dispatch) => {
      dispatch(actions.setRedirect(path));
   };
};

export const removeRedirect = (): ThunksTypes => {
   return async (dispatch) => {
      dispatch(actions.setRedirect(''));
   };
};

export const toggleThemeMode = (currentThemeMode: ThemeModeType): ThunksTypes => {
   return async (dispatch) => {
      const targetTheme = currentThemeMode === darkMode ? lightMode : darkMode;

      localStorage.setItem(themeModeKey, targetTheme);

      dispatch(actions.toggleThemeMode(currentThemeMode));
   };
};

export default appReducer;