import { iState } from '../interfaces/store';

export const selectTheme = (state: iState) => state.theme;
export const selectUpdateTheme = (state: iState) => state.updateTheme;
