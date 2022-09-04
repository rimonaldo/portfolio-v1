// import { socketService } from '@/services/socket.service.js'
import { httpService } from './http.service'
import axios from 'axios'

const BASE_URL = process.env.NODE_ENV === 'production'
    ? '/api/'
    : '//127.0.0.1:5173/api/'



export const itemService = {
  query,
  getById,
  save,
  remove,
  getEmptyItem,
}

async function query(filterBy = null) {
  return await httpService.get(`item`, filterBy)
}

async function getById(itemId) {
  return await httpService.get(`item/${itemId}`)
}

async function save(item) {
  if (item._id) {
    // socketService.emit('item updated', item)
    return await httpService.put(`item/${item._id}`, item)
  } else {
    return await httpService.post(`item`, item)
  }
}

async function remove(itemId) {
  return await httpService.delete(`item/${itemId}`)
}

function getEmptyItem() {
  return {
   
  }
}

function _makeId(length = 8) {
  var text = ''
  var possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return text
}
