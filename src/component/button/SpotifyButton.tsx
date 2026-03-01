import {IconButton, Tooltip} from "@mui/material";
import AudiotrackIcon from '@mui/icons-material/Audiotrack';

type Props = {
    url: string;
};

function SpotifyButton(props: Props) {
    const { url } = props;

    return (
        <Tooltip title="Spotify">
            <IconButton
                size="small"
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ 
                    color: '#1DB954',
                    border: '1px solid',
                    borderColor: '#1DB954',
                    '&:hover': { 
                        backgroundColor: 'rgba(29, 185, 84, 0.1)',
                        borderColor: '#1AA34A'
                    }
                }}
            >
                <AudiotrackIcon fontSize="small" />
            </IconButton>
        </Tooltip>
    );
}

export default SpotifyButton;
