<?php
include "../../examples/local.php";
$status = $_POST['statuss'];
$id = $_POST['id'];
$sql = "update contact set contact_status = '$status' where id_contact like '$id'";
$total = $local->prepare($sql);
if ($total->execute()) {
    echo "Thay đổi trạng thái thành công";
} else {
    echo "Thay đổi trạng thái thất bại!";
}
// echo $_POST['id'];