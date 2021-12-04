import { task1, task2 } from './handler.js'

const result = task1('testInput.txt')
if (result != 7) throw new Error(`${result} not 7`)
const result2 = task2('testInput.txt')
if (result2 != 5) throw new Error(`${result2} not 5`)