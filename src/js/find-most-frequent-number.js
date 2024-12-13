export function findMostFrequentNumber(arr) {
  const frequencyMap = {}; // Объект для хранения частоты чисел
  // Подсчитываем количество вхождений каждого числа в массив
  arr.forEach(num => {
    frequencyMap[num] = (frequencyMap[num] || 0) + 1;
  });
  // Находим число с максимальной частотой
  let mostFrequent = null;
  let maxFrequency = 0;

  for (const num in frequencyMap) {
    if (frequencyMap[num] > maxFrequency) {
      maxFrequency = frequencyMap[num];
      mostFrequent = num;
    }
  }
  return mostFrequent;
}
