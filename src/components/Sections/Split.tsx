import {FC, memo} from 'react';
import {useEffect} from 'react';
import Link from 'next/link'

const Split: FC = memo(() => {

    useEffect(() => {
			const left = document.querySelector(".left");
			const right = document.querySelector(".right");
			const container = document.querySelector(".ele");
			left.addEventListener("mouseenter", () => {
				container.classList.add("hover-left");
			});
			left.addEventListener("mouseleave", () => {
				container.classList.remove("hover-left");
			});
			right.addEventListener("mouseenter", () => {
				container.classList.add("hover-right");
			});
			right.addEventListener("mouseleave", () => {
				container.classList.remove("hover-right");
			});
		}, []);



    return (
			<div className="split ele" style ={{width: '100%'}}>
        <div className="split left">
          <h1 className='splitH1'>Christian Bakhit</h1>
					<Link href='/Christian'>
						<button className='splitButton'>
								<a className='splitLink'>Learn About Me!</a>
						</button>
					</Link>
        </div>
        <div className="split right">
          <h1 className='splitH1'>Jonathan Bakhit</h1>
					<Link href='/Jonathan'>
						<button className='splitButton'>
								<a className='splitLink'>Learn About Me!</a>
						</button>
					</Link>
      
        </div>
      </div>
    );
});



Split.displayName = 'Split';
export default Split;