import styles from './../styles.module.scss';
import { Box, Stack, Typography, IconButton, Button } from '@mui/material';
import BurstModeIcon from '@mui/icons-material/BurstMode';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';

type CarouselFooterType = {
    currentSlide: number;
    total: number;
    onClose: () => void;

};

export const CarouselFooter: React.FC<CarouselFooterType> = ({ currentSlide, total, onClose }) => {

    const currentLabel = (currentSlide + 1).toString().padStart(2, '0');
    const totalLabel = total.toString().padStart(2, '0');

    return (
        <div className={styles.detailCarousel__footer}>
            <div className={styles.row}>
                <Button variant="text" color="primary" onClick={onClose}>
                    <Stack spacing={1} direction={'row'}>
                        <KeyboardReturnIcon className={styles.icon} />
                        <BurstModeIcon className={styles.icon} />
                    </Stack>
                </Button>
                <Stack direction={'row'} alignItems={'flex-end'} sx={{ color: 'primary.main' }}>
                    <Typography variant="h4" lineHeight={1}>{currentLabel}</Typography>
                    <Typography variant="body1">/{totalLabel}</Typography>
                </Stack>
            </div>
        </div>
    );
};