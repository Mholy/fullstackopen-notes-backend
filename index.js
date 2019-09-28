require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const Note = require('./models/note')

app.use(express.static('build'))
app.use(cors())
app.use(bodyParser.json())

app.get('/api', (req, res) => {
    res.send('<h1>Hello World</h1>')
})

app.get('/api/notes', (req, res) => {
    Note.find({}).then(notes => {
        res.json(notes.map(note => note.toJSON()))
    })
})

app.get('/api/notes/:id', (req, res) => {
    Note.findById(req.params.id).then(note => {
        res.json(note.toJSON())
    })
})

app.delete('/api/notes/:id', (req, res) => {
    const id = Number(req.params.id)
    notes = notes.filter(note => note.id !== id)

    res.status(204).end()
})

const generateId = () => {
    const maxId = notes.length > 0 ? Math.max(...notes.map(note => note.id)) : 0

    return maxId + 1
}

app.post('/api/notes', (req, res) => {
    const body = req.body

    if (!body.content) {
        // return is crucial here
        return res.status(400).json({
            // 400 - bad request
            error: 'content missing',
        })
    }

    const note = new Note({
        content: body.content,
        important: body.important || false,
        date: new Date(),
    })

    note.save().then(savedNote => {
        res.json(savedNote.toJSON())
    })
})

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
