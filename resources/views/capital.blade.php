<!DOCTYPE html>
<html>
<head>
	<title>Hello world</title>
	<link rel="stylesheet" type="text/css" href="../css/hello.css">
	<link rel="stylesheet" type="text/css" href="../bootstrap-3.3.7/css/bootstrap.css">
	<link rel="stylesheet" type="text/css" href="../bootstrap-3.3.7/css/bootstrap.min.css">
</head>
<body>
	<div>
		<div class="menu">
			@section("capital")
			<ul>
				@foreach($list_capital as $capital)
					<li>{{$capital}}</li>
				@endforeach
			</ul>
			@show
		</div>
		<button type="button" onclick="show()">Don't click me</button>
		<p class="notice"></p>
		<script type="text/javascript">
			function show() {
				var xhttp = new XMLHttpRequest();
				xhttp.onreadystatechange = function(){
				 	if (this.readyState == 4 && this.status == 200) {
				 		document.getElementsByClassName("notice")[0].innerHTML = this.responseText;
				 	}
				};
				xhttp.open("GET", "capital/getText", true);
				xhttp.send();
			};
		</script>
	</div>
	<script src="../jquery-3.2.1/jquery-3.2.1.min.js" type="text/javascript" charset="utf-8"></script>
	<script src="../bootstrap-3.3.7/js/bootstrap.min.js" type="text/javascript" charset="utf-8"></script>
</body>
</html>