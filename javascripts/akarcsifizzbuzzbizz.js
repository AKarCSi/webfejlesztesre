function akarcsifizzbuzzbizz(i){
  		var milegyen=0;
			msg="";
			if ( i % 3 ==0) { msg="fizz"; milegyen=1}
			if ( i % 5 ==0) {msg= msg + "buzz"; milegyen=1}
			if ( i % 7 ==0) {msg= msg + "bizz"; milegyen=1 }
			if(milegyen==0) {return i;}
			else {return msg;}
			
		}
(function(){
	var eredmenyek;
	for(i=1;i<=100;i++){
		eredmenyek=akarcsifizzbuzzbizz(i);
		document.write("<b>" + i + "</b> ");
		document.write("<b>" + eredmenyek + "</b> </br>");
	}	


}).call(this);
