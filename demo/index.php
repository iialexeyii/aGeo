<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>aSendForm</title>
	<script src="//code.jquery.com/jquery-1.11.3.min.js"></script>
	<!-- geo -->
		<?php define ('geoip', "../assets/geoIP/GeoIP.dat"); include_once '../assets/geoIP/contry.php'; ?>
		<script type="text/javascript">geoContry = '<?php echo getClientContry(); ?>'</script>
		<script type="text/javascript" src="../assets/jquery.geo.js"></script>
	<!-- geo -->

	
	<script src="scripts.js"></script>
	<link rel="stylesheet" type="text/css" href="bootstrap.css">
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
	<div class="page">
		<div class="center">
			<h1></h1>
			<h2></h2>
		</div>
	</div>
</body>
</html>