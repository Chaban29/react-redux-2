import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { globalActions } from '../redux/actionCreator/actionsCreators';

export const useAction = () => {
  const dispatch = useDispatch();
  return bindActionCreators(globalActions, dispatch);
};
