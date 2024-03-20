import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import cn from 'classnames';
import styles from './../styles.module.scss';
import { Box, IconButton, Stack, Typography } from '@mui/material';
import { equipment } from '../../../redux/state';
import { useState } from 'react';
import { CarouselFooter } from './CarouselFooter';
import { BigCarouselControl } from './BigCarouselControl';
import { SmallCarouselControl } from './SmallCarouselControl';

type DetailsType = {
    isOpened: boolean;
};

export const Details: React.FC<DetailsType> = ({ isOpened }) => {
    const total = equipment.length;

    const [currentSlide, setCurrentSlide] = useState(0);
    const [slidesInRow, setSlidesInRow] = useState(4);
    const [targetView, setTargetView] = useState<null | number>(null);
    const [direction, setDirection] = useState('right' as 'right' | 'left');

    const onSlideNext = () => {
        setCurrentSlide((prev: number) => total / slidesInRow <= prev + 1 ? prev : prev + 1)
        direction !== 'right' && setDirection('right');
    };

    const onSlidePrev = () => {
        setCurrentSlide((prev: number) => 0 > prev - 1 ? 0 : prev - 1)
        direction !== 'left' && setDirection('left');
    };

    const onChoose = (id: number) => {
        setTargetView(targetView ? null : id);
        setCurrentSlide(id - 1)
        setSlidesInRow(1)
    };

    const onClose = () => {
        const newCurrentSlide = Math.ceil(currentSlide / 4) - 1;
        setTargetView(null);
        setSlidesInRow(4)
        setCurrentSlide(newCurrentSlide < 0 ? 0 : newCurrentSlide)
    };

    return (
        <Stack className={cn(styles.detailWrapper, targetView ? styles.fullView : '')}>
            <Stack className={styles.detailCarousel} direction={'row'} alignItems={'center'} >
                {
                    equipment.map((item, index) => (
                        <CarouselItem
                            key={index}
                            index={index}
                            isDirectionNext={direction === 'right'}
                            currentSlide={currentSlide}
                            item={item}
                            onChoose={() => onChoose(item.id)}
                            targetView={targetView}
                            slidesInRow={slidesInRow}
                        />
                    ))
                }
                <BigCarouselControl onSlideNext={onSlideNext} onSlidePrev={onSlidePrev} />
                <CarouselFooter currentSlide={currentSlide} total={total} onClose={onClose} />
            </Stack>
            <SmallCarouselControl onSlideNext={onSlideNext} onSlidePrev={onSlidePrev} />
        </Stack>
    );
};

type CarouselItemType = {
    index: number;
    currentSlide: number;
    slidesInRow?: number;
    isDirectionNext: boolean;
    item: {
        id: number;
        image: string;
        title: string;
        description: string;
        resource: string;
    };
    onChoose: () => void;
    targetView: null | number;
};

const CarouselItem: React.FC<CarouselItemType> = ({ currentSlide, index, slidesInRow = 4, isDirectionNext, item, onChoose, targetView }) => {
    const visibleRow = {
        from: currentSlide * slidesInRow,
        to: currentSlide * slidesInRow + slidesInRow,
    };

    const quantity = isDirectionNext ? index - visibleRow.from : visibleRow.to - index - 1;
    const transitionDelay = index > visibleRow.from && index < visibleRow.to ? `${75 * (quantity)}ms` : '';

    const transformGap = slidesInRow === 1 ? 0 : currentSlide * slidesInRow * 2;
    // const transformGap =  currentSlide * slidesInRow * 2;
    const transform = `translateX(calc(-${currentSlide * slidesInRow * 100}% - ${transformGap}em ))`;

    return (
        <Box className={cn(styles.detailCarousel__item)}
            sx={{
                transform,
                transitionDelay,
            }}
            onClick={onChoose}
        >
            <div className={cn(styles.content, targetView === item.id ? styles.fillable : '')}>
                <div className={styles.imageWrapper}>
                    <img src={item.image} alt={item.title} />
                </div>
                <Stack className={styles.description}>
                    Title
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos repudiandae provident ad vero. Dolorem inventore corrupti, aspernatur quaerat sit accusamus cupiditate doloribus velit. Voluptatibus sequi, blanditiis officiis ducimus consequuntur obcaecati.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos repudiandae provident ad vero. Dolorem inventore corrupti, aspernatur quaerat sit accusamus cupiditate doloribus velit. Voluptatibus sequi, blanditiis officiis ducimus consequuntur obcaecati.
                </Stack>
            </div>
        </Box>
    );
};