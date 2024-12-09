import { useEffect, useState, useRef } from 'react'
import { experimental_useEffectEvent as useEffectEvent } from 'react'
import Handler from './components/Handler'
import * as temp from './stats.json'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useParams, useSearchParams } from 'react-router-dom'

function App() {

    return (
        <>
            <Routes>
                <Route path="/" element={<Handler />} />
                {/* <Route path="/match/:matchId" element={<MatchDetailsPage />} /> */}
                {/* <Route path="*" element={<NotFoundPage />} /> */}
            </Routes>
        </>
    )
}

export default App
