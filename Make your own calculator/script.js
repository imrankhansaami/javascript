var num1 = prompt("Enter First Number");
        var num2 = prompt("Enter Second Number");

        num1 = parseInt(num1, 10);
        num2 = parseInt(num2, 10);

        var sum, sub, mul, div;

        var sum = num1 + num2;
        document.write("Addition = " + sum);

        var sub = num1 - num2;
        document.write("<br> Subtraction = " + sub);

        var mul = num1 * num2;
        document.write("<br> Multipication = " + mul);

        var div = num1 / num2;
        document.write("<br> Division = " + div);