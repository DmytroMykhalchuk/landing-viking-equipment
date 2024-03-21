import cn from 'classnames';
import styles from './../styles.module.scss';
import { BigCarouselControl } from './BigCarouselControl';
import { Box, Stack, Typography, Button, SxProps, useMediaQuery } from '@mui/material';
import { CarouselFooter } from './CarouselFooter';
import { equipment } from '../../../redux/state';
import { SmallCarouselControl } from './SmallCarouselControl';
import { useEffect, useState } from 'react';

type DetailsType = {
    isOpened: boolean;
};

export const Details: React.FC<DetailsType> = ({ isOpened }) => {

    const isMobile = useMediaQuery('(max-width:600px)');
    const isTablet = useMediaQuery('(max-width:900px)');

    const [currentSlide, setCurrentSlide] = useState(0);
    const [slidesInRow, setSlidesInRow] = useState(4);
    const [total, setTotal] = useState(equipment.length);
    const [targetView, setTargetView] = useState<null | number>(null);
    const [direction, setDirection] = useState('right' as 'right' | 'left');

    useEffect(() => {
        checkResponseveSlides();
    }, [isMobile, isTablet]);

    useEffect(() => {
        setTargetView(null);
        setCurrentSlide(0);
        checkResponseveSlides();
    }, [isOpened]);

    const checkResponseveSlides = () => {
        if (isMobile) {
            setSlidesInRow(1);
        } else if (isTablet) {
            setSlidesInRow(2);
        } else {
            setSlidesInRow(4);
        }

        setCurrentSlide(0);
    }

    const onSlideNext = () => {
        setCurrentSlide((prev: number) => total / slidesInRow <= prev + 1 ? prev : prev + 1)
        direction !== 'right' && setDirection('right');
    };

    const onSlidePrev = () => {
        setCurrentSlide((prev: number) => 0 > prev - 1 ? 0 : prev - 1)
        direction !== 'left' && setDirection('left');
    };

    const onChoose = (id: number) => {
        setTargetView(id);
        setCurrentSlide(id - 1)
        setSlidesInRow(1)
    };

    const onClose = () => {
        const newCurrentSlide = Math.ceil(currentSlide / slidesInRow) - 1;
        setTargetView(null);
        checkResponseveSlides();
        setCurrentSlide(newCurrentSlide < 0 ? 0 : newCurrentSlide)
    };

    const nextItem = slidesInRow === 1
        ? total - 1 >= currentSlide + 1 ? { img: equipment[currentSlide + 1].image, title: equipment[currentSlide + 1].title } : undefined
        : undefined;

    const prevItem = slidesInRow === 1
        ? 0 <= currentSlide - 1 ? { img: equipment[currentSlide - 1].image, title: equipment[currentSlide - 1].title } : undefined
        : undefined;

    return (
        <Stack className={cn(styles.detailWrapper, targetView ? styles.fullView : '', styles.detailPage, isOpened ? '' : styles.active)}>
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
                            isMobile={isMobile}
                            isTablet={isTablet}
                        />
                    ))
                }
                <BigCarouselControl
                    onSlideNext={onSlideNext}
                    onSlidePrev={onSlidePrev}
                    nextItem={nextItem}
                    prevItem={prevItem}
                />
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
    isMobile: boolean;
    isTablet: boolean;
};

const CarouselItem: React.FC<CarouselItemType> = ({ currentSlide, index, slidesInRow = 4, isDirectionNext, item, onChoose, targetView }) => {
    const visibleRow = {
        from: currentSlide * slidesInRow,
        to: currentSlide * slidesInRow + slidesInRow,
    };

    const getActiveClass = () => {
        return index === currentSlide
            ? ''
            : styles.animateNext

        if (slidesInRow !== 1)
            return '';

        if (isDirectionNext) {
            return index === currentSlide
                ? ''
                : index === currentSlide + 1
                    ? ''
                    : ''
        } else {
            return index === currentSlide
                ? ''
                : index === currentSlide - 1
                    ? ''
                    : ''
        }
    };

    const quantity = isDirectionNext ? index - visibleRow.from : visibleRow.to - index;
    const transitionDelay = index >= visibleRow.from && index < visibleRow.to ? `${75 * (quantity)}ms` : '';

    const transformGap = slidesInRow === 1
        ? index * 1
        : slidesInRow === 2 ?
            currentSlide * slidesInRow * 1
            : slidesInRow === 4
                ? currentSlide * slidesInRow * 2
                : 1;

    const transform = `translateX(calc(-${currentSlide * slidesInRow * 100}% - ${transformGap}em ))`;

    return (
        <Box className={cn(styles.detailCarousel__item, getActiveClass())}
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
                <Stack className={styles.description} spacing={2}>
                    <Typography variant="h4" color="primary">{item.title}</Typography>
                    <Typography variant="body1" >{item.description}</Typography>

                    <Button variant="text" color="primary" sx={styleProps.buttonLink} href={item.resource}>
                        Детальніше
                    </Button>
                </Stack>
            </div>
        </Box>
    );
};

const styleProps = {
    buttonLink: {
        textTransform: 'none',
        p: 1,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'primary.main',
        color: 'primary.main',

    } as SxProps,
}