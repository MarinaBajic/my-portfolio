import { useEffect, useState } from 'react';
import styles from './Blob.module.scss';

const Blob = () => {
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			setMousePosition({ x: e.clientX, y: e.clientY });
		};

		window.addEventListener('mousemove', handleMouseMove);

		const interval = setInterval(() => {
			setPosition((prevPosition) => ({
				x: prevPosition.x + (mousePosition.x - prevPosition.x) * 0.1,
				y: prevPosition.y + (mousePosition.y - prevPosition.y) * 0.1,
			}));
		}, 10);

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
			clearInterval(interval);
		};
	}, [mousePosition]);

	return (
		<div
			className={styles.blob}
			style={{
				top: position.y - 75,
				left: position.x - 75,
			}}
		></div>
	);
};

export default Blob;
