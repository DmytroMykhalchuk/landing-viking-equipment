import { Stack } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';

type SocialsType = {
};

export const Socials: React.FC<SocialsType> = ({ }) => {

    return (
        <Stack direction={'row'} spacing={1}>
            <a href='/'><GitHubIcon /></a>
        </Stack>
    );
};