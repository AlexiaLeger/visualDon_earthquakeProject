import * as d3 from 'd3';

//récupération des données
import data from '../data/data.json';
import map from '../data/map.json';



//récupération svg

const width = innerWidth;
const height = innerHeight;

const svg = d3.select("svg").attr("width", width).attr("height", height);
// Map and projection
const projection = d3.geoMercator()
    .center([0, 10])
    .scale([width / (2 * Math.PI)])
    .translate([width / 2, height / 2]);


const path = d3.geoPath().projection(projection);

// Data and color scale
const myColor = d3.scaleLinear().domain([50, 100])
    .range(["white", "blue"])


    // Draw the map
svg.append("g")
.selectAll("path")
.data(map.features)
.enter()
.append("path")
// draw each country
.attr("d", path)
// set the color of each country
.attr("fill", "lightgreen");

