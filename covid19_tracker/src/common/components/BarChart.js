import React, { useRef, useEffect } from 'react'
import * as d3 from 'd3'

export default function BarChart({ width, height, data }) {
    const d3Chart = useRef()
    const margin = { top: 50, right: 30, bottom: 30, left: 120 }

    useEffect(() => {
        // clear SVG before rendering a new chart
        d3.selectAll('svg > *').remove()
        DrawChart(data, { width, height })
    }, [data, width, height])

    function DrawChart(data, dimensions) {
        const chartwidth = dimensions.width - margin.left - margin.right
        const chartheight = dimensions.height - margin.top - margin.bottom

        const svg = d3
            .select(d3Chart.current)
            .attr('width', chartwidth + margin.left + margin.right)
            .attr('height', chartheight + margin.top + margin.bottom)

        // x scale
        const x = d3
            .scaleBand()
            .domain(d3.range(data.length))
            .range([margin.left, chartwidth - margin.right])
            .padding(0.1)

        svg.append('g')
            .attr('transform', 'translate(0,' + chartheight + ')')
            .call(
                d3
                    .axisBottom(x)
                    .tickFormat((i) => data[i]['x_axis'])
                    .tickSizeOuter(0)
            )

        const max = d3.max(data, function (d) {
            return d['y_axis']
        })

        // y scale
        const y = d3
            .scaleLinear()
            .domain([0, max])
            .range([chartheight, margin.top])

        svg.append('g')
            .attr('transform', 'translate(' + margin.left + ',0)')
            .call(d3.axisLeft(y))

        // Draw bars
        svg.append('g')
            .selectAll('rect')
            .data(data)
            .join('rect')
            .attr('fill', function (d) {
                return d.color ? d.color : '#000000'
            })
            .attr('x', (d, i) => x(i))
            .attr('y', (d) => y(d['y_axis']))
            .attr('height', (d) => y(0) - y(d['y_axis']))
            .attr('width', x.bandwidth())
    }

    return <svg ref={d3Chart}></svg>
}
