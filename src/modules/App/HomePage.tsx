import { Button, Container, Stack, SxProps, Typography } from '@mui/material';
import { getThemeMode } from '../../redux/app/appSelector';
import { toggleThemeMode } from '../../redux/app/appReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.scss';
import { Header } from './Elements/Header';
import { HomeContent } from './Elements/HomeContent';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

type HomePageType = {
};

export const HomePage: React.FC<HomePageType> = ({ }) => {
    const dispatch: any = useDispatch();
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const [isOpenedHomePage, setIsOpenedHomePage] = useState(true);

    useEffect(() => {
        if (pathname === '/detail') {
            isOpenedHomePage && setIsOpenedHomePage(false);
        } else {
            isOpenedHomePage || setIsOpenedHomePage(true);
        }
    }, [pathname]);

    const onOpenDetail = () => {
        setIsOpenedHomePage(false);
        navigate('/detail')
    };


    return (
        <Stack className={styles.mainWrapper} sx={propsStyles.stack} justifyContent={'center'}>
            <Container className={styles.container} maxWidth='lg' >
                <Header isHomePage={isOpenedHomePage} />
                <HomeContent onOpenDetail={onOpenDetail} isOpenedHomePage={isOpenedHomePage}/>
            </Container>
        </Stack>
    );
};

const propsStyles = {
    stack: {
        color: 'fpage.main',
    } as SxProps,
    container: {
        flex: 1,
    } as SxProps,
};