import './intro.scss'
import { init } from 'ityped'
import { useEffect, useRef } from 'react'

export default function Intro() {
	const textRef = useRef()
	useEffect(() => {
		init(textRef.current, {
			showCursor: true,
			backDelay: 1500,
			backSpeed: 60,
			strings: ['Developer', 'Designer', 'Engineer'],
		})
	}, [])

	return (
		<div className='intro' id='intro'>
			<div className='left'>
				<div className='imageContainer'>
					<img src='asset/man2.png' alt='' />
				</div>
			</div>
			<div className='right'>
				<div className='wrapper'>
					<h2>Hello there, I'M</h2>
					<h1>Rishav</h1>
					<h3>
						<span ref={textRef}></span>
					</h3>
				</div>
				<a href='#portfolio'>
					<img src='asset/down.png' alt=''></img>
				</a>
			</div>
		</div>
	)
}
