// first exersice
const combineArrays = ([first, second], b) => {
    return [first,...b, second];
 }

 console.log(combineArrays(["string", "valueToReplace"], ["vlueToreplaceWith"]));




 //second exersice

 const capitalizProposal= (proposal) => {
    return proposal 
    .map((proposal)=>proposal.toUpperCase())

 }

 console.log(capitalizProposal(['i am an skillwill student']))


 //third exercise

 const people = [
    {name:'lasha', age:30,},
    {name:'saba', age:20}, 
 ];

  const sortByage = people.sort(function(a,b) {
      return a.age - b.age;
  });

 console.log(sortByage)