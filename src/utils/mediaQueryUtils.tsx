import useMediaQuery from '@mui/material/useMediaQuery';

const LARGE_MEDIA_QUERY = '(min-width: 1440px)';
const SMALL_MEDIA_QUERY = '(max-width: 768px)';

export const isSmallScreen = () => {
	return useMediaQuery(SMALL_MEDIA_QUERY);
};

export const isLargeScreen = () => {
	return useMediaQuery(LARGE_MEDIA_QUERY);
};
