//This code will recieve an array of objects and output results of 'name' depending
//upon fulfillment of parent dependancies.
//Note: not using built-in JavaScript functions was intentional.
    
let unsortedSteps = [
    {
        id: 1,
        name: "Date",
        dependencies: [],
    },
    {
        id: 2,
        name: "Place",
        dependencies: [],
    },
    {
        id: 3,
        name: "Airfare",
        dependencies: [1, 2],
    },
    {
        id: 4,
        name: "Hotel",
        dependencies: [1, 2],
    },
    {
        id: 5,
        name: "Trip insurance",
        dependencies: [3, 4],
    },
];

let i = 0, j = 0, k = 0;
let lenI = unsortedSteps.length, lenJ, lenK;
let result = [], resultIds = [];
let currentDependancy = [];
let matchIncrementor = 0;
let matchFlag = false;

for(; i < lenI; i++) 
{
    if(unsortedSteps[i].dependencies[0])
    {
        currentDependancy = unsortedSteps[i].dependencies;
        lenJ = resultIds.length;
        lenK = currentDependancy.length;
        j = 0;
        k = 0;
        matchIncrementor = 0;
        
        for(;;)
        {
            console.log("k: ", k);
            console.log("j: ", j);
        
            if(resultIds[j] == currentDependancy[k]) 
            {
                matchIncrementor++; 
                k++; 
                console.log("---MATCH--- ", resultIds[j]);
            }
            else k++;
            
            if(j == lenJ && k == lenK) break;
            if(k == lenK) {k = 0; j < lenJ && j++;}
        }
        if(matchIncrementor == lenK) matchFlag = true;
    }
    
    if(!unsortedSteps[i].dependencies[0] || matchFlag) 
    {
        result.push(unsortedSteps[i].name);
        resultIds.push(unsortedSteps[i].id);
        matchFlag = false;
    }
    
    console.log("_______________________ Iteration: ", i);
    console.log("_______________________ Dependancies: ", currentDependancy);
}

console.log("result: ", result);
