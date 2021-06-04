import ajax from './ajax'

export const reqLogin=(username,password)=>ajax('/login',{username,password},'POST')

export const videoDesc=(count)=>ajax('/video/desc',{count},'GET')

