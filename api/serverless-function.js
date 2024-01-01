import { handleId } from './context'

module.exports = (req, res) => {
    const searchParams = new URLSearchParams(req.url.split('?')[1])
    const id = searchParams.get('id')

    handleId(id)

    res.status(200).send('Received id: ' + id)
}