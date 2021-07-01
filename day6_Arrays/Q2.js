let arr1=[1,2,4,0];
let arr2=[1,2,[4,0]];
function array_clone(arr) {
    let arr3=[]
    for (let i=0;i<arr.length;i++){
        arr3[i]=arr[i];
    }
    console.log(arr3);
}
array_clone(arr1);
array_clone(arr2);