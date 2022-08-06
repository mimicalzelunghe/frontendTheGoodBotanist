export default function(plotId = '', action){

    if(action.type == 'plotId'){
        return action.plotId     
    } else {
        return plotId
    }
}