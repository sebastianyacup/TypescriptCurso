import * as  G from "./Group"
import { Point } from "./Point"
import {Animales,Gatos,Perros}from "./Animales"

console.log(Animales,Gatos,Perros)
const point = new Point(1,2)
const group = new G.default(1,"test")

console.log(G.defaultGroups.admin);