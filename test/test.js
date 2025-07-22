import {hpBar , object} from '../src/index.js';
import {characters, sort} from '../src/Matchers.js'
test('lowHp test', () => {
    expect(hpBar({name: 'Маг', health: 10})).toBe('critical')
})
test('wounded test', () => {
    expect(hpBar({name: 'Маг', health: 30})).toBe('wounded')
})
test('heathly test', () => {
    const result = hpBar(object);
    expect(result).toBe('healthy')
});
test('sort test', () => {
    const array = sort(characters);
    expect(array[0].health > array[1].health).toEqual(true)
})