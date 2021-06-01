<?php
include "../../examples/local.php";
if (isset($_GET['id_tour'])) {
    $id = $_GET['id_tour'];
    $sql = "delete from tour where id_tour = $id";
    $total = $local->exec($sql);
    header('location:../../examples/tour.php');
}
if (isset($_GET['id_category'])) {
    $id = $_GET['id_category'];
    $sql = "delete from category where id_category = $id";
    $total = $local->exec($sql);
    header('location:../../examples/category.php');
}
if (isset($_GET['id_information'])) {
    $id = $_GET['id_information'];
    $sql = "delete from information where id_information = $id";
    $total = $local->exec($sql);
    header('location:../../examples/information.php');
}
if (isset($_GET['user'])) {
    $id = $_GET['user'];
    $sql = "delete from user where username = '$id'";
    $total = $local->exec($sql);
    header('location:../../examples/user.php');
}
if (isset($_GET['id_voucher'])) {
    $id = $_GET['id_voucher'];
    $sql = "delete from voucher where id_voucher = '$id'";
    $total = $local->exec($sql);
    header('location:../../examples/voucher.php');
}
if (isset($_GET['id_slide'])) {
    $id = $_GET['id_slide'];
    $sql = "delete from slide where id_slide = '$id'";
    $total = $local->exec($sql);
    header('location:../../examples/Slide.php');
}
if (isset($_GET['id_contact'])) {
    $id = $_GET['id_contact'];
    $sql = "delete from contact where id_contact = '$id'";
    $total = $local->exec($sql);
    header('location:../../examples/contact.php');
}
if (isset($_GET['id_postnews'])) {
    $id = $_GET['id_postnews'];
    $sql = "delete from postnews where id_post = '$id'";
    $total = $local->exec($sql);
    header('location:../../examples/postnews.php');
}
if (isset($_GET['id_image'])) {
    $id = $_GET['id_image'];
    $sql = "delete from images where id_image = '$id'";
    $total = $local->exec($sql);
    header('location:../../examples/image.php');
}
if (isset($_GET['id_cartfont'])) {
    $id = $_GET['id_cartfont'];
    $sql = "delete from cart where id_cart = '$id'";
    $total = $local->exec($sql);
    header('location:../../../../../DA1/success.php');
}
if (isset($_GET['id_comment'])) {
    $id = $_GET['id_comment'];
    $sql = "delete from comment where id_comment = '$id'";
    $total = $local->exec($sql);
    header('location:../../examples/comment.php');
}
if (isset($_GET['id_cart'])) {
    $id = $_GET['id_cart'];
    $sql = "delete from cart where id_cart = '$id'";
    $total = $local->exec($sql);
    header('location:../../examples/cart.php');
}