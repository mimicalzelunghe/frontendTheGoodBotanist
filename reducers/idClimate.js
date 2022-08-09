export default function(idClimate = '', action){
    if(action.type == 'idClimate'){
        return action.idClimate
    } else {
        return idClimate
    }
}