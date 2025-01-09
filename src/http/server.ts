import fastify from "fastify";

const app = fastify()

app.get('/', () => {
    return 'Servidor ok'
})

app.listen({port: 8080}).then(() => {
    console.log('Server is running')
})