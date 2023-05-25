<?php
    $name=$_POST['name'];
    $registerno=$_POST['registerno'];
    $mobileno=$_POST['mobileno'];
    $email=$_POST['email'];
    $founddate=$_POST['founddate'];
    $lostdate=$_POST['lostdate'];
    $foundplace=$_POST['foundplace'];
    $lostplace=$_POST['lostplace'];
    $itemdescription=$_POST['itemdescription'];
    $conn=new mysqli('localhost','root','','details');
    if($conn->connect_error){
        die('Connection Failed:'.$conn->connect_error);
    }else{$stmt=$conn->prepare("insert into details(name,registerno,mobileno,emailid,founddate,lostdate,foundplace,lostplace,itemdescription)
        values(?,?,?,?,?,?,?,?,?)");
    $stmt->bind_param("ssissssss",$name,$registerno,$mobileno,$emailid,$founddate,$lostdate,$foundplace,$itemdescription);
$stmt->execute();
echo "submitted successfully...";
$stmt->close();
$conn->close();}
    
?>