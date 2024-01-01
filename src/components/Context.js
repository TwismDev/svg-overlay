import React, { useContext, useState, useEffect } from 'react'
import * as Ably from 'ably'
import { AblyProvider, useChannel, usePresence } from 'ably/react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
	const [time, setTime] = useState(null)
	const [p1Name, setp1Name] = useState(null)
	const [p2Name, setp2Name] = useState(null)
	const [p1Score, setp1Score] = useState(null)
	const [p2Score, setp2Score] = useState(null)
	const [clockStatus, setClockStatus] = useState(null)
	const [frameCount, setFrameCount] = useState(null)
	const [url, setUrl] = useState(null)
	const [link, setLink] = useState()
	// const singleUrl = 'https://www.poolstat.net.au/livestream/multimatch?api=1&ids='
	// const multiUrl = 'https://www.poolstat.net.au/livestream/multimatch?api=1&drid='
	const [matchId, setMatchId] = useState('')
	const [compId, setCompId] = useState('')
	const [selected, setSelected] = useState('Single')
	const [isLoading, setIsLoading] = useState(false)
	const [postDone, setPostDone] = useState(false)
	const [message, setMessage] = useState()
	const [copy, setCopy] = useState('')
	const [stats, setStats] = useState([])

	const client = new Ably.Realtime('9zzpLg.YrD7jw:RCOMB9Lq4mkx0-5Zn99PFY4iKEA1WtvpBWG-5fRkv0M')
	const channel = client.channels.get('ids')

	useEffect(() => {
		function subscribe() {
			channel.subscribe(message => {
				if (message.data.matchId) {
					setMatchId(message.data.matchId)
				}
				if (message.data.compId) {
					setCompId(message.data.compId)
				}
			})
		}
		subscribe()

		return function cleanup() {
			channel.unsubscribe()
		}
	})

	return (
		<AppContext.Provider
			value={{
				p1Name,
				setp1Name,
				p2Name,
				setp2Name,
				p1Score,
				setp1Score,
				p2Score,
				setp2Score,
				clockStatus,
				setClockStatus,
				frameCount,
				setFrameCount,
				time,
				setTime,
				message,
				setMessage,
				isLoading,
				setIsLoading,
				stats,
				setStats,
				matchId,
				setMatchId,
				copy,
				setCopy,
				postDone,
				setPostDone,
				url,
				setUrl,
				selected,
				setSelected,
				link,
				setLink,
				compId,
				setCompId,
			}}>

			{children}

		</AppContext.Provider>

	)
}

const useGlobalContext = () => {
	return useContext(AppContext)
}

export { AppProvider, useGlobalContext }
