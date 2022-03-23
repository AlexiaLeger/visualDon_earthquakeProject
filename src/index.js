import * as d3 from 'd3';

//récupération des données
import data from '../data/data.json';

//récupération svg
const svg = d3.select('#monSvg');

//marge du document
const margin = { top: 10, right: 40, bottom: 10, left: 40 },
    width = 600 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

svg.attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
