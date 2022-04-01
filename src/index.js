import * as d3 from 'd3';

//récupération des données
import data from '../data/data.json';
import map from '../data/map.json';



//récupération svg

const width = innerWidth;
const height = innerHeight;

const svg = d3.select("svg").attr("width", width).attr("height", height);
// Map and projection
const projection = d3.geoOrthographic()
    .center([0, 10])
    .scale([width / (1.9*Math.PI)])
    .translate([width / 2, height / 2]);


const path = d3.geoPath().projection(projection);

// Draw the map
svg.append("g")
    .selectAll("path")
    .data(map.features)
    .enter()
    .append("path")
    // draw each country
    .attr("d", path)
    // set the color of each country
    .attr("fill", "white");

//rotation
enableRotation();

const config = {
    speed: 0.005,
    verticalTilt: -30,
    horizontalTilt: 0
}

function enableRotation() {
    d3.timer(function (elapsed) {
        projection.rotate([config.speed * elapsed - 120, config.verticalTilt, config.horizontalTilt]);
        svg.selectAll("path").attr("d", path);
        drawMarkers();
    });
} 

//dessine les tremblements de terre
drawMarkers();
const markerGroup = svg.append('g');

function drawMarkers() {
    const markers = markerGroup.selectAll('circle')
        .data(data);
    markers
        .enter()
        .append('circle')
        .merge(markers)
        .attr('cx', d => projection([d.Longitude, d.Latitude])[0])
        .attr('cy', d => projection([d.Longitude, d.Latitude])[1])
        .attr('fill', d => {
            const coordinate = [d.Longitude, d.Latitude];
            gdistance = d3.geoDistance(coordinate, projection.invert(center));
            return gdistance > 1.57 ? 'none' : 'steelblue';
        })
        .attr('r', 7);

    markerGroup.each(function () {
        this.parentNode.appendChild(this);
    });
}