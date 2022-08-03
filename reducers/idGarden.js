export default function(idGarden = '', action){
    if(action.type == 'idGarden'){
        return action.idGarden
    } else {
        return idGarden
    }
}