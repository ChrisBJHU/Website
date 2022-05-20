import { Home } from '.';
import NavProvider from '../../nav/NavContext';

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