import React from 'react'
import { useState } from 'react'
import ProgressBar from '@ramonak/react-progress-bar'
import '../home.css'
import { useGlobalContext } from './Context'

const SvgTeam = ({ stats }) => {
	const [useExt, setUseExt] = useState(false)

	return (
		<>
			<div>
				<ProgressBar
					completed={1}
					height='46'
					width='218'
					borderRadius='20px'
					isLabelVisible={false}
				/>
			</div>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				data-name='Layer 1'
				viewBox='0 0 1629.29 183.2'
			>
				<defs>
					<linearGradient
						id='a'
						x1={738.52}
						x2={890.7}
						y1={3034.23}
						y2={3043.53}
						gradientTransform='translate(0 -2984)'
						gradientUnits='userSpaceOnUse'
					>
						<stop
							offset={0}
							stopColor='#f7f5f5'
						/>
						<stop
							offset={0.54}
							stopColor='#d9d8d8'
						/>
					</linearGradient>
					<linearGradient
						id='b'
						x1={933.97}
						x2={1024.26}
						y1={3036.13}
						y2={3041.65}
						gradientTransform='translate(0 -2984)'
						gradientUnits='userSpaceOnUse'
					>
						<stop
							offset={0}
							stopColor='#f7f5f5'
						/>
						<stop
							offset={0.54}
							stopColor='#d9d8d8'
						/>
					</linearGradient>
					<linearGradient
						id='c'
						x1={604.66}
						x2={694.96}
						y1={3036.13}
						y2={3041.65}
						gradientTransform='translate(0 -2984)'
						gradientUnits='userSpaceOnUse'
					>
						<stop
							offset={0}
							stopColor='#f7f5f5'
						/>
						<stop
							offset={0.54}
							stopColor='#d9d8d8'
						/>
					</linearGradient>
				</defs>
				<g data-name='Group 1'>
					<path d='M18.67 23.1c2.7-6.9 7.7-11 13.1-11h1582.5c11.7 0 18.9 18.3 12.8 32.6l-18.3 42.9c-2.7 6.4-7.6 10.3-12.8 10.3H15.07c-11.5 0-18.7-17.6-13.1-31.9l16.7-42.9Z' />
					<path
						fill='#1c1c1c'
						d='M19.57 25.5c2.7-6.6 7.7-10.6 13-10.6h674.4v80H17.17c-11.6 0-18.8-18-12.9-32.3l15.3-37.1Z'
					/>
					<path
						fill='#1c1c1c'
						d='M706.97 14.9h904.9c11.8 0 19 18.6 12.7 32.9l-16.2 37.2c-2.7 6.3-7.6 10-12.7 10h-888.7V14.9Z'
					/>
					<path
						fill='url(#a)'
						d='M741.77 19.2h146.4c6.5 0 11.8 9.6 11.8 21.4v28.6c0 11.9-5.3 21.4-11.8 21.4h-146.4c-6.5 0-11.8-9.6-11.8-21.4V40.6c0-11.8 5.3-21.4 11.8-21.4Z'
					/>
					<path
						fill='url(#b)'
						d='M936.27 19.2h86.1c3.8 0 6.9 9.6 6.9 21.4v28.6c0 11.9-3.1 21.4-6.9 21.4h-86.1c-3.8 0-6.9-9.6-6.9-21.4V40.6c0-11.8 3.1-21.4 6.9-21.4Z'
						data-name='Center'
					/>
					<path
						fill='url(#c)'
						d='M606.97 19.2h86.1c3.8 0 6.9 9.6 6.9 21.4v28.6c0 11.9-3.1 21.4-6.9 21.4h-86.1c-3.8 0-6.9-9.6-6.9-21.4V40.6c-.1-11.8 3.1-21.4 6.9-21.4Z'
						data-name='Center'
					/>
					<path
						fill='#fff'
						d='M1257.07 110.2h218v73h-218z'
					/>
					<path
						fill='#fff'
						d='M1259.07 113.4h214v66.7h-214z'
					/>
					<path
						fill='#c45353'
						d='M1197.07 134c0-13.2 6.7-23.8 15-23.8h45v73h-45c-8.3 0-15-10.6-15-23.8V134Z'
					/>
					<path
						fill='#1c1c1c'
						d='M1475.07 110.2h113.8c14.5 0 26.2 10.6 26.2 23.8v25.4c0 13.2-11.7 23.8-26.2 23.8h-113.8v-73Z'
					/>
					<path
						fill='rgba(217, 217, 217, .08)'
						d='M1197.07 143.5c0-18.4 11-33.3 24.5-33.3h376c9.7 0 17.5 10.6 17.5 23.8v9.5h-418Z'
					/>
					<g fill='#fff'>
						<path d='M1201.87 159.6v-27.2h13.6v5.9h-8.5v4.6h7.8v5.9h-7.8v4.6h8.5v5.9h-13.6v.3ZM1223.57 132.4l3.1 7.9h.1l3.1-7.9h5.7l-5.7 13.6 5.9 13.6h-5.9l-3.2-8h-.1l-3.2 8h-5.8l5.8-13.6-5.6-13.6h5.8ZM1237.37 138.4v-6h16.4v5.9h-5.7v21.3h-5v-21.2h-5.7Z' />
					</g>
					<text
						fill='#fff'
						data-name='timer'
						style={{
							isolation: 'isolate',
							fontSize: 58,
							fill: '#fff',
							fontFamily: 'xxBold',
							fontVariant: 'small-caps',
							fontWeight: '900',
							textAlign: 'center',
							textAnchor: 'middle',
						}}
						transform='matrix(.7 0 0 1 1543.06 167.28)'
					>
						<tspan
							x={0}
							y={0}
						>
							{'00:00'}
						</tspan>
					</text>
					<path
						fill='none'
						d='M1480.07 116.7h98v60h-98z'
						data-name='timer'
					/>
				</g>
				<path
					fill='none'
					d='M81.57 22.8h500.8v64.5H81.57zM1046.97 22.8h500.8v64.5h-500.8zM599.57 22.8h100.9v64.5h-100.9zM928.87 22.8h100.9v64.5h-100.9zM725.37 22.8h175.6v64.5h-175.6z'
				/>
				<text
					fill='#fff'
					data-name='homename'
					style={{
						isolation: 'isolate',
						fontSize: 62,
						fill: '#fff',
						fontFamily: 'xxBold',
						fontVariant: 'small-caps',
						fontWeight: '900',
						textAlign: 'center',
						textAnchor: 'middle',
					}}
					transform='matrix(.7 0 0 1 299.52 74.55)'
				>
					<tspan
						x={0}
						y={0}
					>
						{stats[0] ? stats[0].hometeamlabel : ''}
					</tspan>
				</text>
				<text
					fill='#fff'
					data-name='awayname'
					style={{
						isolation: 'isolate',
						fontSize: 66,
						fill: '#fff',
						fontFamily: 'xxBold',
						fontVariant: 'small-caps',
						fontWeight: '900',
						textAlign: 'center',
						textAnchor: 'middle',
					}}
					transform='matrix(.7 0 0 1 1329.9 74.55)'
				>
					<tspan
						x={0}
						y={0}
					>
						{stats[0] ? stats[0].awayteamlabel : ''}
					</tspan>
				</text>
				<text
					fill='#231f20'
					data-name='awayscore'
					style={{
						isolation: 'isolate',
						fontSize: 66,
						fill: '#231f20',
						fontFamily: 'xxBold',
						fontVariant: 'small-caps',
						fontWeight: '900',
						textAlign: 'center',
						textAnchor: 'middle',
					}}
					transform='matrix(.7 0 0 1 977.82 78.55)'
				>
					<tspan
						x={0}
						y={0}
					>
						{stats[0] ? stats[0].awayscore : ''}
					</tspan>
				</text>
				<text
					fill='#231f20'
					data-name='homescore'
					style={{
						isolation: 'isolate',
						fontSize: 66,
						fill: '#231f20',
						fontFamily: 'xxBold',
						fontVariant: 'small-caps',
						fontWeight: '900',
						textAlign: 'center',
						textAnchor: 'middle',
					}}
					transform='matrix(.7 0 0 1 647.05 78.55)'
				>
					<tspan
						x={0}
						y={0}
					>
						{stats[0] ? stats[0].homescore : ''}
					</tspan>
				</text>
				<text
					fill='#231f20'
					data-name='raceto'
					style={{
						isolation: 'isolate',
						fontSize: 56,
						fill: '#231f20',
						fontFamily: 'xxBold',
						fontVariant: 'small-caps',
						fontWeight: '900',
						textAlign: 'center',
						verticalAlign: 'middle',
						textAnchor: 'middle',
					}}
					transform='matrix(.7 0 0 1 813.48 69.55)'
				>
					<tspan
						x={-70}
						y={1.5}
					>
						{'('}
					</tspan>
					<tspan
						x={0}
						y={6}
					>
						{'11'}
					</tspan>
					<tspan
						x={71}
						y={1.5}
					>
						{')'}
					</tspan>
				</text>
				<path
					d='M13.67 119.6c2-5.8 5.6-9.4 9.6-9.4h1153.9c8.5 0 13.8 15.6 9.3 27.7l-13.3 36.5c-2 5.5-5.5 8.8-9.3 8.8H10.97c-8.4 0-13.6-15-9.6-27.1l12.3-36.5Z'
					data-name='Frame'
				/>
				<path
					fill='#1c1c1c'
					d='M13.67 121.7c2-5.6 5.6-9 9.5-9h491.4v67.9H11.87c-8.5 0-13.7-15.3-9.4-27.4l11.2-31.5Z'
					data-name='HomeFrame'
				/>
				<path
					fill='#1c1c1c'
					d='M514.57 112.8h659.4c8.6 0 13.8 15.8 9.3 27.9l-11.8 31.5c-2 5.3-5.5 8.5-9.3 8.5h-647.6v-67.9Z'
					data-name='AwayFrame'
				/>
				<path
					fill='none'
					d='M74.07 114.5h500.8V179H74.07zM625.17 114.5h500.8V179h-500.8z'
					data-name='homeplayer'
				/>
				<text
					fill='#fff'
					data-name='TimeZone'
					style={{
						isolation: 'isolate',
						fontSize: 58,
						fill: '#fff',
						fontFamily: 'xxBold',
						fontVariant: 'small-caps',
						fontWeight: '900',
						textAlign: 'center',
						textAnchor: 'middle',
					}}
					transform='matrix(.7 0 0 1 900.94 167.04)'
				>
					<tspan
						x={0}
						y={0}
					>
						{stats[0] ? stats[0].venuename : ''}
					</tspan>
				</text>
				<text
					fill='#fff'
					data-name='Tournament Name'
					style={{
						isolation: 'isolate',
						fontSize: 58,
						fill: '#fff',
						fontFamily: 'xxBold',
						fontVariant: 'small-caps',
						fontWeight: '900',
						textAlign: 'center',
						textAnchor: 'middle',
					}}
					transform='matrix(.7 0 0 1 280.51 167.51)'
				>
					<tspan
						x={0}
						y={0}
					>
						{stats[0] ? stats[0].compname : ''}
					</tspan>
				</text>
			</svg>
		</>
	)
}
// {stats[0].awayframepointsadj===0 && stats[0].awayscorepoints===0 ? stats[0].awayscore : `${awayScore}`}
// {stats[0].homeframepointsadj===0 && stats[0].homescorepoints===0 ? stats[0].homescore : `${homeScore}`}
// {stats[0].homescorepoints>0 ? `${stats[0].homescore}` : ''}
// {stats[0].awayscorepoints>0 ? `${stats[0].awayscore}` : ''}
export { SvgTeam }
