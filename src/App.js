import { useEffect, useState, useRef } from 'react'
import { experimental_useEffectEvent as useEffectEvent } from 'react'
import './home.css'
import { RadioCard } from './components/RadioCard'
import { Multi } from './components/Multi'
import { Overlay } from './components/Overlay'
import { useGlobalContext } from './components/Context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { Helmet } from 'react-helmet'
import { SvgTeam } from './components/SvgTeam'
import { useLocation } from 'react-router-dom'
import * as temp from './stats.json'
import Ably from 'ably/promises'
import { SvgRmu } from './components/SvgRmu'
import { ref, set, remove, onValue, off } from 'firebase/database'
import { database } from './firebaseConfig'

function App() {
	const {
		isLoading,
		setIsLoading,
		copy,
		setCopy,
		setPostDone,
		postDone,
		url,
		setUrl,
		selected,
		link,
		setLink,
		isLandscape,
	} = useGlobalContext()

	const [stats, setStats] = useState([])
	const [playSite, setPlaySite] = useState(false)
	const location = useLocation()
	const compId = new URLSearchParams(location.search).get('compId')
	const matchId = new URLSearchParams(location.search).get('matchId')
	const test = new URLSearchParams(location.search).get('test')
	const local = new URLSearchParams(location.search).get('local')

	useEffect(() => {
		if (test === 1 || test === '1') {
			setPlaySite(true)
		} else {
			setPlaySite(false)
		}
	}, [test])

	const liveReq = () => {
		axios
			.post('https://twism.vercel.app/drid', null, {
				params: {
					matchId,
					compId,
				},
			})
			.then(function (response) {
				const res = Object.keys(response.data).map(
					(key) => response.data[key]
				)
				setStats(res)
			})
			.catch((err) => console.warn(err))
	}

	const testReq = () => {
		axios
			.post('https://twism.vercel.app/playsite', null, {
				params: {
					matchId,
					compId,
				},
			})
			.then(function (response) {
				const res = Object.keys(response.data).map(
					(key) => response.data[key]
				)
				setStats(res)
			})
			.catch((err) => console.warn(err))
	}

	useEffect(() => {
		const interval = setInterval(() => {
			if (playSite === true && local === 'false') {
				testReq()
			} else if (playSite === false && local === 'false') {
				liveReq()
			}
		}, 10000)

		return () => {
			clearInterval(interval)
		}
	}, [matchId, compId, playSite])

	useEffect(() => {
		console.log(local, matchId)
		if (local === 'true') {
			const databaseRef = ref(database, `matches/${matchId}`)

			const unsubscribe = onValue(databaseRef, (snapshot) => {
				const data = snapshot.val()
				setStats(data)
				console.log(data)
			})

			return () => off(databaseRef, 'value', unsubscribe)
		}
	}, [matchId, local])

	return (
		<>
			<Helmet>
				<style>
					{
						'body { background-image: none; background-color: transparent !important; }'
					}
				</style>
			</Helmet>
			<div className='container-3'>
				<SvgTeam stats={stats} local={local} matchId={matchId} />
			</div>
		</>
	)
	// } else if (isLandscape) {
	//   return (
	//     <>
	//       <Helmet>
	//         <style>
	//           {
	//             "body { background-image: none; background-color: transparent !important; }"
	//           }
	//         </style>
	//       </Helmet>
	//       <div className="new-container">
	//         <SvgRmu stats={stats} />
	//       </div>
	//     </>
	//   )
	// }
	// }
	// else if (stats[1] && selected === "Multi")
	//   return (
	//     <>
	//       <Helmet>
	//         <style>
	//           {
	//             "body { background-image: none; background-color: transparent !important; }"
	//           }
	//         </style>
	//       </Helmet>
	//       <div className="main-container">
	//         <div className="container-1">
	//           <Multi />
	//         </div>
	//         <div className="container-2">
	//           <Overlay />
	//         </div>
	//       </div>
	//     </>
	//   );
}

export default App
