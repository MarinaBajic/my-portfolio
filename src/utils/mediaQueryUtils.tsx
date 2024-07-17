import useMediaQuery from '@mui/material/useMediaQuery';

const MOBILE_MEDIA_QUERY = '(max-width: 833px)';

export const isMobile = () => {
	return useMediaQuery(MOBILE_MEDIA_QUERY);
};
