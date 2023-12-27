import { useEffect, useState } from "react"
import { experimental_useEffectEvent as useEffectEvent } from "react"
import "./home.css"
import { RadioCard } from "./components/RadioCard"
import { Multi } from "./components/Multi"
import { Overlay } from "./components/Overlay"
import { useGlobalContext } from "./components/Context"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"
import axios from "axios"
import { Helmet } from "react-helmet"
import { SvgTeam } from './components/SvgTeam'
import { useLocation } from 'react-router-dom'

function App() {
  const {
    compId,
    setCompId,
    isLoading,
    setIsLoading,
    copy,
    setCopy,
    setPostDone,
    postDone,
    setMatchId,
    url,
    setUrl,
    selected,
    link,
    setLink,
  } = useGlobalContext()

  const [stats, setStats] = useState([])
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const matchId = searchParams.get('matchId')
  const appPost = () => {
    const interval = setInterval(() => {
      axios
        .post("https://twism.vercel.app/ids", null, {
          params: {
            matchId,
          },
        })
        .then(function (response) {
          setCopy(response.data)
          setLink(response.data)
          var res = Object.keys(response.data).map(function (key) {
            return response.data[key]
          })
          setStats(res)
        })
        .catch((err) => console.warn(err))
    }, 10000)

    return () => {
      clearInterval(interval)
    }
  }

  appPost()

  return (
    <>
      <Helmet>
        <style>
          {
            "body { background-image: none; background-color: transparent !important; }"
          }
        </style>
      </Helmet>
      <div className="container-3">
        <SvgTeam stats={stats} />
      </div>
    </>
  )
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
