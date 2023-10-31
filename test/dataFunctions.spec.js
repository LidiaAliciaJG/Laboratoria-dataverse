import { computeStats, filterData } from '../src/dataFunctions.js';
//import { data as fakeData } from './data.js';
import { dataset as fakeDataset } from './data.js';
import { dataset2 as fakeDataset2 } from './data.js';

describe('Función computeStats:', () => {

  describe('Cantidad de peliculas', () => {
    it('should return 2', () => {
      expect(computeStats(fakeDataset).numMovies).toBe(2);
    });
    it('should return 3', () => {
      expect(computeStats(fakeDataset2).numMovies).toBe(3);
    });
  });

  describe('Promedio de aprobación', () => {
    it('should return 82%', () => {
      expect(computeStats(fakeDataset).criticMovies).toBe(82);
    });
    it('should return 68.7%', () => {
      expect(computeStats(fakeDataset2).criticMovies).toBe(68.7);
    });
  });

});



const filterByType = 'type';
const valueType = 'Comedia Romántica';
const filterByTemp = 'temporality';
const valueTemp = 'actual';

describe('Función filterData:', () => {
  it('should return Love to Hate You', () => {
    const expected = fakeDataset.find(item => item.id === 'love-to-hate-you');
    const result = filterData(fakeDataset, filterByTemp, valueTemp);
    expect(result).toEqual([expected]);
  });
  it('should return La la land', () => {
    const expected = fakeDataset2.find(item => item.id === 'la-la-land');
    const result = filterData(fakeDataset2, filterByType, valueType);
    expect(result).toEqual([expected]);
  });
});