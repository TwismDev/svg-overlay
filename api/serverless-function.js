import { useGlobalContext } from '../src/components/Context'

export default async (req, res) => {
    const { id } = req.query
    const { setId } = useGlobalContext()
    setId(id)
    res.status.send('ID set successfully')
}