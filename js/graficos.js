
google.load("visualization", "1", {packages:["corechart"]});

google.setOnLoadCallback(desenhaTodos);
      
function desenhaLinha() {
	var data = google.visualization.arrayToDataTable([
		['Year', 'Sales', 'Expenses'],
		['2004',  1000,      400],
		['2005',  1170,      460],
		['2006',  660,       1120],
		['2007',  1030,      540]
	]);

	var options = {
		/*title: 'Company Performance'*/
		legend: {position: 'bottom'},
		series: [
			{color: '#26841E'},
			{color: '#FFBF00'},
			{color: '#0081BA'},
			{color: '#76D06E'},
			{color: '#FF8600'},
			{color: '#62ACFF'}
		],
		curveType: 'function'
	};

	var chart = new google.visualization.LineChart(document.getElementById('linha_chart_div'));
		chart.draw(data, options);
}

function desenhaBarra() {
	var data = google.visualization.arrayToDataTable([
		['Ano', 'Acidentes'],
		['2007', 128399],
		['2008', 141118],
		['2009', 158646],
		['2010', 183440],
		['2011', 192288],
		['2012', 184400],
		['2013', 88963]
	]);

	var options = {
		/*title: 'Company Performance',*/
		hAxis: {title: 'Ano', titleTextStyle: {color: 'red'}},
		legend: {position: 'bottom'},
		series: [
			{color: '#26841E'},
			{color: '#FFBF00'},
			{color: '#0081BA'},
			{color: '#76D06E'},
			{color: '#FF8600'},
			{color: '#62ACFF'}
		]
	};

	var chart = new google.visualization.ColumnChart(document.getElementById('barra_chart_div'));
	chart.draw(data, options);
}

function desenhaPizza() {
	var data = google.visualization.arrayToDataTable([
		['Causa do Acidente', 'Quantidade de Acidentes'],
		['Falta de atenção', 356500],
		['Outras', 336089],
		['Não guardar distância de segurança', 91313],
		['Velocidade incompatível', 79589],
		['Defeito mecânico em veículo', 41469],
		['Desobediência a sinalização', 40239],
		['Ingestão de álcool', 36915],
		['Animais na Pista', 30042],
		['Dormindo', 25779],
		['Ultrapassagem indevida', 23198],
		['Defeito na via', 16119]
	]);

	var options = {
	  /*title: 'My Daily Activities'*/
	  legend: {position: 'bottom'},
	  slices: [
		{color: '#26841E'},
		{color: '#FFBF00'},
		{color: '#0081BA'},
		{color: '#76D06E'},
		{color: '#FF8600'},
		{color: '#62ACFF'}
	  ]
	};

	var chart = new google.visualization.PieChart(document.getElementById('pizza_chart_div'));
	chart.draw(data, options);
}

function desenhaBarrasEmpilhadas() {

	var data = google.visualization.arrayToDataTable([
		['Ano', 'Morte', 'Lesões graves', 'Lesões leves', 'Ilesa', 'Sem informação'],
		['2007', 6189, 19661, 43075, 94645, 100131],
		['2008', 6291, 21079, 47031, 107429, 109782],
		['2009', 3936, 13221, 30204, 70708, 137201],
		['2010', 1, 9, 12, 37, 183440],
		['2011', 174, 631, 1464, 3532, 191560],
		['2012', 1407, 4657, 11697, 27512, 177424]
	]);
	
	var options = {
	  /*title: 'My Daily Activities'*/
	  legend: {position: 'bottom'},
	  colors: [
		'#26841E',
		'#FFBF00',
		'#0081BA',
		'#76D06E',
		'#FF8600',
		'#62ACFF'
	  ],
	  isStacked: true,
	};

	var chart = new google.visualization.AreaChart(document.getElementById('barraemp_chart_div'));
	chart.draw(data, options);

}

function desenhaTodos() {
	//desenhaLinha();
	desenhaBarrasEmpilhadas();
	desenhaBarra();
	desenhaPizza();
}
