import express, { Application, Request, Response } from 'express'

const app: Application = express()
const port = 9000

app.get('/', async (req: Request, res: Response) => {
    return res.send('Hello World!')
})

// try {
app.listen(port, (): void => {
    console.log(`connected successfully on http://localhost:${port}`)
})
// } catch (error: any) {
//     console.error(`Error occured: ${error.message}`)
// }
