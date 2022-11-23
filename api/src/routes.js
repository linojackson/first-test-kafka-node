import { Router } from "express";

const routes = Router()

routes.post('/certifications', async (req, res) => {

    await req.producer.send({
        topic: 'test-topic',
        messages: [
            { value: 'Hello world mas pt-br' }
        ],
    })
    return res.json({ok: true })
})

export default routes