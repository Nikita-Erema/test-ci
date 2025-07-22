export const object = {name: 'Маг', health: 90};
export function hpBar(object) {
    if (object.health > 50) {
        return 'healthy'
    } else if (object.health <= 50 && object.health >= 15) {
        return 'wounded'
    } else {
        return 'critical'
    } 
}
console.log(hpBar(object));