<?php
include 'validator.php';

header('Access-Control-Allow-Origin: *');
date_default_timezone_set('Europe/Moscow');

$data=json_encode(array('flag'=>true));

function check_coords($x, $y, $r)
{
    // 3 четверть
    if ($x <= 0 && $y <= 0) {
        return $x >= -($r / 2) && $y >= -$r;
    }

    if ($x >= 0 && $y >= 0) {
        return $x * $x + $y * $y <= $r * $r;
    }
    // 4 четверть
    if ($x >= 0 && $y <= 0) {
        return checkTriangle($x, $y, $r);
    }
    // 1 четверть
    return false;
}

$current_time = date("H:i:s");
$starting_time = microtime(true);



if (isset($_POST["x"]) && isset($_POST["y"]) && isset($_POST["r"])) {
    $validator = new Validator;

    if ($validator->validate($_POST["x"], $_POST["y"], $_POST["r"])) {
        $x = intval($_POST["x"]);
        $y = floatval($_POST["y"]);
        $r = intval($_POST["r"]);

        $checked_dot = check_coords($x, $y, $r) ? "попадание!" : "промах!";
        $flagg=check_coords($x,$y,$r) ? "true" : "false";

        $finish_time = round((microtime(true) - $starting_time) * 1000000, 2);
        

       
        $data=array("flag"=>$flagg,"data"=>"
        <tr>
            <td width='10%'>$x</td>
            <td width='10%'>$y</td>
            <td width='10%'>$r</td>
            <td width='20%'>$current_time</td>
            <td width='30%'>$finish_time</td>
            <td width='40%'>$checked_dot</td>
        </tr> ");

        echo json_encode($data);
    } else {
        exit("<tr><td colspan=6 id='error'>Серверу переданы неверные данные! Проверьте, что все данные введены!</td></tr>");
    }
} else {
    exit(1);
}

function checkTriangle($x, $y, $r)
{
    $a1 = ($r - $x) * (-$r - 0) - (0 - $r) * (0 - $y);
    $a2 = (0 - $x) * (0 + $r) - (0 - 0) * (-$r - $y);
    $a3 = (0 - $x) * (0 - 0) - ($r - 0) * (0 - $y);
    if (($a1 >= 0 && $a2 >= 0 && $a3 >= 0) || ($a1 <= 0 && $a2 <= 0 && $a3 <= 0)) {
        return true;
    } else {
        return false;
    }
}
;

?>