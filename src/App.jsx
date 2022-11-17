import './App.css';
import data from './data';
import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import carIcon from './assets/car-icon.svg';

const icon = new Icon({
	iconUrl: carIcon,
	iconRetinaUrl: carIcon,
	iconSize: [30, 30],
	shadowSize: [30, 30],
	iconAnchor: [0, 0],
	shadowAnchor: [4, 62],
	popupAnchor: [16, -3],
});

function App() {
	const [search, setSearch] = useState('');
	const [active, setActive] = useState(undefined);
	const [map, setMap] = useState(null);

	const initial = [47.7852, 8.1234];

	const displayMarkers = data.map(({ latitude, longitude, id, name }) => {
		return (
			<Marker key={id} position={[latitude, longitude]} icon={icon}>
				<Popup>{name}</Popup>
			</Marker>
		);
	});

	const result = data.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));

	const clickHandler = (item) => {
		setActive(item);
		map.flyTo([item.latitude, item.longitude], 10);
	};

	return (
		<div id='map'>
			<MapContainer center={initial} zoom={5} scrollWheelZoom={false} ref={setMap}>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
				/>
				{displayMarkers}
			</MapContainer>
			<aside id='sidebar'>
				<h1>Объекты</h1>
				<form id='form'>
					<input
						type='text'
						placeholder='Поиск'
						value={search}
						onChange={(e) => setSearch(e.target.value)}
					/>
				</form>
				<ul id='list'>
					{result.map((item) => {
						return (
							<li
								key={item.id}
								onClick={() => clickHandler(item)}
								className={active?.id === item.id ? 'active' : ''}>
								{item.name}
							</li>
						);
					})}
				</ul>
			</aside>
		</div>
	);
}

export default App;
