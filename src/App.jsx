import './App.css';

function App() {
	return (
		<div className='App'>
			<div id='map'>
				<aside id='sidebar'>
					<h1>Объекты</h1>
					<form>
						<input type='text' placeholder='Поиск' />
					</form>
					<ul id='list'>
						<li>Item 1</li>
						<li>Item 2</li>
						<li>Item 3</li>
						<li>Item 4</li>
						<li>Item 5</li>
					</ul>
				</aside>
			</div>
		</div>
	);
}

export default App;
