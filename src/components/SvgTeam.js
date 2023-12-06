import React from 'react'
import { useState } from 'react'
import '../home.css'
import { useGlobalContext } from './Context'

const SvgTeam = () => {
	const { stats } = useGlobalContext()

	const [useExt, setUseExt] = useState(false)

	return (
		<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="80%" viewBox="0 0 1629.26 117">
			<defs>
				<linearGradient id="linear-gradient" x1="729.65" y1="1372.1" x2="922.01" y2="1383.85" gradientTransform="translate(0 -1348)" gradientUnits="userSpaceOnUse">
					<stop offset="0" stop-color="#f7f5f5" />
					<stop offset="0.54" stop-color="#d9d8d8" />
				</linearGradient>
			</defs>
			<g id="Group_1" data-name="Group 1">
				<path id="Frame" d="M30,7.7A15,15,0,0,1,43.11,0h1582.5a15,15,0,0,1,12.8,22.8l-18.3,30a14.93,14.93,0,0,1-12.8,7.2H26.41a15,15,0,0,1-13.1-22.3Z" transform="translate(-11.37)" style={{ fillOpacity: "0.5" }} />
				<path id="HomeFrame" d="M30.91,9.4a15.11,15.11,0,0,1,13-7.4h674.4V58H28.51a15,15,0,0,1-12.9-22.6Z" transform="translate(-11.37)" style={{ fill: "#1c1c1c" }} />
				<path id="AwayFrame" d="M718.31,2h904.9a15,15,0,0,1,12.7,23l-16.2,26a14.93,14.93,0,0,1-12.7,7H718.31Z" transform="translate(-11.37)" style={{ fill: "#1c1c1c" }} />
				<path id="Center" d="M733.31,5h186a15,15,0,0,1,15,15V40a15,15,0,0,1-15,15h-186a15,15,0,0,1-15-15V20A15,15,0,0,1,733.31,5Z" transform="translate(-11.37)" style={{ fill: "url(#linear-gradient)" }} />
				<rect id="ProgressBarFrame" x="391.94" y="71" width="218" height="46" style={{ fill: "#fff" }} />
				<rect id="ProgressBar" x="393.94" y="73" width="214" height="42" style={{ fill: "#fff" }} />
				<path id="Extension" d="M343.31,86a15,15,0,0,1,15-15h45v46h-45a15,15,0,0,1-15-15Z" transform="translate(-11.37)" style={{ fill: useExt ? "#d91a1a" : "#1c1c1c" }} />
				<path id="Time" d="M621.31,71h50.8c14.5,0,26.2,.7,26.2,15v16c0,8.3-11.7,15-26.2,15H621.31Z" transform="translate(-11.37)" style={{ fill: "#1c1c1c" }} />
				<path id="Gloss" d="M343.31,92c0-11.6,11-21,24.5-21h376c9.7,0,17.5,6.7,17.5,15v6Z" transform="translate(-11.37)" style={{ fill: "#d9d9d9", fillOpacity: "0.07999999821186066" }} />
				{useExt ?
					<g style={{ isolation: "isolate" }}>
						<path d="M348.11,103V84h13.6v4.1h-8.5v3.2H361v4.1h-7.8v3.2h8.5v4.1h-13.6Z" transform="translate(-11.37)" style={{ fill: "#fff" }} />
						<path d="M369.81,84l3.1,5.5h.1l3.1-5.5h5.7l-5.7,9.5L382,103h-5.9l-3.2-5.6h-.1l-3.2,5.6h-5.8l5.8-9.5L364,84Z" transform="translate(-11.37)" style={{ fill: "#fff" }} />
						<path d="M383.61,88.2V84H400v4.1h-5.7V103h-5V88.2Z" transform="translate(-11.37)" style={{ fill: "#fff" }} />
					</g>
					: ''
				}
			</g>
			<rect id="homeplayer" x="81.54" y="7.5" width="500.8" height="45.1" style={{ fill: "none" }} />
			<rect id="awayplayer" x="1046.94" y="7.5" width="500.8" height="45.1" style={{ fill: "none" }} />
			<rect id="homescore" x="599.54" y="7.5" width="100.9" height="45.1" style={{ fill: "none" }} />
			<rect id="awayscore" x="928.84" y="7.5" width="100.9" height="45.1" style={{ fill: "none" }} />
			<rect id="raceto" x="725.34" y="7.5" width="175.6" height="45.1" style={{ fill: "none" }} />
			<rect id="timer" x="614.94" y="73" width="98" height="42" style={{ fill: "none" }} />
			<text id="timer-2" textAnchor='middle' data-name="timer" transform="translate(663.94 101.4)" style={{ isolation: "isolate", fontSize: "40px", fill: "#fff", fontFamily: "semibold" }}>
			</text>
			<text id="p1name" textAnchor='middle' transform="translate(323.47 42.5)" style={{ isolation: "isolate", fontSize: "40px", fill: "#fff", fontFamily: "semibold" }}>
				{stats[0].hometeamlabel}</text>
			<text id="p2name" textAnchor='middle' transform="translate(1289.85 42.5)" style={{ isolation: "isolate", fontSize: "40px", fill: "#fff", fontFamily: "semibold" }}>
				{stats[0].awayteamlabel}</text>
			<text id="p2score" textAnchor='middle' transform="translate(971.77 45.5)" style={{ isolation: "isolate", fontSize: "50px", fill: "#fff", fontFamily: "semibold" }}>
				{stats[0].awayscore}</text>
			<text id="p1score" textAnchor='middle' transform="translate(642 45.5)" style={{ isolation: "isolate", fontSize: "50px", fill: "#fff", fontFamily: "semibold" }}>
				{stats[0].homescore}</text>
			<text id="raceto-2" textAnchor='middle' data-name="raceto" transform="translate(812.43 41)" style={{ isolation: "isolate", textAlign: "center", textAnchor: "center", fontSize: "30px", fill: "#231f20", fontFamily: "semibold" }}>
				Race to 15{/*	{stats[0].raceto} */}</text>
		</svg>
	)
}
// {stats[0].awayframepointsadj===0 && stats[0].awayscorepoints===0 ? stats[0].awayscore : `${awayScore}`}
// {stats[0].homeframepointsadj===0 && stats[0].homescorepoints===0 ? stats[0].homescore : `${homeScore}`}
// {stats[0].homescorepoints>0 ? `${stats[0].homescore}` : ''}
// {stats[0].awayscorepoints>0 ? `${stats[0].awayscore}` : ''}
export { SvgTeam }
