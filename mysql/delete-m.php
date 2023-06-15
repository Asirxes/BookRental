<?php
$servername = "localhost";
//$servername = "172.0.0.2";
$username = "user2";
$password = "pass";
$database = "test1";
$conn = new mysqli($servername, $username, $password, $database);
if ($conn->connect_error) {
 die("Database connection failed: " . $conn->connect_error);
}
 echo "Databse connected successfully, username " . $username . "<br><br>";
 $sql = "DELETE FROM `test1` WHERE email = 'MONIKA@gmail.com' text1 = 'Najlepsze'";

 $conn->query($sql);
 echo "Table test1 updated";
 $conn->close();
?>