import Vizzu from 'https://cdn.jsdelivr.net/npm/vizzu@latest/dist/vizzu.min.js';
import ScrollyTelling from './scrollyTelling.js';
import data from './data.js';
import style from './style.js';

window.onbeforeunload = function () {
	window.scrollTo(0, 0);
}

function labelHandler(event) {
	let Year = parseFloat(event.data.text);
	if (!isNaN(Year) && Year > 1950 && Year < 2020 && Year % 5 != 0)
		event.preventDefault();
}

ScrollyTelling.init(Vizzu, "#scrollyTellingContainer", "#vizzuArticle",
	[

		chart => chart.animate({
			data: Object.assign(data, {
				filter: record => record.Function != 'Defense',
			}),
			config: {
				channels: {
					y: {
						set: ['Amount[B$]', 'Function'],
						range: {
							min: '0%',
							max: '100%'
						}
					},
					x: {
						set: ['Year']
					},
					color: 'Function'
				},
				title: 'U.S. Non-Defense R&D Budget by Functions',
				geometry: 'area'
			},
			style: style
		}),

		chart => {
			chart.on('plot-axis-label-draw', labelHandler);
			return chart.animate({
				config: {
					title: 'Share of Total Expenditures %',
					align: 'stretch'
				}
			});
		},

		chart => chart.animate({
			data: {
				filter: record => record.Function == 'Health' || record.Function == 'Space'
			},
			config: {
				title: 'Compare Space & Health',
				align: 'min',
				split: true
			}
		}),

		chart => chart.animate({
			data: {
				filter: record => record.Function != 'Defense',
			},
			config: {
				title: 'All Non-defense Functions Side-by-Side',
				align: 'min',
				split: true
			}
		}),

		chart => chart.animate({
			data: {
				filter: null,
			},
			config: {
				title: 'Show Defense Expenditures',
				split: false
			}
		}),

		chart => chart.animate({
			data: {
				filter: record => record.Function == 'Defense'
			},
			config: {
				title: 'Defense Expenditures',
				align: 'min'
			}
		}),

		chart => chart.animate({
			data: {
				filter: null,
			},
			config: {
				title: 'Total U.S. R&D Budget',
			}
		})

	], { scrollType: "animate" });


