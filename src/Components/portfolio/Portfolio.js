import React, { useEffect, useState } from 'react'
import './portfolio.scss'
import {
	featuredPortfolio,
	webPortfolio,
	mobilePortfolio,
	designPortfolio,
	contentPortfolio,
} from '../../data.js'

import PortfolioList from './../portfolioList/PortfolioList'

export default function Portfolio() {
	const [selected, setSelected] = useState('feature')
	const [data, setData] = useState([])

	const list = [
		{
			id: 'feature',
			title: 'Feature',
		},
		{
			id: 'web',
			title: 'Web App',
		},
		{
			id: 'design',
			title: 'Design',
		},
		{
			id: 'content',
			title: 'Content',
		},
		{
			id: 'project',
			title: 'Project',
		},
	]
	useEffect(() => {
		switch (selected) {
			case 'feature':
				setData(featuredPortfolio)
				break
			case 'web':
				setData(webPortfolio)
				break

			case 'content':
				setData(mobilePortfolio)
				break
			case 'design':
				setData(designPortfolio)
				break

			case 'project':
				setData(contentPortfolio)
				break

			default:
				setData(featuredPortfolio)
		}
	}, [selected])

	return (
		<div className='portfolio' id='portfolio'>
			<h1>Portfolio</h1>
			<ul>
				{list.map((item) => (
					<PortfolioList
						title={item.title}
						active={selected === item.id}
						setSelected={setSelected}
						id={item.id}
					/>
				))}
			</ul>
			<div className='container'>
				{data.map((d) => (
					<div className='item'>
						<img src={d.img} alt='' srcset='' />
						<h3>{d.title}</h3>
					</div>
				))}
			</div>
		</div>
	)
}
