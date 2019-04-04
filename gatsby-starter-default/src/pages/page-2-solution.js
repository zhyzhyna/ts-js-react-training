import React from "react"
import Exercise from "../exercises/arrays/filter-map-exercise"

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let result = numbers.filter(n => n % 2 === 0).map(n => n * 2)

export const solution = `
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let result = numbers.filter(n => n % 2 === 0)
  .map(n => n * 2)
`
const SecondPageSolution = () => (
  <Exercise
    result={result}
    solution={solution}
    prevPage={{
      url: "/page-2",
      title: "Exercise",
    }}
  />
)

export default SecondPageSolution
