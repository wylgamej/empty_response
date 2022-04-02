import ADODB from 'node-adodb';
import * as readline from 'readline-sync';

const connection = ADODB.open("Provider=Microsoft.Jet.OLEDB.4.0;Data Source=jumise.mdb;");

const params = [
	'year',
	'area',
	'rooms',
	'district'
];

function formedQuery() {
	let queryParams = [];
	for (let i = 0; i < params.length; i++) {
		queryParams[i] = readline.question('Enter favorite ' + params[i] + '\n');
	}
	return queryParams;
}

async function findMistSuitable(data, params) {
	let query = 'SELECT * FROM Квартиры WHERE ' + params[0] + '>=' + data[0] + ' AND ' + params[1] + '>=' + data[1] + ' AND ' + params[2] + '=' + data[2];
	let response = await connection.query(query);
	console.log(response);
}

let data = formedQuery();

findMistSuitable(data, params);