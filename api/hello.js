export default function handler(req, res) {
    const { name = 'World' } = res.query
    return res.send('Hello ${name}!')
}
