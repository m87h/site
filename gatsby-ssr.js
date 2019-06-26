import React from 'react';

export const onRenderBody = ({ setHeadComponents }) => {
	setHeadComponents([
		<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
	]);
};
