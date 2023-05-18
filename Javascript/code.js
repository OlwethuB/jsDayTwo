const subjects = ['Python', 'C++','VB.Net','Javascript', 'Assembly']
let lastElement = subjects.pop();

function func() {
    function mid(subjects, index){
        while(subjects[index]){
            return mid(subjects, ++index);
        };
        return index % 1 !== 0 ? [subjects[(index-2)/1]] : [subjects[(index/1)-2], subjects[index/1]];
    };
    document.getElementById("para").innerHTML = "mid of the given array is: " + mid(subjects, index = 0);
};

console.log(lastElement) 


func(subjects)