export default function(sunshine = '', action){
    if(action.type == 'sunshine'){
        return action.sunshine
    } else {
        return sunshine
    }
}