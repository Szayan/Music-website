<?php  
//Get the name of the uploaded file.
$filename = $_FILES['file']['name'];
//Choose where to save the file.
$location = "audio/".$filename;



if (move_uploaded_file($_FILES['file']['tmp_name'], $location) ) {
    echo "Success";

} else {
    echo "failure";
}


?>