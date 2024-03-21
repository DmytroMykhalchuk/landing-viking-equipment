import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styles from './../styles.module.scss';
import { IconButton } from '@mui/material';
import cn from 'classnames';

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
    const leftArrowClasses = cn(styles.detailCarousel__leftArrow, Boolean(prevItem) ? '' : styles.disabled);
    const rightArrowClasses = cn(styles.detailCarousel__rightArrow, Boolean(nextItem) ? '' : styles.disabled);



    return (
        <>
            <div className={leftArrowClasses} onClick={onSlidePrev}>
                <IconButton aria-label="prev" color='primary' disabled={!Boolean(prevItem)} disableRipple disableTouchRipple>
                    <ArrowBackIosIcon />
                </IconButton>
                {prevItem && <ItemShort img={prevItem.img} title={prevItem.img} />}
            </div>
            <div className={rightArrowClasses} onClick={onSlideNext}>
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