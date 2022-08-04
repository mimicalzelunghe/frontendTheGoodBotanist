export default function(token = '', action){
    if(action.type == 'token'){
        return action.token
    } else {
        return token
    }
}