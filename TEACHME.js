var steps = [
[ //*********************************** ADVANCED FUNCTIONS
        {
            f : function () {
                var a = randomInt(0, 6);
                var b = randomInt(0, 6);
                if (b === a) {
                    b += 2;
                }
                return "function hi (a, b) {\n\treturn a * b;\n}\n\nhi(" + a + ", " + b + ");";
            }
        },{
            f : function () {
                var a = randomInt(1, 5);
                var b = randomInt(2, 4);
                var c = randomInt(1, 2);
                return "function hi (a, b) {\n\tif (a < b) {\n\t\treturn a + b;\n\t} else {\n\t\treturn a * b;\n\t}\n}\n\nhi(" + a + ", " + b + ");";
            },
            times: 2
        },{
            f : function () {
                var a = randomInt(1, 5);
                var b = randomInt(1, 5);
                var c = randomInt(1, 3);
                var d = randomInt(2, 4);
                return "function hi (a, b) {\n\treturn a * b;\n}\n\nfunction hello (a, b) {\n\treturn a + b;\n}\n\nhi(" + c + ", " + d + ") + hello(" + a + ", " + b + ");";
            },
            timeoutTime: 70000
        },{
            f : function () {
                var a = randomInt(1, 4);
                var b = randomInt(2, 4);
                var c = randomInt(1, 5);
                return "function hi (a, b) {\n\treturn a * b;\n}\n\nfunction hello (a, b) {\n\treturn a + b;\n}\n\nvar a = hi(" + a + ", " + b + ");\nhello(a, " + c + ");";
            },
            timeoutTime: 70000
        },{
            f : function () {
                var a = randomInt(1, 4);
                var b = randomInt(2, 4);
                var c = randomInt(1, 5);
                return "function hi (a, b) {\n\treturn a * b;\n}\n\nfunction hello (a, b) {\n\treturn a + b;\n}\n\nhello(hi(" + a + ", " + b + "), " + c + ");";
            },
            timeoutTime: 70000
        },{
            f : function () {
                var a = randomInt(1, 5);
                var b = randomInt(2, 4);
                var c = randomInt(1, 2);
                return "function hi (a, b) {\n\treturn a * b;\n}\n\nfunction hello (a, b) {\n\treturn hi(a, b + " + c + ");\n}\n\nhello(" + a + ", " + b + ");";
            },
            timeoutTime: 90000
        }
    ]
];
