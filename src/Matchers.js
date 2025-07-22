export const characters = [
  {name: 'мечник', health: 10},
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
];
export function sort(array) {
    const newArray = [...array];
    newArray.sort((a,b) => {
      return b.health - a.health
    })
    return newArray;
}
console.log(sort(characters));