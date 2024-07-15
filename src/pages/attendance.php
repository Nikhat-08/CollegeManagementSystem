<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_FILES['pdfFile'])) {
    $con = mysqli_connect("localhost", "root", "", "timetable");

    $filename = $_FILES["pdfFile"]["name"];
    $tempfile = $_FILES["pdfFile"]["tmp_name"];
    $folder = "timetable/pdfs/" . $filename;

    $sql = "INSERT INTO `pdfs` (`pdf`) VALUES ('$filename')";

    if ($filename == '') {
        echo "
            <div class='alert alert-danger' role='alert'>
                <h4 class='text-center'>Blank not allowed</h4>
            </div>
        ";
    } else {
        $result = mysqli_query($con, $sql);
        move_uploaded_file($tempfile, $folder);
        echo "
            <div class='alert alert-success' role='alert'>
                <h4 class='text-center'>Upload PDF</h4>
            </div>
        ";
    }
} else {
    echo json_encode(["message" => "Invalid request"]);
}
?>
