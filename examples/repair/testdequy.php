<?php
include "../../examples/local.php";
$sql = "select * from comment join user on user.username=comment.username where id_tour = 43 and (id_parent = 4 or id_comment =4)";
$total = $local->query($sql)->fetchAll();
// print_r($total);
$category = array();
// $categories[] = $row;
function showCategories($categories, $parent_id = 0, $char = '')
{
    foreach ($categories as $key => $item) {
        // Nếu là chuyên mục con thì hiển thị
        if ($item['id_parent'] == $parent_id) {
            echo '<div class="grid grid-cols-8 mb-5">';
            echo ' <div class="col-span-1 items-center">';
            echo '<img class="" src="./content/image/user.png" alt="">';
            echo '<span class="px-3">' . $item['fullname'] . '</span>';
            echo '</div>';
            echo ' <div class="col-span-7 py-1">';
            echo '<div class="bg-white py-1 px-5">';
            echo ' <div class="flex">';
            echo '<div class="">';
            echo '<i class="fas fa-star text-yellow-300"></i>';
            echo '</div>';
            echo '</div>';
            echo ' <p class="py-2">' . $char . $item['content_comment'] . "</p>";

            echo ' <span class="px-2 text-sm "><i class="fas fa-user-clock px-1"></i>25/03/2021</span>';
            echo '</div>';
            echo ' <div class="bg-white ml-2 mt-2 px-5 py-2">';
            echo '<div class="flex items-center">
           <img class="w-10" src="./content/image/user.png" alt="">';
            echo ' <span class="px-5">Tên admin</span>';
            echo '<span class="bg-yellow-400 px-1">Quản trị viên</span>';
            echo '</div>';
            echo '<p class="py-2">Cảm ơn bạn đã chọn tour của chúng tôi</p>';
            echo ' <a href="" class="text-blue-500">Trả lời</a>';
            echo '<span class="px-2 text-sm "><i class="fas fa-user-clock px-1"></i>25/03/2021</span>';
            echo '</div>
            </div>
        </div>';
            // Xóa chuyên mục đã lặp
            unset($categories[$key]);

            // Tiếp tục đệ quy để tìm chuyên mục con của chuyên mục đang lặp
            showCategories($categories, $item['id_comment'], $char .  $item['id_comment'] . ':');
        }
    }
}
?>
<?php showCategories($total); ?>