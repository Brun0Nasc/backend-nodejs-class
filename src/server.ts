import express, {Request, Response} from 'express'
import { Sequelize } from 'sequelize'

const sequelize = new Sequelize('postgres://root:root@localhost:5432/db_avaliacao')

sequelize.authenticate().then(() => {
    console.log('Db connection OK!')
}).catch(e => {
    console.log('Db connction Error: ', e)
})

const app = express()

app.get('/', (req: Request, res: Response) => {
    res.send('OK')
})

app.listen(3030, () => {
    console.log('Server running')
})