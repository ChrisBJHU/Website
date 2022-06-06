import Home  from './Home';
import NavProvider from '../../nav/NavContext';

function Main() {
	return (
		<div className='appContainer' style = {{backgroundColor: 'white'}}>
			<NavProvider>
				<Home/>
			</NavProvider>
		</div>
	);
}

export default Main;