const twoSum = function(nums, target){
    let map= new Map();
    for (let i = 0; i < nums.length, i++) {
        let num1 = nums[i];
        let num2 =target - num1;
        if(map.has(num2)){
            return [i, map.get(num2)];
        }
        map.set(num1, i);
    }
};


//map example 

const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]


const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]
