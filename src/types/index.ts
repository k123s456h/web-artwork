export interface Coordinate {
  x: number,
  y: number
}

export interface WindowSize {
  width: number,
  height: number,
}


export interface Shape{
  draw(context: CanvasRenderingContext2D, options: any) : void,
  animate(options: any): void,
  resize(options: any) : void,
}

export interface Circle extends Shape {
  coord: Coordinate,
  radius: number,
}

export interface Rectangle extends Shape {
  coord: Coordinate,
  size: Coordinate,
  angle: number,
}

export interface orbitType
{
  name: string,
  perihelion: number,
  aphelion: number,
  eccentricity: number,
  period: number,
  velocity: number,
  inclination: number,
  obliquity: number,
  temperature: number,
  rotationPeriod: number,
  moons: number,
  ring: boolean,
  mass: number,
  density: number,
  diameter: number
}

export interface orbitsDataType
{
  [key: string]: orbitType
}
