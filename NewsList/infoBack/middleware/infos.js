const Info = require('../models/Info')

const create_info = async(req, res) => {
    const { title, description, author, datetime } = req.body
    const { user_id } = req.user
    const info = {
        title,
        description,
        author,
        datetime,
        user_id,
    }
    await Info.create(info)
    res.status(201).send({
        message: 'Info Created',
    })
}

const get_all_infos = async(req, res) => {   
    const infos = await Info.find()
    res.send(infos)
}

const get_all_personal_infos = async (req, res) => {
    const { user_id } = req.user;
    const infos = await Info.find({ user_id });
    res.send(infos);
};

const update_info = async(req, res) => {
    const { user_id } = req.user
    const { id } = req.params
    let data = req.body
    let info = await Info.findById(id)

    if (info.user_id === user_id) {
        info.title = data.title
        info.description = data.description
        info.author = data.author
        info.datetime = data.datetime
        info.status = data.status
        info.save()
        res.status(201).send({
            message: 'Info updated',
        })
    } else {
        res.status(403).send({
            message: 'Some error'
        })
    }
}

const delete_info = async(req, res) => {
    const { id } = req.params
    const { user_id } = req.user
    let info = await Info.findById(id)
    if (info.user_id === user_id) {
        await Info.findByIdAndDelete(id)
        res.status(201).send({
            message: 'Delete success',
        })
    } else {
        res.status(403).send({
            message: 'Some error'
        })
    }
}

module.exports = {
    create_info,
    get_all_infos,
    get_all_personal_infos,
    update_info,
    delete_info,
}