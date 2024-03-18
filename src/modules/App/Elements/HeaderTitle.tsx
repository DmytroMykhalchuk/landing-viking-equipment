import Typography from '@mui/material/Typography';
import styles from './../styles.module.scss';
import { useEffect } from 'react';
import cn from 'classnames';

type HeaderTitleType = {
    isHomePage: boolean;
};

export const HeaderTitle: React.FC<HeaderTitleType> = ({ isHomePage }) => {
    useEffect(() => {
        const addClassActive = () => {
            console.log(2)
        }
        window.addEventListener('scroll', addClassActive);

    }, []);

    return (
        <>
            <div className={cn(styles.titleWrapper, isHomePage ? styles.active : '')}>
                <Typography className={styles.titleWrapper__mainTitle} component={'h1'}>Vikings equipment</Typography>
                <Typography className={styles.titleWrapper__subtitle} component={'h3'}>Dev Dmytro</Typography>
            </div>
        </>
    );
};