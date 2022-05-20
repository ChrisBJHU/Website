import { Nav } from '../../nav';
import { Home } from '../../pages/Jonathan';
import NavProvider from '../../context/NavContext';

function HomeTest() {
	return (
		<div className='appContainer'>
			<NavProvider>
				<Nav />
				<Home />
			</NavProvider>
		</div>
	);
}

export default HomeTest;