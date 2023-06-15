<?php
// example of READ COMMITTED transaction isolation level (default one)
$servername = "localhost";
//$servername = "172.0.0.2";
$username = "user1";
$password = "pass";
$database = "test1";
$conn = new mysqli($servername, $username, $password, 
$database);
if ($conn->connect_error) {
 die("Database connection failed: " . $conn->connect_error);
}
 echo "Databse connected successfully, username " . $username . "<br><br>";
 $conn->query("SET SESSION TRANSACTION ISOLATION LEVEL READ COMMITTED");
 $conn->begin_transaction();
 echo "Before sleep<br>";

 $sql = "SELECT id, email, text1 FROM test1 WHERE email = 'Rafal@gmail.com'";
 $result = $conn->query($sql);
 if ($result->num_rows > 0) {
 // output data of each row
 while($row = $result->fetch_assoc()) {
 echo "id: " . $row["id"]. " - Name: " . $row["email"]. " " . $row["text1"]. "<br>";
 }
 } else {
 echo "0 results<br>";
 }
 sleep(20);
 echo "After sleep<br>";
 $sql = "SELECT id, email, text1 FROM test1 WHERE email = 'Rafal@gmail.com'";
$result = $conn->query($sql);
 if ($result->num_rows > 0) {
 // output data of each row
 while($row = $result->fetch_assoc()) {
 echo "id: " . $row["id"]. " - Email: " . $row["email"]. " " . $row["text1"]. "<br>";
 }
 } else {
 echo "0 results<br>";
 }
 $conn->commit();
 $conn->close();
?>