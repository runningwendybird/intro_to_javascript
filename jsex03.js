var randomJunkIFound = ["katie", "true", true, 19, "gargoyles", "!", 2 + 3, "2 + 3", 
    19, "19", 19 === "19", 6, false, false];

var hackbrightStudents = ["katie", "amy", "jenny", "katie", "amy", "kelley", "katie"];


function duplicates(list) {
    var duplicateList = [];
    for (var i = 0; i< list.length - 1; i++) {
        // for ( j= i; list.slice(i); j++){
        for (var j = i + 1; j < list.length; j++) {
            if (list[i] === list[j]) {
                duplicateList.push(list[i]);
            }
        }

        
    return duplicateList; }
}

// duplicates(randomJunkIFound);
duplicates(hackbrightStudents);