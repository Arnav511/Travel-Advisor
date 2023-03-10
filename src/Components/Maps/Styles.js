import { makeStyles } from "tss-react/mui";

export default makeStyles(() => ({
    paper: {
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'Center',
        width: '100px',
    },
    mapContainer: {
        height: '100%',
        width: '100%',
    },
    markerContainer: {
        position: 'absolute',
        transform: 'translate(-50%, -50%)',
        zIndex: 1,
        '&:hover': { zIndex: 2 },
    },
    pointer: {
        cursor: 'pointer',
    },
}));