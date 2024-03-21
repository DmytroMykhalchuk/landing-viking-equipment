import MenuIcon from '@mui/icons-material/Menu';
import styles from './../styles.module.scss';
import { HeaderTitle } from './HeaderTitle';
import { IconButton, Menu, MenuItem, Stack } from '@mui/material';
import { Socials } from './Socials';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

type HeaderType = {
    isHomePage: boolean;
};

export const Header: React.FC<HeaderType> = ({ isHomePage }) => {
    const navigate = useNavigate();

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const toggleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const onNavigate = (path: string) => {
        window.location.href = path;
    };

    const open = Boolean(anchorEl);

    return (
        <Stack
            className={styles.header}
            justifyContent={'space-between'}
            alignItems={'center'}
            direction={'row'}
        >
            <div>

                <IconButton
                    aria-label="open menu"
                    onClick={toggleMenu}
                    id='header-menu'
                >
                    <MenuIcon />
                </IconButton>
                <Menu
                    id="header-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={() => onNavigate('https://github.com/DmytroMykhalchuk/landing-viking-equipment')}>Github</MenuItem>
                    <MenuItem onClick={() => onNavigate('https://github.com/DmytroMykhalchuk/')}>CV</MenuItem>
                </Menu>
            </div>
            <HeaderTitle isHomePage={isHomePage} />
            <Socials />
        </Stack>
    );
};