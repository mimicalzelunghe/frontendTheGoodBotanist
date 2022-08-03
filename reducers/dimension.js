export default function(dimension = '', action){

    if(action.type == 'dimension'){
        return action.dimension     
    } else {
        return dimension
    }
}