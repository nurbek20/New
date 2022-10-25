export const API = 'http://localhost:5050'
// export const API = 'https://mytodo12345.herokuapp.com'
// export const API = 'https://news-zamir.herokuapp.com'
// export const API = 'https://news-page-zamir.herokuapp.com'

export const Routes={
    get:{
        infos:'/info-list',
        personal_infos: '/info-list-personal'
    },
    post:{
        reg:'/registration',
        auth:'/authorization',
        create:'/info-create',
    },
    put:{
        update:'/info-update/'  // + id required
    },
    delete:{
        delete:'/info-delete/' // + id required
    }
}