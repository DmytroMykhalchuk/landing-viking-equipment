import { Stack, IconButton, Typography } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { ReactComponent as Rune } from './../../../assets/img/noun-rune-3458891.svg';
import styles from './../styles.module.scss';
import cn from 'classnames';

type HomeContentType = {
    onOpenDetail: () => void;
    isOpenedHomePage: boolean;
};

export const HomeContent: React.FC<HomeContentType> = ({ onOpenDetail, isOpenedHomePage }) => {

    return (
        <Stack className={cn(styles.homeContent,isOpenedHomePage?'':styles.unactive)} justifyContent={'center'} >
            <Stack flex={1} justifyContent={'center'}>
                <Stack direction={'row'} justifyContent={'center'} alignItems={'center'}>
                    <div className={styles.homeContent__leftArrow}>
                        <IconButton aria-label="open" onClick={onOpenDetail}>
                            <ArrowBackIosIcon />
                        </IconButton>
                    </div>
                    <Rune className={styles.rune} />
                    <div className={styles.homeContent__rightArrow}>
                        <IconButton aria-label="open" onClick={onOpenDetail}>
                            <ArrowForwardIosIcon />
                        </IconButton>
                    </div>
                </Stack>
                <Typography className={styles.homeContent__footer} variant="caption" textAlign={'center'}>
                    Rune created by Miroslava from the Noun Project
                </Typography>
            </Stack>
            <Stack className={styles.homeContent__footer} alignItems={'center'} justifyContent={'center'}>
                <IconButton className={styles.bottomArrow} aria-label="open" onClick={onOpenDetail}>
                    <ArrowForwardIosIcon />
                </IconButton>
            </Stack>
        </Stack>
    );
};