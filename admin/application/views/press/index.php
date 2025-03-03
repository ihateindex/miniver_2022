<?php
require_once _VIEW_DIR . 'head.php';
require_once _VIEW_DIR . 'container_top.php';
?>
<div class="page-title pt-3 pb-2 mb-3 border-bottom d-flex justify-content-between">
    <h1 class="h2">PRESS LIST</h1>
    <a href="<?= _ROOT_URL ?>press/add/" role="button" class="btn btn-outline-primary btn-lg">추가</a>
</div>
<div class="container-fluid">
    <?php
    if (count($list) > 0) {
    ?>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">타이틀</th>
                    <th scope="col">썸네일</th>
                    <th scope="col">링크</th>
                    <th scope="col">날짜</th>
                    <th scope="col">노출여부</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <?php
                foreach ($list as $val) {
                ?>
                    <tr>
                        <td><?= $val['idx'] ?></td>
                        <td><?= $val['press_title'] ?></td>
                        <td><img src="<?= _PRESS_UPLOAD_URL . $val['idx'] . '/press_thumb/' . $val['press_thumb'] ?>" style="width: 16rem;"></td>
                        <td><?= $val['press_link'] ?></td>
                        <td><?= $val['press_date'] ?></td>
                        <td><?= $val['press_visible'] ? "노출" : "비노출" ?></td>
                        <td>
                            <a href="<?= _ROOT_URL ?>press/edit/<?= $val['idx'] ?>" class="btn btn-danger" role="button">수정</a>
                        </td>
                    </tr>
                <?php
                } // end foreach
                ?>
            </tbody>
        </table>
    <?php
        // if end 게시물 
    } else {
        echo "<p>등록된 아이템이 없습니다.</p>";
    }
    ?>
</div>
<?php
require_once _VIEW_DIR . 'container_bottom.php';
require_once _VIEW_DIR . 'tail.php';
?>