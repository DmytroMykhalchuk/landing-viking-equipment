import styles from './styles.module.scss';
import { CircularProgress, Stack } from '@mui/material';

type FullScreenLoaderType = {
};

export const FullScreenLoader: React.FC<FullScreenLoaderType> = ({ }) => (
    <Stack className={styles.fullScreenLoader} alignItems={'center'} justifyContent={'center'}>
        <CircularProgress color="secondary" />
    </Stack>
);