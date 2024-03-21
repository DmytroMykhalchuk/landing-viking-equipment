import Typography from '@mui/material/Typography';
import styles from './../styles.module.scss';
import { useEffect } from 'react';
import cn from 'classnames';
import { useNavigate } from 'react-router-dom';

type HeaderTitleType = {
    isHomePage: boolean;
};

export const HeaderTitle: React.FC<HeaderTitleType> = ({ isHomePage }) => {
    const navigate = useNavigate();

    useEffect(() => {
    }, []);

    const onNavigate = () => {
        navigate('/');
    };

    return (
        <div className={cn(styles.titleWrapper, isHomePage ? styles.active : '')} onClick={onNavigate}>
            <Typography className={styles.titleWrapper__mainTitle} component={'h1'}>Vikings equipment</Typography>
        </div>
    );
};