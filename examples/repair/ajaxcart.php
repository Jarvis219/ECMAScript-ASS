<?php
include "../../examples/local.php";
$status = $_POST['statuss'];
$id = $_POST['id'];
$sql = "UPDATE cart SET cart_status = '$status' WHERE id_cart LIKE '$id'";
// echo $sql;
$total = $local->prepare($sql);
if ($total->execute()) {
    echo "Thay đổi trạng thái thành công";
} else {
    echo "Thay đổi trạng thái thất bại!";
}
// echo $_POST['statuss'];