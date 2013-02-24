(function() {

  $().ready(function() {
   
  
    module("FizzBuzzBizz tesztek szam kiirasa");
    test("1==1", function() {
      return equal(akarcsifizzbuzzbizz(1), 1);
    });
	test("2==2", function() {
      return equal(akarcsifizzbuzzbizz(2), 2);
    });
	test("3==fizz", function() {
      return equal(akarcsifizzbuzzbizz(3), "fizz");
    });
	test("5==buzz", function() {
      return equal(akarcsifizzbuzzbizz(5), "buzz");
    });
	test("7==bizz", function() {
      return equal(akarcsifizzbuzzbizz(7), "bizz");
    });
	test("15==fizzbuzz", function() {
      return equal(akarcsifizzbuzzbizz(15), "fizzbuzz");
    });
	test("21==fizzbizz", function() {
      return equal(akarcsifizzbuzzbizz(21), "fizzbizz");
    });
	test("35==buzzbizz", function() {
      return equal(akarcsifizzbuzzbizz(35), "buzzbizz");
    });
    
  });

}).call(this);
