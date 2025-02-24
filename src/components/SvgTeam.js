import React from 'react';
import { useState, useEffect, useCallback } from 'react';
import ProgressBar from '@ramonak/react-progress-bar';
import '../home.css';
import { useGlobalContext } from './Context';
import throttle from 'lodash/throttle';
import 'typeface-inter';

const SvgTeam = () =>
{
	const { stats, local, matchId, compId, test } = useGlobalContext();
	const [ useExt, setUseExt ] = useState( false );
	const [ framesText, setFramesText ] = useState( null );
	const [ p1Text, setp1Text ] = useState( null );
	const [ p2Text, setp2Text ] = useState( null );
	const [ venueNameText, setVenueNameText ] = useState( null );
	const [ compNameText, setCompNameText ] = useState( null );
	const [ framesLeft, setFramesLeft ] = useState( null )

	const [ framesMax, setFramesMax ] = useState( null )
	const [ p1Max, setP1Max ] = useState( null )
	const [ p2Max, setP2Max ] = useState( null )
	const [ venueMax, setVenueMax ] = useState( null )
	const [ compMax, setCompMax ] = useState( null )

	const calculateFramesLeft = 18 - ( stats[ 0 ]?.homescore + stats[ 0 ]?.awayscore )

	useEffect( () =>
	{
		if ( stats[ 0 ]?.matchformat === "Play 0" )
		{
			setFramesLeft( calculateFramesLeft )
		}
	}, [ stats[ 0 ]?.homescore, stats[ 0 ]?.awayscore ] )

	const framesLength = 165;
	const p1Length = 450;
	const p2Length = 450;
	const venueLength = 445
	const compLength = 445

	const calculateTextLength = useCallback(
		throttle( () =>
		{
			// For frames:
			const frames = document.getElementById( 'frames' );
			if ( frames )
			{
				const computedLength = frames.getComputedTextLength();
				const ctm = frames.getScreenCTM();
				const scaleX = ctm.a;
				const maxLength = framesLength / scaleX;
				console.log( 'Max user units for frames:', maxLength );

				const framesMaxLength = maxLength
				setFramesMax( framesMaxLength )
				const pixelLength = computedLength * scaleX;
				if ( pixelLength > framesLength )
				{
					console.log(
						'Frames text is too long. It spans',
						pixelLength,
						'pixels, but container is only',
						framesLength,
						'pixels wide.'
					);
				} else
				{
					console.log( 'Frames text fits within the container.' );
				}

				setFramesText( computedLength > framesMaxLength ? framesMaxLength : null );
			}

			// For p1Text:
			const p1Text = document.getElementById( 'p1Text' );
			if ( p1Text )
			{
				const computedLength = p1Text.getComputedTextLength();
				const ctm = p1Text.getScreenCTM();
				const scaleX = ctm.a;
				const maxLength = p1Length / scaleX;
				console.log( 'Max user units for p1Text:', maxLength );

				const p1MaxLength = maxLength
				setP1Max( p1MaxLength )
				const pixelLength = computedLength * scaleX;
				if ( pixelLength > p1Length )
				{
					console.log(
						'p1Text is too long. It spans',
						pixelLength,
						'pixels, but container is only',
						p1Length,
						'pixels wide.'
					);
				} else
				{
					console.log( 'p1Text fits within the container.' );
				}

				setp1Text( computedLength > p1MaxLength ? p1MaxLength : null );
			}

			// For awayTeamLabel (p2Text):
			const p2Text = document.getElementById( 'awayTeamLabel' );
			if ( p2Text )
			{
				const computedLength = p2Text.getComputedTextLength();
				const ctm = p2Text.getScreenCTM();
				const scaleX = ctm.a;
				const maxLength = p2Length / scaleX;
				console.log( 'Max user units for p2Text:', maxLength );

				const p2MaxLength = maxLength
				setP2Max( p2MaxLength )
				const pixelLength = computedLength * scaleX;
				if ( pixelLength > p2Length )
				{
					console.log(
						'p2Text is too long. It spans',
						pixelLength,
						'pixels, but container is only',
						p2Length,
						'pixels wide.'
					);
				} else
				{
					console.log( 'p2Text fits within the container.' );
				}

				setp2Text( computedLength > p2MaxLength ? p2MaxLength : null );
			}

			const venueNameText = document.getElementById( 'venueName' );
			if ( venueNameText )
			{
				const computedLength = venueNameText.getComputedTextLength();
				const ctm = venueNameText.getScreenCTM();
				const scaleX = ctm.a;
				const maxLength = venueLength / scaleX;
				console.log( 'Max user units for text:', maxLength );

				const venueMaxLength = maxLength;
				setVenueMax( venueMaxLength )
				const pixelLength = computedLength * scaleX;
				if ( pixelLength > venueLength )
				{
					console.log( 'Text is too long. It spans', pixelLength, 'pixels, but container is only', venueLength, 'pixels wide.' );
				} else
				{
					console.log( 'Text fits within the container.' );
				}

				setVenueNameText(
					computedLength > venueMaxLength ? venueMaxLength : null
				);
			}

			const compNameText = document.getElementById( 'compName' );
			if ( compNameText )
			{
				const computedLength = compNameText.getComputedTextLength();
				const ctm = compNameText.getScreenCTM();
				const scaleX = ctm.a;
				const maxLength = compLength / scaleX;
				console.log( 'Max user units for text:', maxLength );

				const compMaxLength = maxLength;
				setCompMax( compMaxLength )
				const pixelLength = computedLength * scaleX;
				if ( pixelLength > compLength )
				{
					console.log( 'Text is too long. It spans', pixelLength, 'pixels, but container is only', compLength, 'pixels wide.' );
				} else
				{
					console.log( 'Text fits within the container.' );
				}

				setCompNameText( computedLength > compMaxLength ? compMaxLength : null );
			}

		}, 300 ),
		[ matchId, local, framesMax, p1Max, p2Max, venueMax, compMax, framesLength ]
	);

	useEffect( () =>
	{
		calculateTextLength();
	}, [ matchId, local, p1Length, framesLength, calculateTextLength ] );

	const calculateProgress = () =>
	{
		if ( !stats[ 0 ]?.timer || !stats[ 0 ]?.totalTime ) return 0;
		return ( stats.timer / stats.totalTime ) * 100; // Calculate progress as a percentage
	};

	return (
		<svg
			id='Layer 2'
			data-name="Layer 2"
			xmlns='http://www.w3.org/2000/svg'
			xmlnsXlink='http://www.w3.org/1999/xlink'
			viewBox="0 0 1651 179"
			style={ { transform: 'scaleX(1.1) scaleY(1.4)' } }
			width='80vw'
		>
			<defs>
				<linearGradient
					id="a"
					x1={ 28201.92 }
					x2={ 32177.67 }
					y1={ -14116.59 }
					y2={ -14359.48 }
					gradientTransform="matrix(.05 0 0 -.05 -139.95 -629.77)"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset={ 0 } stopColor="#f7f5f5" />
					<stop offset={ 0.54 } stopColor="#d9d8d8" />
				</linearGradient>
			</defs>
			<g data-name="Layer 2">
				<g data-name="Layer 1-2">
					<path d="M20.16 24.36c2.68-4.74 7.64-7.63 13-7.63h1582.48c11.76 0 18.99 12.79 12.8 22.69l-18.16 29.91c-2.68 4.54-7.64 7.22-12.8 7.22H16.45c-11.56.21-18.78-12.17-13-22.07l16.72-29.91v-.21Z" />
					<path
						d="M20.99 26.22c2.68-4.54 7.64-7.43 13-7.43h674.43V74.7H18.72c-11.77 0-18.78-12.59-13-22.49l15.27-25.99ZM708.42 18.79h904.95c11.76 0 18.99 13 12.8 22.9l-16.3 25.99c-2.68 4.33-7.64 7.01-12.8 7.01H708.42V18.78Z"
						style={ {
							fill: "#1c1c1c",
						} }
					/>
					<path d="M689.23 76.76h236.09c0 10.32-6.81 18.77-15.27 18.77H704.5c-8.46 0-15.27-8.46-15.27-18.77Z" />
					<path
						d="M691.29 74.7h231.96c0 10.32-6.81 18.77-15.07 18.77H706.14c-8.25 0-15.07-8.46-15.07-18.77h.21Z"
						style={ {
							fill: "#1c1c1c",
						} }
					/>
					<path d="M925.32 18.79H689.23c0-10.32 6.81-18.77 15.27-18.77h205.55c8.46 0 15.27 8.46 15.27 18.77Z" />
					<path
						d="M923.26 18.79H691.3c0-9.28 6.81-16.92 15.07-16.92h202.04c8.25 0 15.07 7.63 15.07 16.92h-.21Z"
						style={ {
							fill: "#1c1c1c",
						} }
					/>
					<path
						d="M711.31 5.59h191.93c8.25 0 15.07 7.63 15.07 16.92v50.54c0 9.28-6.81 16.92-15.07 16.92H711.31c-8.25 0-15.07-7.63-15.07-16.92V22.5c0-9.28 6.81-16.92 15.07-16.92Z"
						style={ {
							fill: "url(#a)",
						} }
					/>
					<path
						d="M21.61 26.22c2.68-4.74 7.64-7.63 13-7.63h1580.21c9.91 0 16.92 9.7 13.83 18.98-.41 1.24-1.44 2.06-2.68 2.06H13.76l7.64-13.41h.21Z"
						style={ {
							fill: "#fff",
							isolation: "isolate",
							opacity: 0.1,
						} }
					/>
					<path d="M696.86 103.79h217.93v46.01H696.86v-46.01Z" />
					<path
						d="M698.93 105.65h214.01v42.09H698.93v-42.09Z"
						style={ {
							fill: "#fff",
						} }
					/>
					<path
						d="M636.81 118.64c0-8.25 6.81-15.06 15.07-15.06h44.99v46.01h-44.99c-8.25 0-15.07-6.81-15.07-15.06v-16.09.21Z"
						style={ {
							fill: "#42d70e",
						} }
					/>
					<path
						d="M914.79 103.79h65.01c8.25 0 15.07 6.81 15.07 15.06v16.09c0 8.25-6.81 15.06-15.07 15.06h-65.01v-46.21Z"
						style={ {
							fill: "#1c1c1c",
						} }
					/>
					<path
						d="M636.81 124.63c0-11.55 9.49-21.04 21.05-21.04H979.8c8.25 0 15.07 6.81 15.07 15.06v5.98H636.81Z"
						style={ {
							fill: "#fff",
							isolation: "isolate",
							opacity: 0.1,
						} }
					/>
					<path
						d="m640.73 135.77 3.1-18.98h13.21l-.62 3.71h-8.67l-.62 3.92h7.84l-.62 3.71h-7.84l-.62 3.92h8.67l-.62 3.71h-13.21Zm23.53-18.98 2.48 5.98 4.54-5.98h5.37l-7.22 9.49 4.33 9.49h-5.16l-2.48-5.98-4.54 5.98h-5.37l7.43-9.49-4.13-9.49h4.95-.21Zm13.62 3.71.62-3.71h15.89l-.62 3.71h-5.78l-2.48 15.27h-4.54l2.48-15.27h-5.78.21Z"
						style={ {
							fill: "#fff",
						} }
					/>
					<path d="M16.24 98.01c2.48-5.16 7.84-8.46 13.41-8.46h533.48c11.56 0 18.78 12.38 13 22.49L559 141.95c-2.68 4.74-7.64 7.63-13 7.63H15c-11.14 0-18.37-11.55-13.41-21.66l14.65-29.91Z" />
					<path
						d="M18.72 101.93c2.48-4.95 7.64-8.25 13.41-8.25h218.76v51.99H16.04c-8.87 0-14.86-9.49-10.73-17.54l13.41-26.41v.21ZM250.89 93.68h310.8c9.08 0 14.86 9.7 10.53 17.74l-14.45 26.41c-2.68 4.74-7.64 7.84-13.21 7.84H250.89V93.68Z"
						style={ {
							fill: "#1c1c1c",
						} }
					/>
					<path
						d="M18.31 102.55c2.48-5.36 7.84-8.87 13.62-8.87h528.52c10.11 0 16.3 11.35 10.73 19.81-.41.62-1.24 1.24-2.06 1.24H12.94l5.57-12.17h-.21Z"
						style={ {
							fill: "#fff",
							isolation: "isolate",
							opacity: 0.1,
						} }
					/>
					<path d="M1058.22 98.01c2.48-5.16 7.84-8.46 13.41-8.46h533.48c11.56 0 18.78 12.38 13 22.49l-17.13 29.91c-2.68 4.74-7.64 7.63-13 7.63h-531.21c-11.14 0-18.37-11.55-13.41-21.66l14.65-29.91h.21Z" />
					<path
						d="M1060.7 101.93c2.48-4.95 7.64-8.25 13.41-8.25h218.76v51.99h-234.85c-8.87 0-14.86-9.49-10.73-17.54l13.41-26.41v.21Z"
						style={ {
							fill: "#1c1c1c",
						} }
					/>
					<path
						d="M1292.87 93.68h310.8c9.08 0 14.86 9.7 10.53 17.74l-14.45 26.41c-2.68 4.74-7.64 7.84-13.21 7.84h-293.67V93.68Z"
						style={ {
							fill: "#1c1c1c",
						} }
					/>
					<path
						d="M1060.29 102.55c2.48-5.36 7.84-8.87 13.62-8.87h528.52c10.11 0 16.3 11.35 10.73 19.81-.41.62-1.24 1.24-2.06 1.24h-556.18l5.57-12.17h-.21ZM689.64 14.87c0-8.25 10.11-15.27 13.21-14.85h208.44c1.44 0 11.97 5.36 13.62 13.2.62 3.51.41 5.57.41 5.57H689.64l.41-3.92h-.41Z"
						style={ {
							fill: "#fff",
							isolation: "isolate",
							opacity: 0.1,
						} }
					/>
				</g>
			</g>
			<text
				style={ {
					isolation: 'isolate',
					fontSize: 55,
					fill: 'white',
					fontFamily: 'Inter-BoldItalic',
					// fontVariant: 'small-caps',
					fontStyle: 'italic',
					fontWeight: '500',
					textAlign: 'center',
					textAnchor: 'middle',
				} }
				transform='matrix(.7 0 0 1 986 66.5)'
			>
				<tspan
					x={ 0 }
					y={ 0 }
				>
					{ local === 'true' || local === true
						? stats?.away?.score
						: stats[ 0 ]?.awayscore }
				</tspan>
			</text>
			<text
				style={ {
					isolation: 'isolate',
					fontSize: 55,
					fill: 'white',
					fontFamily: 'Inter-BoldItalic',
					fontStyle: 'italic',
					// fontVariant: 'small-caps',
					fontWeight: '500',
					textAlign: 'center',
					textAnchor: 'middle',
				} }
				transform='matrix(.7 0 0 1 616 66.5)'
			>
				<tspan
					x={ 0 }
					y={ 0 }
				>
					{ local === 'true' || local === true
						? stats?.home?.score
						: stats[ 0 ]?.homescore }
				</tspan>
			</text>
			<text
				style={ {
					isolation: 'isolate',
					fontSize: 35,
					fill: 'white',
					fontFamily: 'Inter-BoldItalic',
					fontStyle: 'italic',
					// fontVariant: 'small-caps',
					fontWeight: '500',
					textAlign: 'center',
					textAnchor: 'middle',
				} }
				transform='matrix(.7 0 0 1 952 118)'
			>
				<tspan
					x={ 0 }
					y={ 0 }
				>
					{ local === 'true' || local === true ? stats?.timer : '' }
				</tspan>
			</text>
			<foreignObject
				x='697.25'
				y='104.5'
				width='215.5'
				height='44.5'
			>
				<div
					style={ {
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						zIndex: 100,
						position: 'relative',
					} }
				>
					<ProgressBar
						completed={ stats.timer && stats.totalTime ? ( stats.timer / stats.totalTime ) * 100 : 0 } // Calculate percentage remaining as percentage
						customLabel={ `${ Math.ceil( stats.totalTime - stats.timer ) }s` } // Show remaining time
						labelSize={ 30 }
						labelColor='black'
						labelAlignment='center'
						height={ 44.5 }
						width={ 215.5 }
						borderRadius={ 2 }
						baseBgColor='white'
						bgColor='red'
						isLabelVisible={ false } // Show label
						transitionDuration='1s' // Update every second
						transitionTimingFunction='linear'
						animateOnRender={ true }
						dir='ltr' // Progress starts from left
						isIndeterminate={ false } // Ensure determinate mode
					/>
				</div>
			</foreignObject>
			<text
				style={ {
					isolation: 'isolate',
					fontSize: 48,
					fill: '#fff',
					fontFamily: 'Inter-BoldItalic',
					fontStyle: 'italic',
					// fontVariant: 'small-caps',
					fontWeight: '500',
					textAlign: 'center',
					textAnchor: 'middle',
				} }
				id='p1Text'
				transform='matrix(.7 0 0 1 278 62)'
				textLength={ p1Text }
				lengthAdjust='spacingAndGlyphs'
			>
				<tspan
					x={ 0 }
					y={ 0 }
				>
					{ local === 'true' || local === true
						? stats?.home?.name
						: stats[ 0 ]?.hometeamlabel }
				</tspan>
			</text>
			<text
				style={ {
					isolation: 'isolate',
					fontSize: 48,
					fill: '#fff',
					fontFamily: 'Inter-BoldItalic',
					fontStyle: 'italic',
					// fontVariant: 'small-caps',
					fontWeight: '500',
					textAlign: 'center',
					textAnchor: 'middle',
				} }
				transform='matrix(.7 0 0 1 1338 62)'
				textLength={ p2Text }
				lengthAdjust='spacingAndGlyphs'
				id='awayTeamLabel'
			>
				<tspan
					x={ 0 }
					y={ 0 }
				>
					{ local === 'true' || local === true
						? stats?.away?.name
						: stats[ 0 ]?.awayteamlabel }
				</tspan>
			</text>
			<text
				style={ {
					isolation: 'isolate',
					fontSize: 48,
					fill: '#fff',
					fontFamily: 'Inter-BoldItalic',
					fontStyle: 'italic',
					// fontVariant: 'small-caps',
					fontWeight: '500',
					textAlign: 'center',
					textAnchor: 'middle',
				} }
				transform='matrix(.7 0 0 1 280 134)'
				textLength={ venueNameText }
				lengthAdjust='spacingAndGlyphs'
				id='venueName'
			>
				<tspan
					x={ 0 }
					y={ 0 }
				>
					{ local === 'true' || local === true
						? ''
						: stats[ 0 ]?.venuename
					}
				</tspan>
			</text>
			<text
				style={ {
					isolation: 'isolate',
					fontSize: 48,
					fill: '#fff',
					fontFamily: 'Inter-BoldItalic',
					fontStyle: 'italic',
					// fontVariant: 'small-caps',
					fontWeight: '500',
					textAlign: 'center',
					textAnchor: 'middle',
				} }
				textLength={ compNameText }
				lengthAdjust='spacingAndGlyphs'
				transform='matrix(.7 0 0 1 1325 134)'
				id='compName'
			>
				<tspan
					x={ 0 }
					y={ 0 }
				>
					{ local === 'true' || local === true
						? ''
						: stats[ 0 ]?.compname
					}
				</tspan>
			</text>
			{ stats[ 0 ]?.matchformat === "Play 0"
				? (
					<>
						<text
							style={ {
								isolation: 'isolate',
								fontSize: 51,
								fill: '#231f20',
								fontFamily: 'Inter-BoldItalic',
								fontStyle: 'italic',
								fontWeight: 'bold',
								textAlign: 'center',
								verticalAlign: 'middle',
								textAnchor: 'middle',
							} }
							transform='matrix(.7 0 0 1 802 79)'
							id='frames'
							textLength={ framesText }
							lengthAdjust='spacingAndGlyphs'
						>
							{ local === 'true' || local === true
								? stats?.raceLength
								: stats[ 0 ]?.matchformat === "Play 0" ? framesLeft
									: ''
							}
						</text>

						<text
							style={ {
								isolation: 'isolate',
								fontSize: 31,
								fill: '#231f20',
								fontFamily: 'Inter-BoldItalic',
								fontStyle: 'italic',
								fontWeight: 'bold',
								textAlign: 'center',
								verticalAlign: 'middle',
								textAnchor: 'middle',
							} }
							transform='matrix(.7 0 0 1 802 32)'
							id='frames'
							textLength={ framesText }
							lengthAdjust='spacingAndGlyphs'
						>
							Frames Left
						</text>
					</>
				) : (
					<text
						style={ {
							isolation: 'isolate',
							fontSize: 51,
							fill: '#231f20',
							fontFamily: 'Inter-BoldItalic',
							fontStyle: 'italic',
							fontWeight: 'bold',
							textAlign: 'center',
							verticalAlign: 'middle',
							textAnchor: 'middle',
						} }
						transform='matrix(.7 0 0 1 802 65)'
						id='frames'
						textLength={ framesText }
						lengthAdjust='spacingAndGlyphs'
					>
						{ local === 'true' || local === true
							? stats?.raceLength
							: stats[ 0 ]?.matchformat
						}
					</text>
				)
			}
		</svg>
	);
};
// {stats[0]?.awayframepointsadj===0 && stats[0]?.awayscorepoints===0 ? stats?.awayscore : `${awayScore}`}
// {stats[0]?.homeframepointsadj===0 && stats[0]?.homescorepoints===0 ? stats?.homescore : `${homeScore}`}
// {stats[0]?.homescorepoints>0 ? `${stats[0]?.homescore}` : ''}
// {stats[0]?.awayscorepoints>0 ? `${stats[0]?.awayscore}` : ''}
export { SvgTeam };
