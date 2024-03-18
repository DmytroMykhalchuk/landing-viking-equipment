import Stack from '@mui/material/Stack';
import { AppLayout } from '../src/layout/AppLayout';
import { FullScreenLoader } from '../src/modules/Common/FullScreenLoader';
import { getIsFetching, getRedirectPath } from './redux/app/appSelector';
import { removeRedirect } from './redux/app/appReducer';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
import { ThemeWrapper } from '../src/modules/ui/ThemeWrapper';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

export const App = () => {
  const navigate = useNavigate();
  const dispatch: any = useDispatch();

  const redirectPath = useSelector(getRedirectPath);
  const isFetching = useSelector(getIsFetching);

  useEffect(() => {
    if (!redirectPath) return;

    dispatch(removeRedirect());
    navigate(redirectPath);

    // eslint-disable-next-line
  }, [redirectPath]);


  return (
    <ThemeWrapper>
      <Stack sx={{ bgcolor: 'background.default' }}>
        {isFetching && (<FullScreenLoader />)}
        <Routes>

          <Route path='/*' element={
            <Suspense fallback={<FullScreenLoader />}>
              <AppLayout />
            </Suspense>
          } />

        </Routes>
      </Stack>
    </ThemeWrapper>
  );
};

