(function() {
    var result = document.getElementsByClassName('screen');
    var clear = document.getElementsByClassName('clear');
    var keys = document.querySelectorAll('#calculator span');
    result[0].innerHTML = '';

    function stack1() {
        this.arry = [];
    }
    stack1.prototype.unshift = function(arg) {
        this.arry.unshift(arg);
    };
    stack1.prototype.pop = function(arg) {
        this.arry.pop(arg);
    };
    var stack = new stack1();
    for (var i = 0; i < keys.length; i++)
        keys[i].onclick = function() {
            var value = this.innerHTML;
            var reg = /^\d$/;
            var length = stack.arry.length;
            if (value.match(reg)) {
                stack.unshift(value);
                result[0].innerHTML += value;
            } else if (value == 'C') {
                result[0].innerHTML = '';
                stack.arry = [];
            } else if (value == '+') {
                result[0].innerHTML += value;
                stack.unshift(value);
            } else if (value == '=') {
                result[0].innerHTML = '';
                if (stack.arry[0] == '+') {
                    var jisuan = calculate(stack.arry, length - 1);
                    stack.pop();
                    result[0].innerHTML += jisuan;
                    result[0].innerHTML += '+';
                    stack.arry.unshift(jisuan);
                    stack.arry.unshift('+');
                } else {
                    var jisuan = calculate(stack.arry, length);
                    stack.arry.unshift(jisuan);
                    result[0].innerHTML += jisuan;
                }
            }
        }

    function calculate(arry, length) {
        var string = '';
        for (var i = 0; i < length; i++) {
            string += arry.pop();
        }
        return eval(string);
    }
})();
