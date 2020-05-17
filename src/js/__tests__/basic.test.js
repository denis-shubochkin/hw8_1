import Team from '../Team';
import Character from '../Character';

test('add pers successfull', () => {
  const pB = new Character('Лучник');
  const team = new Team();
  team.add(pB);
  const exp = [{ name: 'Лучник' }];
  const res = team.toArray();
  expect(res).toEqual(exp);
});

test('add pers error', () => {
  const pB = new Character('Лучник');
  const team = new Team();
  team.add(pB);
  expect(() => team.add(pB)).toThrowError();
});

test('add several pers', () => {
  const pB = new Character('Лучник');
  const pS = new Character('Мечник');
  const team = new Team();
  team.addAll(pB, pS, pB);
  const exp = [{ name: 'Лучник' }, { name: 'Мечник' }];
  const res = team.toArray();
  expect(res).toEqual(exp);
});
