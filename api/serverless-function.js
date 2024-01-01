import { useGlobalContext } from '../src/components/Context'

const { setId } = useGlobalContext()
module.exports = (req, res) => {
    const searchParams = new URLSearchParams(req.url.split('?')[1])
    const id = searchParams.get('id')

    setId(id)

    res.status(200).send('Received id: ' + id)
}