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
    $sql = "SELECT id, email, text1 FROM test1 
   ORDER BY email";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
    echo "id: " . $row["id"]. " - Email: " . $row["email"]. " " . $row["text1"]. "<br>";
    }
    } else {
    echo "0 results";
    }
    $conn->close();
   ?> 
