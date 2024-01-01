import { useGlobalContext } from '../src/components/Context'

const { setId } = useGlobalContext()

export default async (req, res) => {
    const { id } = req.query
    setId(id)
    res.status.send(resonse.text)
}