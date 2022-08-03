export default function(soil = '', action){

    if(action.type == 'soil'){
        return action.soil     
    } else {
        return soil
    }
}