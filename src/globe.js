import * as d3 from 'd3';

//récupération des données
import data from '../data/data.json';
import map from '../data/map.json';

//récupération svg
const width = innerWidth;
const height = innerHeight - 350;

const svg = d3.select("svg").attr("width", width).attr("height", height);
const markerGroup = d3.select('svg').append('g').attr("id", "markers");
const config = {
    speed: 0.005,
}
// Map and projection
const projection = d3.geoOrthographic()
    .scale([width / (1.9 * Math.PI)])
    .center([0, 10])
    .translate([width / 2, height / 2]);
const path = d3.geoPath().projection(projection);
const center = [width / 2, height / 2];


drawMarkers();

// Draw the map
svg.append("g")
    .attr("id", "globe")
    .selectAll("path")
    .data(map.features)
    .enter()
    .append("path")
    // draw each country
    .attr("d", path)
    // set the color of each country
    .attr("fill", "grey");

//rotation
function enableRotation(vertical, horizontal) {
    d3.timer(function (elapsed) {
        projection.rotate([vertical, horizontal]);
        svg.selectAll("path").attr("d", path);
        drawMarkers();
    });
}

//dessine les tremblements de terre
function drawMarkers() {
    let donnees = rendCoordonnee();
    //console.log(projection(donnees[1].longitude)[1]);

    const markers = markerGroup.selectAll('circle');
    markers
        .data(donnees)
        .join(enter => enter.append('circle')
            .merge(markers)
            .attr('cx', d => projection([d.longitude, d.latitude])[0])
            .attr('cy', d => projection([d.longitude, d.latitude])[1])
            .attr('fill', d => {
                const coordinate = [d.longitude, d.latitude];
                const gdistance = d3.geoDistance(coordinate, projection.invert(center));
                return gdistance > 1.57 ? 'none' : 'red';
            })
            .attr('r', 8));

    markerGroup.each(function () {
        this.parentNode.appendChild(this);
    });
}

function rendCoordonnee() {
    const coordonee = data.map(d => {
        let ligne = {
            "latitude": d.Latitude,
            "longitude": d.Longitude
        }
        return ligne;
    })
    return coordonee;
}

//zoom sur le tremblement
function zoomTremblement() {
    d3.select('svg')
        .call(zoom.scaleBy, 1.2);
}

let zoom = d3.zoom()
    .on('zoom', handleZoom);

function handleZoom(e) {
    let t = e.transform;
    d3.select("#globe")
    .attr("transform","translate(" + [t.x, t.y] + ")scale(" + t.k + ")" );

    d3.select("#markers")
    .attr("transform","translate(" + [t.x, t.y] + ")scale(" + t.k + ")" );
}

export { enableRotation, zoomTremblement }