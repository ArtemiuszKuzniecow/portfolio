import { RootStore } from "./rootReducer";
export const getIsCollapsedSelector = () => (state: RootStore) =>
  state.main.isNavbarCollapsed;
export const getLanguageSelector = () => (state: RootStore) =>
  state.main.language;
