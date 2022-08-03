export default function(gardenName = '', action){
    if(action.type == 'gardenName'){
        return action.gardenName
    } else {
        return gardenName
    }
}