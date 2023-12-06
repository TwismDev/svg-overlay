import { useEffect } from "react";
import { experimental_useEffectEvent as useEffectEvent } from "react";
import "./home.css";
import { RadioCard } from "./components/RadioCard";
import { Multi } from "./components/Multi";
import { Overlay } from "./components/Overlay";
import { useGlobalContext } from "./components/Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { Helmet } from "react-helmet";

function App() {
  const {
    compId,
    setCompId,
    stats,
    setStats,
    isLoading,
    setIsLoading,
    matchId,
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
  } = useGlobalContext();

  let queryParams = new
    URLSearchParams(window.location.search)
  setMatchId(queryParams.get('matchId'))
  
  const handleMatchIdChange = (e) => {
    // console.log(e.target.value);
    setMatchId(e.target.value);
  };
  const handleCompIdChange = (e) => {
    // console.log(e.target.value);
    setCompId(e.target.value);
  };

  function Post() {
    if (selected === "Single") {
      axios
        .post("https://twism.vercel.app/ids", null, {
          params: {
            matchId,
          },
        })
        .then(function (response) {
          setCopy(response.data);
          setLink(response.data);
          var res = Object.keys(response.data).map(function (key) {
            return response.data[key];
          });
          setStats(res);
        })
        .catch((err) => console.warn(err));
    } else if (selected === "Multi") {
      axios
        .post("https://twism.vercel.app/drid", null, {
          params: {
            matchId,
          },
        })
        .then(function (response) {
          setLink(response.data);
          setCopy(response.data);
          var res = Object.keys(response.data).map(function (key) {
            return response.data[key];
          });
          setStats(res);
        })
        .catch((err) => console.warn(err));
    } else if (selected === "Rmu") {
      axios
        .post("https://twism.vercel.app/rmu", null, {
          params: {
            compId,
            matchId,
          },
        })
        .then(function (response) {
          setLink(response.data);
          var res = Object.keys(response.data).map(function (key) {
            return response.data[key];
          });
          setStats(res);
        });
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
        axios
          .post("https://twism.vercel.app/ids", null, {
            params: {
              matchId,
            },
          })
          .then(function (response) {
            setCopy(response.data);
            setLink(response.data);
            var res = Object.keys(response.data).map(function (key) {
              return response.data[key];
            });
            setStats(res);
          })
          .catch((err) => console.warn(err));
    }, 10000);
    return () => {
      clearInterval(interval);
    };
  }, [isLoading, matchId]);

  const HandleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    Post();
  };

  // useEffect(() => {
  // 	const interval = setInterval(() => {
  // 		async function FetchData() {
  // 			await axios({
  // 				url: link,
  // 				method: 'GET',
  // 				dataType: 'json',
  // 			}).then((response) => {
  // 				var res = Object.keys(response.data).map(function (key) {
  // 					return response.data[key]
  // 				})
  // 				setIsLoading(false)
  // 				setStats(res)
  // 			})
  // 		}
  // 		FetchData()
  // 	}, 10000)
  // 	return () => clearInterval(interval)
  // }, [postDone, link])

  // if (!stats[0])
  //   return (
  //     <div className="scoreboard">
  //       <header className="App-header"></header>
  //       <div className="box">
  //         {/* <span className="text-center">login</span> */}
  //         <form>
  //           <div className="input-container">
  //             {selected === "Rmu" ? (
  //               <input
  //                 type="text"
  //                 value={compId}
  //                 onChange={handleCompIdChange}
  //                 key="1"
  //                 onKeyDown={(e) => {
  //                   if (e.key === "Enter") {
  //                     HandleSubmit(e);
  //                   }
  //                 }}
  //                 placeholder="ONLY FOR SINGLES KNCOCKOUT (Enter Comp ID)"
  //               />
  //             ) : (
  //               <div></div>
  //             )}
  //             <input
  //               type="text"
  //               value={matchId}
  //               key="2"
  //               onChange={handleMatchIdChange}
  //               onKeyDown={(e) => {
  //                 if (e.key === "Enter") {
  //                   HandleSubmit(e);
  //                 }
  //               }}
  //               placeholder="Enter Match ID. . . "
  //             />
  //             <label></label>
  //           </div>
  //         </form>
  //         <RadioCard />
  //         <button className="btn" onClick={HandleSubmit}>
  //           submit
  //           {isLoading === true ? (
  //             <FontAwesomeIcon
  //               icon={faSpinner}
  //               spin
  //               style={{
  //                 "--fa-primary-color": "#0d19c5",
  //                 "--fa-secondary-color": "#0d19c5",
  //                 "--fa-secondary-opacity": "0.4",
  //               }}
  //             />
  //           ) : (
  //             <div></div>
  //           )}
  //         </button>
  //       </div>
  //     </div>
  //   );
  // else if (
  //   (!stats[1] && stats[0] && selected === "Single") ||
  //   selected === "Rmu"
  // )
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
          <Overlay />
        </div>
      </>
    );
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

export default App;
