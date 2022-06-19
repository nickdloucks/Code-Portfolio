import * as d3 from 'd3';

let dataset = [];

let maxDp = d3.max(dataset);
let minDp = d3.min(dataset);

let scale = d3.scaleLinear();
scale.domain([minDp, maxDp]);
scale.range([10, 150])

const svg = d3.select('#bar-chart').append('svg')
svg.selectAll('rect')
    .data(dataset)
    .enter()
    .append('rect')
    .attr('x', (_d, i) => i * 30)
    .attr('y', (d) => h - (d * 50));