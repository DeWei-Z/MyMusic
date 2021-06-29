import ajax from './ajax'

export const reqLogin=(username,password)=>ajax('/login',{username,password},'POST')

export const reqLike=(src,userID,tag)=>ajax('/api/like',{src,userID,tag},'POST')
export const reqUnlike=(src,userID,tag)=>ajax('/api/unlike',{src,userID,tag},'POST')

export const reqUser=(username)=>ajax('/userInfo',{username},'GET')

export const videoDesc=(count)=>ajax('/video/desc',{count},'GET')

