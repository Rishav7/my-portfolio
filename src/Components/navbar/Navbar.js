import './navbar.scss'
import PersonIcon from '@material-ui/icons/Person'
import EmailIcon from '@material-ui/icons/Email'
export default function navbar({ menuOpen, setMenuOpen }) {
	return (
		<div className={'navbar ' + (menuOpen && 'active')}>
			<div className='wrapper'>
				<div className='left'>
					<a href='#intro' className='logo'>
						rishav.
					</a>

					<div className='itemContainer'>
						<PersonIcon className='icon' />
						<span>+91 7259232381</span>
					</div>
					<div className='itemContainer'>
						<EmailIcon className='icon' />
						<span>rajrishav381.rr@gmail.com</span>
					</div>
				</div>
				<div className='right'>
					<div className='hamburgerMenu' onClick={() => setMenuOpen(!menuOpen)}>
						<span className='line1'></span>
						<span className='line2'></span>
						<span className='line3'></span>
					</div>
				</div>
			</div>
		</div>
	)
}
