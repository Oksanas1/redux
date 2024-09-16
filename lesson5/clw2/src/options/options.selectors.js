import { createSelector } from 'reselect';

export const optionsListSelectors = state => state.optionsList;
export const selectedIdsSelectors = state => state.selected;

export const selectedOptionsSelector = createSelector(
  [optionsListSelectors, selectedIdsSelectors],
  (allOptionsList, selectedId) => allOptionsList.filter(option => selectedId.includes(option.id)),
);

export const availableOptionsSelector = createSelector(
  [optionsListSelectors, selectedIdsSelectors],
  (allOptionsList, selectedId) => allOptionsList.filter(option => !selectedId.includes(option.id)),
);