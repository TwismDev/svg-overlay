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
				xmlnsXlink='http://www.w3.org/1999/xlink'
				data-name='Layer 1'
				viewBox='0 0 1604.39 179.64'
				style={{ transform: 'scaleY(0.9)' }}
				width='90%'
			>
				<defs>
					<linearGradient
						id='a'
						x1={1.73}
						x2={568.2}
						y1={119.87}
						y2={154.48}
						gradientUnits='userSpaceOnUse'
					>
						<stop offset={0} />
						<stop offset={0.54} />
					</linearGradient>
					<linearGradient
						xlinkHref='#a'
						id='b'
						x1={1032.91}
						x2={1599.38}
						y1={119.01}
						y2={153.63}
					/>
					<linearGradient
						xlinkHref='#a'
						id='c'
						x1={727.55}
						x2={879.73}
						y1={-3534.49}
						y2={-3543.79}
						gradientTransform='matrix(1 0 0 -1 0 -3496.41)'
					/>
					<linearGradient
						id='d'
						x1={923}
						x2={1013.29}
						y1={-3536.39}
						y2={-3541.91}
						gradientTransform='matrix(1 0 0 -1 0 -3496.41)'
						gradientUnits='userSpaceOnUse'
					>
						<stop offset={0} />
						<stop offset={0.54} />
					</linearGradient>
					<linearGradient
						id='e'
						x1={593.69}
						x2={683.99}
						y1={-3536.39}
						y2={-3541.91}
						gradientTransform='matrix(1 0 0 -1 0 -3496.41)'
						gradientUnits='userSpaceOnUse'
					>
						<stop offset={0} />
						<stop offset={0.54} />
					</linearGradient>
				</defs>
				<path
					fill='url(#a)'
					d='M530.77 179.64H30.61c-21.96 0-36.76-22.47-28.1-42.65l8.6-20.01a32.488 32.488 0 0 1 29.68-19.66l500.73-2.47c20.28-.1 34.12 20.49 26.36 39.23l-11.87 28.69a27.323 27.323 0 0 1-25.24 16.87Z'
				/>
				<path
					fill='#1b1b1b'
					d='M529.68 174.14H28.93c-18.04 0-30.17-18.5-22.96-35.05l9.16-21.03a25.914 25.914 0 0 1 23.63-15.56l501-2.2c17.97-.08 30.16 18.23 23.18 34.78l-9.96 23.6a25.304 25.304 0 0 1-23.3 15.46Z'
				/>
				<path
					fill='url(#b)'
					d='M1561.95 178.78H1061.8c-21.96 0-36.76-22.47-28.1-42.65l8.6-20.01a32.488 32.488 0 0 1 29.68-19.66l500.73-2.47c20.28-.1 34.12 20.49 26.36 39.23l-11.87 28.69a27.323 27.323 0 0 1-25.24 16.87Z'
				/>
				<path
					fill='#1b1b1b'
					d='M1560.85 173.28H1060.1c-18.04 0-30.17-18.5-22.96-35.05l9.16-21.03a25.914 25.914 0 0 1 23.63-15.56l501-2.2c17.97-.08 30.16 18.23 23.18 34.78l-9.96 23.6a25.304 25.304 0 0 1-23.3 15.46Z'
				/>
				<path d='M25.73 85.8h1539.01c10.15 0 19.29-6.13 23.14-15.52l14.62-35.65c6.77-16.52-5.37-34.62-23.22-34.62H39.54c-10.27 0-19.52 6.21-23.41 15.71L1.94 50.36C-4.98 67.27 7.45 85.8 25.72 85.8Z' />
				<path
					fill='#1c1c1c'
					d='M29.85 81.25h1531.91c10.1 0 19.2-5.5 23.03-13.93l14.55-32c6.74-14.82-5.35-31.07-23.12-31.07H43.6c-10.22 0-19.43 5.57-23.3 14.1L6.18 49.45c-6.89 15.17 5.49 31.8 23.67 31.8Z'
				/>
				<path
					fill='#fff'
					d='M730.8 7.05h146.4c6.5 0 11.8 9.6 11.8 21.4v28.6c0 11.9-5.3 21.4-11.8 21.4H730.8c-6.5 0-11.8-9.6-11.8-21.4v-28.6c0-11.8 5.3-21.4 11.8-21.4Z'
				/>
				<path
					fill='#fff'
					d='M925.3 7.05h86.1c3.8 0 6.9 9.6 6.9 21.4v28.6c0 11.9-3.1 21.4-6.9 21.4h-86.1c-3.8 0-6.9-9.6-6.9-21.4v-28.6c0-11.8 3.1-21.4 6.9-21.4Z'
				/>
				<path
					fill='#fff'
					d='M596 7.05h86.1c3.8 0 6.9 9.6 6.9 21.4v28.6c0 11.9-3.1 21.4-6.9 21.4H596c-3.8 0-6.9-9.6-6.9-21.4v-28.6c-.1-11.8 3.1-21.4 6.9-21.4Z'
				/>
				{/* <path
					fill='#fff'
					d='M653.74 94.85h218v84.79h-218V94.85Z'
				/>
				<path
					fill='#fff'
					d='M655.74 98.57h214v77.47h-214V98.57Z'
				/>
				<path
					fill='#c45353'
					d='M593.74 125.84c0-15.33 16.2-30.99 24.5-30.99h35.5v84.79h-34.21c-8.3 0-25.79-12.31-25.79-27.64v-26.16Z'
				/>
				<path
					fill='#1c1c1c'
					d='M871.74 94.85h113.8c14.5 0 26.2 12.31 26.2 27.64v29.5c0 15.33-11.7 27.64-26.2 27.64h-113.8V94.84Z'
				/>
				<path
					fill='rgba(217, 217, 217, .08)'
					d='M593.91 129.45c0-21.37 13.18-34.6 26.68-34.6h364.95c19.05 0 26.2 12.31 26.2 27.64v8.09l-417.83-1.14Z'
				/>
				<path
					fill='#fff'
					d='M598.54 152.23v-31.59h13.6v6.85h-8.5v5.34h7.8v6.85h-7.8v5.34h8.5v6.85h-13.6v.35Zm21.7-31.59 3.1 9.18h.1l3.1-9.18h5.7l-5.7 15.8 5.9 15.8h-5.9l-3.2-9.29h-.1l-3.2 9.29h-5.8l5.8-15.8-5.6-15.8h5.8Zm13.8 6.96v-6.97h16.4v6.85h-5.7v24.74h-5V127.6h-5.7Z'
				/>
				<text
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
					transform='matrix(.6 0 0 1 939.73 161.15)'
				>
					<tspan
						x={0}
						y={0}
					>
						{'00:00'}
					</tspan>
				</text> */}
				<path
					fill='none'
					d='M876.74 102.4h98v69.69h-98V102.4ZM70.6 10.65h500.8v64.5H70.6v-64.5Zm965.4 0h500.8v64.5H1036v-64.5Zm-447.4 0h100.9v64.5H588.6v-64.5Zm329.3 0h100.9v64.5H917.9v-64.5Zm-203.5 0H890v64.5H714.4v-64.5Z'
				/>
				<text
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
					transform='matrix(.7 0 0 1 288.55 62.4)'
				>
					<tspan
						x={0}
						y={0}
					>
						{stats[0] ? stats[0].hometeamlabel : ''}
					</tspan>
				</text>
				<text
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
					transform='matrix(.7 0 0 1 1318.93 62.4)'
				>
					<tspan
						x={0}
						y={0}
					>
						{stats[0] ? stats[0].awayteamlabel : ''}
					</tspan>
				</text>
				<text
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
					transform='matrix(.7 0 0 1 966.85 66.4)'
				>
					<tspan
						x={0}
						y={0}
					>
						{stats[0] ? stats[0].awayscore : ''}
					</tspan>
				</text>
				<text
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
					transform='matrix(.7 0 0 1 636.08 66.4)'
				>
					<tspan
						x={0}
						y={0}
					>
						{stats[0] ? stats[0].homescore : ''}
					</tspan>
				</text>
				<g
					fill='#231f20'
					fontFamily='ArialMT, Arial'
					fontSize={12}
				>
					<text
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
						data-name='raceto'
						transform='matrix(.7 0 0 1 803.48 58.55)'
					>
						{stats[0] ? stats[0].matchformat : ''}
					</text>
				</g>
				<text
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
					transform='matrix(.7 0 0 1 275.78 153.91)'
				>
					<tspan
						x={0}
						y={0}
					>
						{stats[0] ? stats[0].venuename : ''}
					</tspan>
				</text>
				<text
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
					transform='matrix(.7 0 0 1 1325.16 156.43)'
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
