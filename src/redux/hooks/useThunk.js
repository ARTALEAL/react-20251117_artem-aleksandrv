import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export function useThunk(thunk, arg) {
  const dispatch = useDispatch();

  useEffect(() => {
    const promise = dispatch(thunk(arg));

    return () => {
      promise.abort?.();
    };
  }, [dispatch, thunk, arg]);
}
