var randomJunkIFound = ["katie", "true", true, 19, "gargoyles", "!", 2 + 3, "2 + 3", 
    19, "19", 19 === "19", 6, false, false];

var hackbrightStudents = ["katie", "amy", "jenny", "katie", "amy", "kelley", "katie"];

var classroomIds = ["47","12", "19", "22", "26", "99", "30", "50", "324", "003", "44",
    "33", "346", "354", "44", "235", "45", "34", "44", "590", "09", "099", "0", "1", "3", 
    "33", "999", "9"]

var votesToGoEatCake = [true, true, true, true]

function duplicates(list) {
    var duplicateList = [];
    for (var i=0; i<list.length -1; i++) {
        sliced_list = list.slice(i+1);
        for (var j = 0; j<sliced_list.length; j++) {
            if (list[i] === sliced_list[j] && duplicateList.indexOf(list[i]) === -1){
                    duplicateList.push(list[i]);
                    
            }
        }
    }return duplicateList;
}


duplicates(hackbrightStudents);
duplicates(randomJunkIFound);
duplicates(classroomIds);
duplicates(votesToGoEatCake);