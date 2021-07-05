
export interface IDataIPlanet {
    results: IPlanet[];
}

export interface IPlanet {
    id : number,
    name: string,
    diameter: string,
    climate: string,
    population: number,
    residents: IDataIPeople
}

export interface IDataIPeople {
    id: number;
}