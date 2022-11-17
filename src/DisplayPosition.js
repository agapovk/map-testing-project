import { useState, useCallback, useEffect } from 'react';

function DisplayPosition({ map }) {
	const [position, setPosition] = useState(() => map.getCenter());

	const onClick = useCallback(() => {
		map.setView(center, zoom);
	}, [map]);

	const onMove = useCallback(() => {
		setPosition(map.getCenter());
	}, [map]);

	useEffect(() => {
		map.on('move', onMove);
		return () => {
			map.off('move', onMove);
		};
	}, [map, onMove]);

	return null;
}

export default DisplayPosition;
