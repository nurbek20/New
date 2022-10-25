const { Router } = require('express')
const verifyToken = require('../middleware/verify')
const { reg, auth } = require('../middleware/auth_reg')
const { create_info, get_all_infos, get_all_personal_infos, update_info, delete_info } = require('../middleware/infos')
let router = Router()

router
    .post('/registration', async(req, res) => {
        reg(req, res)
    })

    .post('/authorization', async(req, res) => {
        auth(req, res)
    })

    .get('/info-list', async(req, res) => {
        get_all_infos(req, res)
    })

    .get('/info-list-personal', verifyToken, async(req, res)=> {
        get_all_personal_infos(req, res)
    })

    .post('/info-create', verifyToken, async(req, res) => {
        create_info(req, res)
    })

    .put('/info-update/:id', verifyToken, async(req, res) => {
        update_info(req, res)
    })

    .delete('/info-delete/:id', verifyToken, async(req, res) => {
        delete_info(req, res)
    })

module.exports = router