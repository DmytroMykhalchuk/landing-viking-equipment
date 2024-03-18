import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Menu, MenuItem, Stack } from '@mui/material';
import { useState } from 'react';
import { HeaderTitle } from './HeaderTitle';
import { Socials } from './Socials';

type HeaderType = {
    isHomePage: boolean;
};

export const Header: React.FC<HeaderType> = ({ isHomePage }) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const toggleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <Stack
            justifyContent={'space-between'}
            alignItems={'center'}
            direction={'row'}
            width={'100%'}
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
                    <MenuItem onClick={handleClose}>Github</MenuItem>
                    <MenuItem onClick={handleClose}>CV</MenuItem>
                </Menu>
            </div>
            <HeaderTitle isHomePage={isHomePage} />

            <Socials />
        </Stack>
    );
};