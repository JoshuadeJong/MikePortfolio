import {IconButton, Tooltip} from "@mui/material";
import YouTubeIcon from '@mui/icons-material/YouTube';

type Props = {
    url: string;
};

function YouTubeButton(props: Props) {
    const { url } = props;

    return (
        <Tooltip title="YouTube">
            <IconButton
                size="small"
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ 
                    color: '#FF0000',
                    border: '1px solid',
                    borderColor: '#FF0000',
                    '&:hover': { 
                        backgroundColor: 'rgba(255, 0, 0, 0.1)',
                        borderColor: '#CC0000'
                    }
                }}
            >
                <YouTubeIcon fontSize="small" />
            </IconButton>
        </Tooltip>
    );
}

export default YouTubeButton;
