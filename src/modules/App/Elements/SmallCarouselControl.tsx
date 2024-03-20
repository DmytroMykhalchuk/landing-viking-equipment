import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styles from './../styles.module.scss';
import { IconButton, Stack } from '@mui/material';

type SmallCarouselControlType = {
    onSlidePrev: () => void;
    onSlideNext: () => void;
};

export const SmallCarouselControl: React.FC<SmallCarouselControlType> = ({ onSlideNext, onSlidePrev }) => {

    return (
        <div className={styles.detailWrapper__control}>
            <Stack spacing={1} direction={'row'}>
                <IconButton aria-label="prev" onClick={onSlidePrev} color='primary'>
                    <ArrowBackIosIcon />
                </IconButton>
                <IconButton aria-label="prev" onClick={onSlideNext} color='primary'>
                    <ArrowForwardIosIcon />
                </IconButton>
            </Stack>
        </div>
    );
};