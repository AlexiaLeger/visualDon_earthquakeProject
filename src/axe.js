import * as d3 from 'd3';

const width = innerWidth;
const height = innerHeight;
const svg = d3.select('svg');

//axes
const margin = { top: 10, right: 90, bottom: 10, left: 90 },
    largeur = width - margin.left - margin.right,
    hauteur = height - margin.top - margin.bottom;

const x = d3.scaleLinear()
    .domain([1900, 2020])
    .range([margin.left, largeur]);

svg.append('g')
    .attr('transform', 'translate(0,'+hauteur+')')
    .call(d3.axisBottom(x)
        .tickFormat((d, i) => ['1900','1910', '1920','1930', '1940','1950', '1960','1970', '1980','1990', '2000','2010', '2020'][i])
    )
    .attr('stroke', 'black');