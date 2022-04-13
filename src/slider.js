const width = innerWidth;
const height = innerHeight;

import * as d3 from 'd3';
import {
    sliderHorizontal
} from 'd3-simple-slider';
import data from '../data/data.json';

let nom = document.getElementById('nom');
let lieu = document.getElementById('lieu');
let mag = document.getElementById('mag');

let annee = data.map(d => d.Date.substring(6));
console.log(annee);

let slider = sliderHorizontal()
    .min(1900)
    .max(2020)
    .step(1)
    .width(width - 100)
    .displayValue(true)
    .on('onchange', (val) => {
        if (annee.includes(val.toString())) {
            console.log('Val is include');
            let element = data.find(el => el.Date.substring(6) == val);
            nom.textContent = element.AlternativeName;
            lieu.textContent = element.Location;
            mag.textContent = element.Mag;
        } else {
            nom.textContent = " – ";
            lieu.textContent = " – ";
            mag.textContent = " – ";
        }
    });




d3.select('#slider')
    .append('svg')
    .attr('width', width)
    .attr('height', '100%')
    .append('g')
    .attr('transform', 'translate(30,30)')
    .call(slider);