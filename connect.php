<?php 
    $username = $_POST['Username'];
    $email = $_POST['Email'];
    $password = $_POST['Password'];
    $conn = new mysqli('localhost','root','','htmltest');
    if($conn->connect_error){
        echo "$conn->connect_error";
        die("Connection Failed : ". $conn->connect_error);
    } else {
        $stmt = $conn->prepare("insert into html(Username, Email, Password) values(?, ?, ?)");
        $stmt->bind_param("sss", $username, $email, $password);
        if($stmt->execute()){
            header('Location: login.html');
            echo '<script>displayMessage()</script>';
        }
        $stmt->close();
        $conn->close();
    }
    header("Location: valid.php?var=" . urlencode($username));
    header("Location: valid.php?var=" . urlencode($password));
?>