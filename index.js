
function superbowlWin(recordList) {
    const win = recordList.find(record => {
        return record.result === 'W' 
     
    }); 
    if (win == undefined) {
        return undefined 
    }
    return win.year;
    
}





/*

If win = undefined 




compare w to something in object. 

access key in object 


what

*/