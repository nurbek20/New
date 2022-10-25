import { combineReducers } from 'redux'
import { crud_info } from './crud_info'
import { auth_reg } from './auth_reg'
import { token } from './token'
import { info_list } from './info_list'
import { personal_info_list } from './personal_info_list'

export const rootReducer = combineReducers({
    auth_reg,
    crud_info,
    info_list,
    token,
    personal_info_list
})