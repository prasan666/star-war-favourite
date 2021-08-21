export interface Planet {
    climate: string,
    created: string,
    diameter: number,
    edited: string,
    films: any[],
    gravity: number,
    name: string,
    orbital_period: number,
    population: number,
    residents: any[],
    rotation_period: number,
    surface_water: number,
    terrain: string,
    url: string,
    isFavourite : boolean
}

export interface Planets {
    results: Planet[],
    count: number,
    next: string | null,
    previous: string | null
}