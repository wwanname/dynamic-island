import { useContext } from 'react';
import { StateContext } from './ToasterType';

export const useStateContext = () => {
    const context = useContext(StateContext);
    if (!context) {
      throw new Error('useStateContext must be used within a StateProvider');
    }
    return context;
};