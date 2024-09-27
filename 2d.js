//  Write a function that multiply each number under 70 by 2
let d = (arr) => {
    const results = arr.map(num => {
        if(num < 70){
            return num * 2;
        }
        else {
            return num;
        }
    });
    return results;
}

const ages = [25, 31, 42, 77];

//display results to console
console.log("Ages before: " + ages);
console.log("Ages after: " + d(ages));