import React from 'react';
import '../home.css';
import { useState, useEffect, useCallback } from 'react';
import { useGlobalContext } from './Context';
import throttle from 'lodash/throttle';
import ProgressBar from '@ramonak/react-progress-bar';
import 'typeface-inter';

const SvgRmu = () =>
{
	const { stats, local, matchId, compId, test } = useGlobalContext();

	const [ useExt, setUseExt ] = useState( false );
	const [ framesText, setFramesText ] = useState( null );
	const [ p1Text, setp1Text ] = useState( null );
	const [ p2Text, setp2Text ] = useState( null );
	const [ venueNameText, setVenueNameText ] = useState( null );
	const [ compNameText, setCompNameText ] = useState( null );
	const [ framesLeft, setFramesLeft ] = useState( null )
	const [ timezoneText, setTimezoneText ] = useState( null )

	const [ framesMax, setFramesMax ] = useState( null )
	const [ p1Max, setP1Max ] = useState( null )
	const [ p2Max, setP2Max ] = useState( null )
	const [ venueMax, setVenueMax ] = useState( null )
	const [ compMax, setCompMax ] = useState( null )
	const [ timezoneMax, setTimezoneMax ] = useState( null )

	const framesLength = 110;
	const p1Length = 335;
	const p2Length = 335;
	const venueLength = 260
	const compLength = 275
	const timezoneLength = 200

	const calculateFramesLeft = 18 - ( stats[ 0 ]?.homescore + stats[ 0 ]?.awayscore )

	useEffect( () =>
	{
		if ( stats[ 0 ]?.matchformat === "Play 0" )
		{
			setFramesLeft( calculateFramesLeft )
		}
	}, [ stats[ 0 ]?.homescore, stats[ 0 ]?.awayscore ] )

	const calculateTextLength = useCallback(
		throttle( () =>
		{

			const timezone = document.getElementById( 'timezone' );
			if ( timezone )
			{
				const computedLength = timezone.getComputedTextLength();
				const ctm = timezone.getScreenCTM();
				const scaleX = ctm.a;
				const maxLength = timezoneLength / scaleX;
				console.log( 'Max user units for timezone:', maxLength );

				const timezoneMaxLength = maxLength
				setTimezoneMax( timezoneMaxLength )
				const pixelLength = computedLength * scaleX;
				if ( pixelLength > timezoneLength )
				{
					console.log(
						'timezone text is too long. It spans',
						pixelLength,
						'pixels, but container is only',
						timezoneLength,
						'pixels wide.'
					);
				} else
				{
					console.log( 'timezone text fits within the container.' );
				}

				setTimezoneText( computedLength > timezoneMaxLength ? timezoneMaxLength : null );
			}

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
		[ matchId, local, framesMax, p1Max, p2Max, venueMax, compMax, framesLength, timezoneMax ]
	);

	useEffect( () =>
	{
		calculateTextLength();
	}, [ matchId, local, p1Length, framesLength, calculateTextLength ] );

	const calculateProgress = () =>
	{
		if ( !stats?.timer || !stats?.totalTime ) return 0;
		return ( stats.timer / stats.totalTime ) * 100; // Calculate progress as a percentage
	};

	return (
		<svg
			id='Layer_1'
			data-name='Layer 1'
			xmlns='http://www.w3.org/2000/svg'
			xmlnsXlink='http://www.w3.org/1999/xlink'
			viewBox='0 0 256.58 80.75'
			style={ { transform: 'scaleX(1.5) scaleY(1.5)' } }
		>
			<defs>
				<clipPath id='clippath'>
					<rect
						y={ 14.46 }
						width={ 252.15 }
						height={ 66.29 }
						style={ {
							fill: 'none',
						} }
					/>
				</clipPath>
				<linearGradient
					id='linear-gradient'
					x1={ 8032.13 }
					y1={ 3197.05 }
					x2={ 7093.63 }
					y2={ 3788.55 }
					gradientTransform='translate(-343.78 -203.82) scale(.07)'
					gradientUnits='userSpaceOnUse'
				>
					<stop
						offset={ 0.24 }
						stopColor='#f8f5f5'
					/>
					<stop
						offset={ 0.77 }
						stopColor='#bbb'
					/>
				</linearGradient>
			</defs>
			<g
				style={ {
					clipPath: 'url(#clippath)',
				} }
			>
				<g
					id='Asset_2_1'
					data-name='Asset 2 1'
				>
					<g
						id='Layer_2'
						data-name='Layer 2'
					>
						<g
							id='Layer_1-2'
							data-name='Layer 1-2'
						>
							<path
								id='Vector'
								d='M25.74,15.92c.15-.43.44-.8.81-1.06.37-.26.82-.4,1.27-.4h222.13c.35,0,.7.09,1.02.25.31.16.59.4.79.69s.33.63.38.98,0,.71-.12,1.04l-17.48,47.77c-.16.42-.44.79-.81,1.05s-.81.4-1.26.4H10.55c-.35,0-.7-.09-1.02-.25-.31-.16-.58-.4-.79-.69-.2-.29-.33-.62-.38-.98-.05-.35,0-.71.11-1.04L25.74,15.92Z'
								style={ {
									fill: '#1c1c1c',
								} }
							/>
							<path
								d='M6.47,70.9c.05-.14.1-.27.14-.39s.09-.24.14-.37c.06-.13.13-.26.21-.38s.18-.23.28-.34c.1-.1.22-.2.34-.28s.25-.15.38-.2.27-.1.41-.13.29-.04.44-.04h222.1c.15,0,.29.01.44.04s.28.07.41.13.26.12.38.2.23.17.34.28c.1.1.22.24.32.4s.19.34.24.53c.07.19.09.38.1.56s-.02.35-.03.49l-.86,2.34-.86,2.34-.33.9-.33.9c-.32.86-.89,1.58-1.61,2.09s-1.6.79-2.53.79H6.25c-1.63,0-2.76-1.62-2.21-3.15l2.42-6.71h0Z'
								style={ {
									fill: '#1c1c1c',
								} }
							/>
							<path
								d='M212.14,79.86v-10.38h18.47c1.26,0,2.13,1.25,1.7,2.43-.62,1.68-1.44,3.91-2.05,5.59-.53,1.45-1.92,2.41-3.46,2.41l-14.65-.05h0Z'
								style={ {
									fill: '#42d70e',
								} }
							/>
							<path
								id='progress_bar'
								data-name='progress bar'
								d='M212.14,69.48h0v10.38h-37.76v-10.38'
								style={ {
									fill: '#fff',
								} }
							/>
							<path
								id='Vector_5'
								data-name='Vector 5'
								d='M174.51,15.52c.03-.07.07-.13.13-.18.06-.04.14-.07.21-.07h40.46c.06,0,.12.01.17.04s.1.07.13.12.06.11.06.17,0,.12-.02.18l-18.89,50.05c-.03.07-.07.13-.14.17-.06.04-.13.06-.21.06h-40.24c-.06,0-.12-.01-.17-.04s-.1-.07-.13-.11c-.03-.05-.06-.1-.06-.16s0-.12.02-.17l18.67-50.05h.01Z'
								style={ {
									fill: 'url(#linear-gradient)',
								} }
							/>
						</g>
						<g
							id='Recognition_span_DETECTION'
							data-name='Recognition span DETECTION'
						>
							<g id='EXT'>
								<path
									id='Vector_8'
									data-name='Vector 8'
									d='M217.33,76.83l.62-3.74h2.52l-.11.65h-1.73l-.15.89h1.6l-.11.65h-1.6l-.15.89h1.74l-.11.65h-2.53,0Z'
									style={ {
										fill: '#fff',
									} }
								/>
								<path
									id='Vector_9'
									data-name='Vector 9'
									d='M221.82,73.09l.54,1.27h.03l.97-1.27h.92l-1.45,1.87.85,1.87h-.89l-.55-1.28h-.03l-.98,1.28h-.92l1.49-1.87-.84-1.87h.87-.01Z'
									style={ {
										fill: '#fff',
									} }
								/>
								<path
									id='Vector_10'
									data-name='Vector 10'
									d='M224.52,73.74l.11-.65h3.07l-.11.65h-1.15l-.51,3.09h-.78l.51-3.09h-1.14Z'
									style={ {
										fill: '#fff',
									} }
								/>
							</g>
						</g>
					</g>
				</g>
			</g>
			<path
				d='M29.92,2.13c.05-.14.1-.27.14-.39s.09-.24.14-.37c.06-.13.13-.26.21-.38s.18-.23.28-.34c.1-.1.22-.2.34-.28s.25-.15.38-.2.27-.1.41-.13.29-.04.44-.04h222.09c.15,0,.29,0,.44.04.15.03.28.07.41.13.13.06.26.12.38.2s.23.17.34.28c.1.1.22.24.32.4s.19.34.24.53c.07.19.09.38.1.56s-.02.35-.03.49l-.86,2.34-.86,2.34-.33.9-.33.9c-.32.86-.89,1.58-1.61,2.09s-1.6.79-2.53.79H29.7c-1.63,0-2.76-1.62-2.21-3.15l2.42-6.71h0Z'
				style={ {
					fill: '#1c1c1c',
				} }
			/>
			<path
				d='M22.89,23.79l1.29-3.58'
				style={ {
					fill: '#1c1c1c',
					isolation: 'isolate',
					opacity: 0.25,
				} }
			/>
			<path
				d='M248.72,26.44l3.43-9.42-3.43,9.42Z'
				style={ {
					fill: 'none',
				} }
			/>
			<path
				id='Vector_7'
				data-name='Vector 7'
				d='M143.25,70.93l-2.59,7.32'
				style={ {
					fill: 'none',
					stroke: '#c2c2c2',
					strokeLinecap: 'round',
					strokeMiterlimit: 10,
				} }
			/>
			<path
				id='Vector_7-2'
				data-name='Vector 7-2'
				d='M138,2.37l-2.59,7.32'
				style={ {
					fill: 'none',
					stroke: '#c2c2c2',
					strokeLinecap: 'round',
					strokeMiterlimit: 10,
				} }
			/>
			<path
				id='Vector_7-3'
				data-name='Vector 7-3'
				d='M90.83,70.57l-2.59,7.32'
				style={ {
					fill: 'none',
					stroke: '#c2c2c2',
					strokeLinecap: 'round',
					strokeMiterlimit: 10,
				} }
			/>
			<text
				transform='translate(80, 8.5)'
				style={ {
					isolation: 'isolate',
					fontSize: 7,
					fill: '#fff',
					fontFamily: 'Inter-BoldItalic',
					fontStyle: 'italic',
					fontWeight: 'bold',
					textAlign: 'center',
					textAnchor: 'middle',
					fontVariant: 'small-caps',
				} }
				textLength={ venueNameText }
				lengthAdjust='spacingAndGlyphs'
				id='venueName'
			>
				{ stats[ 0 ]?.venuename || '' }
			</text>
			<text
				data-name='tournament name'
				transform='translate(195, 8.5)'
				style={ {
					isolation: 'isolate',
					fontSize: 7,
					fill: '#fff',
					fontFamily: 'Inter-BoldItalic',
					fontStyle: 'italic',
					fontWeight: '700',
					textAlign: 'center',
					textAnchor: 'middle',
					fontVariant: 'small-caps',
				} }
				id='compName'
				textLength={ compNameText }
				lengthAdjust='spacingAndGlyphs'
			>
				{ stats[ 0 ]?.compname || '' }
			</text>
			<text
				transform='translate(47, 77.5)'
				style={ {
					isolation: 'isolate',
					fontSize: 7,
					fill: '#fff',
					fontFamily: 'Inter-BoldItalic',
					fontStyle: 'italic',
					fontWeight: 'bold',
					textAlign: 'center',
					textAnchor: 'middle',
					fontVariant: 'small-caps',
				} }
				id='timezone'
				textLength={ timezoneText }
				lengthAdjust='spacingAndGlyphs'
			>
				{ stats[ 0 ]?.timezone || '' }
			</text>
			<text
				data-name='race to'
				transform='translate(115, 77.5)'
				style={ {
					isolation: 'isolate',
					fontSize: 7,
					fill: '#fff',
					fontFamily: 'Inter-BoldItalic',
					fontStyle: 'italic',
					fontWeight: 'bold',
					textAlign: 'center',
					fontVariant: 'small-caps',
					textAnchor: 'middle',
				} }
				id='frames'
				textLength={ framesText }
				lengthAdjust='spacingAndGlyphs'
			>
				{ local === 'true' || local === true
					? stats?.raceLength
					: stats[ 0 ]?.matchformat === "Play 0" ? `Frames Left ${framesLeft}`
						: ''
				}
			</text>
			<text
				id='Timer'
				transform='translate(146, 78.5)'
				style={ {
					fontSize: 10,
					fill: 'red',
					fontFamily: 'Inter-BoldItalic',
					fontStyle: 'italic',
					fontWeight: 'bold',
					spanAlign: 'center',
					spanAnchor: 'middle',
					fontVariant: 'small-caps',
				} }
			>
				{ stats?.timer || '' }
			</text>
			<foreignObject
				x='174.25'
				y={ 69.45 }
				width='38.5'
				height='11'
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
						labelSize={ 25 }
						labelColor='black'
						labelAlignment='center'
						height={ 11 }
						width={ 38.5 }
						borderRadius={ 1 }
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
				id='p1Text'
				data-name='home name'
				transform='translate(95, 32)'
				style={ {
					isolation: 'isolate',
					fontSize: 12,
					fill: '#fff',
					fontFamily: 'Inter-BoldItalic',
					fontStyle: 'italic',
					fontWeight: 'bold',
					textAlign: 'center',
					textAnchor: 'middle',
				} }
				textLength={ p1Text }
				lengthAdjust='spacingAndGlyphs'
			>
				{ local === 'true' || local === true
					? stats?.home?.name
					: stats[ 0 ]?.hometeamlabel }
			</text>
			<text
				lengthAdjust='spacingAndGlyphs'
				id='awayTeamLabel'
				data-name='away name'
				transform='translate(87, 59)'
				style={ {
					isolation: 'isolate',
					fontSize: 12,
					fill: '#fff',
					fontFamily: 'Inter-BoldItalic',
					fontStyle: 'italic',
					fontWeight: 'bold',
					textAlign: 'center',
					textAnchor: 'middle',
				} }
				textLength={ p2Text }
			>
				{ local === 'true' || local === true
					? stats?.away?.name
					: stats[ 0 ]?.awayteamlabel }
			</text>
			<text
				id='homescore'
				transform='translate(190, 32)'
				style={ {
					isolation: 'isolate',
					fontSize: 18,
					fill: '#000',
					fontFamily: 'Inter-BoldItalic',
					fontStyle: 'italic',
					fontWeight: 'bold',
					textAlign: 'center',
					textAnchor: 'middle',
				} }
			>
				{ local === 'true' || local === true
					? stats?.home?.score
					: stats[ 0 ]?.homescore }
			</text>
			<text
				id='awayscore'
				transform='translate(180, 59)'
				style={ {
					isolation: 'isolate',
					fontSize: 18,
					fill: '#000',
					fontFamily: 'Inter-BoldItalic',
					fontStyle: 'italic',
					fontWeight: 'bold',
					textAlign: 'center',
					textAnchor: 'middle',
				} }
			>
				{ local === 'true' || local === true
					? stats?.away?.score
					: stats[ 0 ]?.awayscore }
			</text>
			<text
				id='away_points'
				data-name='away points'
				transform='translate(220, 59)'
				style={ {
					isolation: 'isolate',
					fontSize: 18,
					fill: '#fff',
					fontFamily: 'Inter-BoldItalic',
					fontStyle: 'italic',
					fontWeight: 'bold',
					textAlign: 'center',
					textAnchor: 'middle',
				} }
			>
				{ stats[ 0 ]?.awayscorepoints || '' }
			</text>
			<text
				id='home_points'
				data-name='home points'
				transform='translate(230, 32)'
				style={ {
					isolation: 'isolate',
					fontSize: 18,
					fill: '#fff',
					fontFamily: 'Inter-BoldItalic',
					fontStyle: 'italic',
					fontWeight: 'bold',
					textAlign: 'center',
					textAnchor: 'middle',
				} }
			>
				{ stats[ 0 ]?.homescorepoints || '' }
			</text>
		</svg>
	);
};
export { SvgRmu };
