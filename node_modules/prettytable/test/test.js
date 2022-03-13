PrettyTable = require('../prettytable.js');

a = new PrettyTable();

// a.fieldNames(["City name", "Area", "Population", "ann"]);

// a.addRow(["Adelaide",1295, 1158259, 600.5])
// a.addRow(["Brisbane",5905, 1857594, 1146.4])
// a.addRow(["Darwin", 112, 120900, 1714.7])
// a.addRow(["Hobart", 1357, 205556, 619.5])
// a.addRow(["Sydney", 2058, 4336374, 1214.8])
// a.addRow(["Melbourne", 1566, 3806092, 646.9])
// a.addRow(["Perth", 5386, 1554769, 869.4])

// var table = a.toString();
// a.print();
// console.log(table);

a.csv("./test/test.csv");
a.print();
// var headers = ["name", "age", "city"];

// var rows = [
//         ["john", 22, "new york"],
//         ["elizabeth", 43, "chicago"],
//         ["bill", 31, "atlanta"],
//         ["mary", 18, "los angeles"]
//     ];

// a.create(headers, rows);
// a.print();

// a.json("./test/test.json");
// a.print();
// var h = a.html(attributes={"name":"my_table", "class":"red_table", "border":"1"});
// var h1 = a.html();
// console.log(h);
// console.log(h1);

// a.deleteRow(2);
// a.print();
// a.deleteRow(1);
// a.print();
// a.deleteRow(3);
// a.print();

// a.clearTable();
// a.print();

// a.addRow(["Darwin", 112, 120900, ]);
// a.print();

// a.deleteTable();
// a.print();

// a.sortTable("age");
// a.print();

// a.sortTable("age", true);
// a.print();
