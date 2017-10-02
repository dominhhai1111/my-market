<!DOCTYPE html>
<html>
<head>
	<title>Tank Game</title>
	<link rel="stylesheet" type="text/css" href="../public/css/tank-game.css">
	<link rel="stylesheet" type="text/css" href="../public/bootstrap-3.3.7/css/bootstrap.css">
	<link rel="stylesheet" type="text/css" href="../public/bootstrap-3.3.7/css/bootstrap.min.css">
</head>
<body>
    <img id = "tankU" class = "pctbImg" src = "../../resources/upload/tank_up.png" alt="" hidden>
    <img id = "tankR" class = "pctbImg" src = "../../resources/upload/tank_turn_right.png" alt="" hidden>
    <img id = "tankD" class = "pctbImg" src = "../../resources/upload/tank_down.png" alt="" hidden>
    <img id = "tankL" class = "pctbImg" src = "../../resources/upload/tank_turn_left.png" alt="" hidden>
    <img id = "effectBlast01" class = "pctbImg" src = "{{asset('../resources/upload/effect_blast_1.png')}}" alt="" hidden>
    <img id = "effectBlast02" class = "pctbImg" src = "../resources/upload/effect_blast_2.png" alt="" hidden>
    <img id = "effectBlast03" class = "pctbImg" src = "../resources/upload/effect_blast_3.png" alt="" hidden>
    <img id = "effectBlast04" class = "pctbImg" src = "../resources/upload/effect_blast_4.png" alt="" hidden>
    <img id = "effectBlast05" class = "pctbImg" src = "../resources/upload/effect_blast_5.png" alt="" hidden>
    <canvas id = "myCanvas"></canvas>
	<script src="../public/js/tank-game.js" type="text/javascript" charset="utf-8"></script>
	<script src="../public/jquery-3.2.1/jquery-3.2.1.min.js" type="text/javascript" charset="utf-8"></script>
	<script src="../public/bootstrap-3.3.7/js/bootstrap.min.js" type="text/javascript" charset="utf-8"></script>
</body>
</html>