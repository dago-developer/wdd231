document.getElementById("all").addEventListener("click", function() {
    filterClasses("all");
});

document.getElementById("cse").addEventListener("click", function() {
    filterClasses("cse");
});

document.getElementById("wdd").addEventListener("click", function() {
    filterClasses("wdd");
});

function filterClasses(filter) {
    
    const allClasses = document.querySelectorAll('.all-classes li');
    allClasses.forEach(function(classItem) {
        classItem.classList.remove('selected');
    });

    if (filter === "all") {
        allClasses.forEach(function(classItem) {
            classItem.classList.add('selected');
        });
    } else {
        allClasses.forEach(function(classItem) {
            if (classItem.classList.contains(filter)) {
                classItem.classList.add('selected');
            }
        });
    }
}
