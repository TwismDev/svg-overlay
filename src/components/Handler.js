import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import '../home.css';
import { SvgTeam } from './SvgTeam';
import { useGlobalContext } from './Context';
import { ref, onValue, off } from 'firebase/database';
import { database } from '../firebaseConfig';
import axios from 'axios';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { SvgRmu } from './SvgRmu';

export default function Handler() {
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
		landscape,
		setLandscape,
		stats,
		setStats,
		setMatchId,
		setCompId,
		setLocal,
		playSite,
		setPlaySite,
		setTest,
	} = useGlobalContext();

	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const compId = searchParams.get('compId');
	const matchId = searchParams.get('matchId');
	const test = searchParams.get('test');
	const local = searchParams.get('local');

	useEffect(() => {
		setCompId(compId);
		setMatchId(matchId);
		setLocal(local);
		setTest(test);
	}, [compId, matchId, local, test]);

	useEffect(() => {
		if (test === '1' || test === 1) {
			setPlaySite(true);
		} else {
			setPlaySite(false);
		}
	}, [test]);

	const liveReq = () => {
		axios
			.post(
				`https://scrbd.co-stream.live/api/livescores?compId=${compId}&matchId=${matchId}`,
				null,
				{
					params: { matchId, compId },
				}
			)
			.then((response) => {
				const res = Object.keys(response.data).map((key) => response.data[key]);
				setStats(res);
			})
			.catch((err) => console.warn(err));
	};

	const testReq = () => {
		axios
			.post(
				`https://scrbd.co-stream.live/api/playsite?compId=${compId}&matchId=${matchId}`,
				null,
				{
					params: { matchId, compId },
				}
			)
			.then((response) => {
				const res = Object.keys(response.data).map((key) => response.data[key]);
				setStats(res);
			})
			.catch((err) => console.warn(err));
	};

	useEffect(() => {
		const interval = setInterval(() => {
			if (playSite === 'false' || playSite == null) {
				testReq();
			} else if (
				(!playSite && local === 'false') ||
				(!playSite && local == null)
			) {
				liveReq();
			} else if (local === 'true' || local === true) {
				getDatabase();
			}
		}, 10000);
	
		return () => {
			clearInterval(interval);
		};
	}, [matchId, compId, playSite, local]);
	

	useEffect(() => {
			const databaseRef = ref(database, `matches/${matchId}/landscape`);

			const unsubscribe = onValue(databaseRef, (snapshot) => {
				const data = snapshot.val();
				if (data != null) {
					setLandscape(data);
				}
			});

			return () => off(databaseRef, 'value', unsubscribe);
	}, [matchId]);

	const getDatabase = () => {
		const databaseRef = ref(database, `challenges/${matchId}`);

			const unsubscribe = onValue(databaseRef, (snapshot) => {
				const data = snapshot.val();
				setStats(data);
				console.log(data)
			});

			return () => off(databaseRef, 'value', unsubscribe);
	}

	const [animationClass, setAnimationClass] = useState('');

	useEffect(() => {
		setAnimationClass('container-exit');
		const timeout = setTimeout(() => setAnimationClass('container-enter'), 500); // Matches transition timing

		return () => clearTimeout(timeout);
	}, [landscape]);

	useEffect(() => {
		console.log('Current landscape value:', landscape);
	}, [landscape]);

	return (
		<>
			<Helmet>
				<style>
					{
						'body { background-image: none; background-color: transparent !important; }'
					}
				</style>
			</Helmet>
			<div
				className={`container ${
					landscape === true ? 'container-3' : 'container-4'
				} ${animationClass}`}
			>
				{landscape === false ? (
					<SvgTeam />
				) : (
					// <SvgRmu />

					<SvgRmu />
				)}
			</div>
		</>
	);
}
