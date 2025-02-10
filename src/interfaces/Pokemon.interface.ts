export interface Pokemon {
    id: number
    name: string
    types: string[]
    stats: {
      hp: number
      attack: number
      defense: number
      speed: number
    }
    height: number
    weight: number
    abilities: string[]
    evolutionChain: number[]
  }

