import {hpBar , object} from '../src/index.js';
test('lowHp test', () => {
    expect(hpBar({name: 'Маг', health: 10})).toBe('critical')
})
test('wounded test', () => {
    expect(hpBar({name: 'Маг', health: 30})).toBe('wounded')
})
test('heathly test', () => {
    const result = hpBar(object);
    expect(result).toBe('healthy')
})