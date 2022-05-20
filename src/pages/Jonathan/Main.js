import { Nav } from '../../nav';
import { Home } from '.';
import NavProvider from '../../context/NavContext';

function HomeTest() {
	return (
		<div className='appContainer'>
			<NavProvider>
				<Home />
			</NavProvider>
		</div>
	);
}

export default HomeTest;