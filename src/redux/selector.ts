import {createSelector} from '@reduxjs/toolkit';
import {type RootState} from './store';

const selectorGlobal = (state: RootState) => state.list;

const selectorSpecificById = createSelector(
  [selectorGlobal, (_, objectId) => objectId],
  (objectArray, objectId) => {
    return (
      objectArray.find(obj => obj.id === objectId) || {
        title: '',
        description: '',
      }
    );
  },
);

export {selectorGlobal, selectorSpecificById};
