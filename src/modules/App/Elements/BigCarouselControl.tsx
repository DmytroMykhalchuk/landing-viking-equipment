import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styles from './../styles.module.scss';
import { IconButton } from '@mui/material';

type BigCarouselControlType = {
    onSlidePrev: () => void;
    onSlideNext: () => void;
    nextItem?: {
        img: string;
        title: string;
    };
    prevItem?: {
        img: string;
        title: string;
    }
};

export const BigCarouselControl: React.FC<BigCarouselControlType> = ({ onSlideNext, onSlidePrev, nextItem, prevItem }) => {

    return (
        <>
            <div className={styles.detailCarousel__leftArrow} onClick={onSlidePrev}>
                <IconButton aria-label="prev" color='primary' disabled={!Boolean(prevItem)} disableRipple disableTouchRipple>
                    <ArrowBackIosIcon />
                </IconButton>
                {prevItem && <ItemShort img={prevItem.img} title={prevItem.img} />}
            </div>
            <div className={styles.detailCarousel__rightArrow} onClick={onSlideNext}>
                <IconButton aria-label="prev" color='primary' disabled={!Boolean(nextItem)} disableRipple disableTouchRipple>
                    <ArrowForwardIosIcon />
                </IconButton>
                {nextItem && <ItemShort img={nextItem.img} title={nextItem.img} />}
            </div>
        </>
    );
};

type ItemShortType = {
    img: string;
    title: string;
};

const ItemShort: React.FC<ItemShortType> = ({ img, title }) => {

    return (
        <div className={styles.shortItem}>
            <img src={img} alt={title} />
        </div>
    );
};