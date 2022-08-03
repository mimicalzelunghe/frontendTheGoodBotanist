export default function(climate = '', action){

    if(action.type == 'climate'){
        return action.climate     
    } else {
        return climate
    }
}