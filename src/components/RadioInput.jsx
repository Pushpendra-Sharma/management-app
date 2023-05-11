import React, {
  Fragment,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { RadioGroup } from '@atlaskit/radio';
import { AppContext } from '../contexts/app-context';
import { SET_GENDER_FILTER } from '../actions';

const RadioInput = ({ options }) => {
  const [onChangeResult, setOnChangeResult] = useState('');
  const { dispatch } = useContext(AppContext);

  const onChange = useCallback(event => {
    setOnChangeResult(event.currentTarget.value);
  }, []);

  useEffect(() => {
    dispatch({ type: SET_GENDER_FILTER, payload: onChangeResult });
  }, [onChangeResult, dispatch]);

  return (
    <Fragment>
      <h4 id='radiogroup-label'>Select Gender:</h4>
      <RadioGroup
        options={options}
        onChange={onChange}
        aria-labelledby='radiogroup-label'
      />
    </Fragment>
  );
};

export default RadioInput;
