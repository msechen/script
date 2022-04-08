var parse = require('csv-parse/lib/sync');
var fs = require('fs');

var PrettyTable = function () {
    // Skeleton structure of table with list of column names, row and max width of each column element
    this.table = {
        'columnNames': [],
        'rows': [],
        'maxWidth': []
    };
    this.version = '0.3.1';
};

// Define list of columns for the table
PrettyTable.prototype.fieldNames = function (names) {
    this.table.columnNames = names;
    for (var i = 0; i < names.length; i++) {
        this.table.maxWidth.push(names[i].length);
    }
};

// Add a single row to the table
PrettyTable.prototype.addRow = function (row) {
    this.table.rows.push(row);
    for (var i = 0; i < row.length; i++) {
        if (row[i].toString().length > this.table.maxWidth[i]) {
            this.table.maxWidth[i] = row[i].toString().length;
        }
    }
};

// Single function to create table when headers and array of rows passed
PrettyTable.prototype.create = function (headers, rows) {
    // Add table headers
    this.fieldNames(headers);

    // Add rows one by one
    for (var i = 0; i < rows.length; i++) {
        this.addRow(rows[i]);
    }
};

// Convert the table to string
PrettyTable.prototype.toString = function () {
    var finalTable = '';
    var columnString = '| ';
    var rowString = '';
    var lengthDifference = '';

    // Draw a line based on the max width of each column and return
    var drawLine = function (table) {
        var finalLine = '+';
        for (var i = 0; i < table.maxWidth.length; i++) {
            finalLine += Array(table.maxWidth[i] + 3).join('-') + '+';
        }
        return finalLine;
    };

    // If no columns present, return empty string
    if (this.table.columnNames.length === 0) {
        return finalTable;
    }

    // Create the table header from column list
    for (var i = 0; i < this.table.columnNames.length; i++) {
        columnString += this.table.columnNames[i];
        // Adjust for max width of the column and pad spaces
        if (this.table.columnNames[i].length < this.table.maxWidth[i]) {
            lengthDifference = this.table.maxWidth[i] - this.table.columnNames[i].length;
            columnString += Array(lengthDifference + 1).join(' ');
        }
        columnString += ' | ';
    }
    finalTable += drawLine(this.table) + '\n';
    finalTable += columnString + '\n';
    finalTable += drawLine(this.table) + '\n';

    // Construct the table body
    for (i = 0; i < this.table.rows.length; i++) {
        var tempRowString = '| ';
        for (var k = 0; k < this.table.rows[i].length; k++) {
            tempRowString += this.table.rows[i][k];
            // Adjust max width of each cell and pad spaces as necessary
            if (this.table.rows[i][k].toString().length < this.table.maxWidth[k]) {
                lengthDifference = this.table.maxWidth[k] - this.table.rows[i][k].toString().length;
                tempRowString += Array(lengthDifference + 1).join(' ');
            }
            tempRowString += ' | ';
        }
        rowString += tempRowString + '\n';
    }
    // Remove newline from the end of the table string
    rowString = rowString.slice(0, -1);
    // Append to the final table string
    finalTable += rowString + '\n';
    // Draw last line and return
    finalTable += drawLine(this.table) + '\n';
    return finalTable;
};

// Write the table string to the console
PrettyTable.prototype.print = function () {
    console.log(this.toString());
};

// Write the table string to the console as HTML table formats
PrettyTable.prototype.html = function (attributes) {
    // If attributes provided, add them as inline properties, else create default table tag
    var htmlTable = '';
    if (typeof attributes == 'undefined') {
        htmlTable = '<table>';
    }
    else {
        var attributeList = [];
        for (var key in attributes) {
            attributeList.push(key + '=\'' + attributes[key] + '\'');
        }
        var attributeString = attributeList.join(' ');
        htmlTable = '<table ' + attributeString + '>';
    }

    // Define the table headers in <thead> from table column list
    var tableHead = '<thead><tr>';
    for (var i = 0; i < this.table.columnNames.length; i++) {
        var headerString = '<th>' + this.table.columnNames[i] + '</th>';
        tableHead += headerString;
    }
    tableHead += '</tr></thead>';
    htmlTable += tableHead;

    // Construct the table body from the array of rows
    var tableBody = '<tbody>';
    for (i = 0; i < this.table.rows.length; i++) {
        var rowData = '<tr>';
        for (var k = 0; k < this.table.rows[i].length; k++) {
            var cellData = '<td>' + this.table.rows[i][k] + '</td>';
            rowData += cellData;
        }
        rowData += '</tr>';
        tableBody += rowData;
    }
    // Close all tags and return
    tableBody += '</tbody>';
    htmlTable += tableBody;
    htmlTable += '</table>';

    return htmlTable;
};

// Create the table from a CSV file
PrettyTable.prototype.csv = function (filename) {
    var csvdata = fs.readFileSync(filename, 'utf8');
    var records = parse(csvdata);

    var lineCounter = 0;
    for (var i = 0; i < records.length; i++) {
        if (lineCounter === 0) {
            this.fieldNames(records[i]);
            lineCounter += 1;
        }
        else {
            this.addRow(records[i]);
            lineCounter += 1;
        }
    }
};

// Create the table from a JSON file
PrettyTable.prototype.json = function (filename) {
    var rowKeys = '';
    var rowVals = '';
    var jsondata = JSON.parse(fs.readFileSync(filename, 'utf8'));
    for (var i = 0; i < jsondata.length; i++) {
        rowKeys = Object.keys(jsondata[i]);
        rowVals = [];
        for (var k = 0; k < rowKeys.length; k++) {
            rowVals.push(jsondata[i][rowKeys[k]]);
        }
        if (this.table.columnNames.length === 0) {
            this.fieldNames(rowKeys);
        }
        this.addRow(rowVals);
    }
};

// Sort the table given a column in ascending or descending order
PrettyTable.prototype.sortTable = function (colname, reverse) {
    // Find the index of the column given the name
    var colindex = this.table.columnNames.indexOf(colname);

    // Comparator method which takes the column index and sort direction
    var Comparator = function ( a, b) {
        if (typeof reverse === 'boolean' && reverse === true) {
            if (a[colindex] < b[colindex]) {
                return 1;
            }
            else if (a[colindex] > b[colindex]) {
                return -1;
            }
            else {
                return 0;
            }
        }
        else {
            if (a[colindex] < b[colindex]) {
                return -1;
            }
            else if (a[colindex] > b[colindex]) {
                return 1;
            }
            else {
                return 0;
            }
        }
    }
    // Sort array of table rows
    this.table.rows = this.table.rows.sort(Comparator);
};

// Delete a single row from the table given row number
PrettyTable.prototype.deleteRow = function (rownum) {
    if (rownum <= this.table.rows.length && rownum > 0) {
        this.table.rows.splice(rownum - 1, 1);
    }
};

// Clear the contents from the table, but keep columns and structure
PrettyTable.prototype.clearTable = function () {
    this.table.rows = [];
};

// Delete the entire table
PrettyTable.prototype.deleteTable = function () {
    this.table = {
        'columnNames': [],
        'rows': [],
        'maxWidth': []
    };
};

module.exports = PrettyTable;
