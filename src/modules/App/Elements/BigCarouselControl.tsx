import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styles from './../styles.module.scss';
import { IconButton } from '@mui/material';

type BigCarouselControlType = {
    onSlidePrev: () => void;
    onSlideNext: () => void;
};

export const BigCarouselControl: React.FC<BigCarouselControlType> = ({ onSlideNext, onSlidePrev }) => {

    return (
        <>
            <div className={styles.detailCarousel__leftArrow}>
                <IconButton aria-label="prev" onClick={onSlidePrev} color='primary'>
                    <ArrowBackIosIcon />
                </IconButton>
            </div>
            <div className={styles.detailCarousel__rightArrow}>
                <IconButton aria-label="prev" onClick={onSlideNext} color='primary'>
                    <ArrowForwardIosIcon />
                </IconButton>
            </div>
        </>
    );
};