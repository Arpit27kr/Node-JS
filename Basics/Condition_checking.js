const a=50;
var c=60;
const z=a+c;
console.log(z);
k='110';
p=110;

if(z===k) // it will check value and also data types will not match string 110 and integer 110.
{
    console.log("equal");

}
else if(z==k && z==p)  // Here we are using double equals(==) it will only compare values also matches for string and integer
{
    console.log("z is equal to p with integer data type ");

}
else{
    console.log("not equal");
}
