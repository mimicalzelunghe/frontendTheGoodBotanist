export default function(plotName = '', action){
    if(action.type == 'plotName'){
        return action.plotName
    } else {
        return plotName
    }
}