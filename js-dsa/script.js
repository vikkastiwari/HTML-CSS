function getDistinctIntersection(arr1, arr2){
    const sett = new Set();
    let unique1 = arr1.forEach((el,i) => {
        if(arr2.indexOf(i) === -1){
            console.log(arr1[i]);
            sett.add(arr1[i]);
        }
    });
    let unique2 = arr2.filter(i => {
        if(arr1.indexOf(i) === -1) sett.add(arr1[i]);
    });
    console.log(sett);
};

let arr1=[1,1,1,2,2,3,1,1,5,5,5,4,3,4,4];
let arr2= [1,1,3,3,1,5,1,1,5,5,5,3,6,6];
getDistinctIntersection(arr1, arr2);