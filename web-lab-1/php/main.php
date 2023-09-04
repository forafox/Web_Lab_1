<?php
include 'validator.php';

header('Access-Control-Allow-Origin: *');
date_default_timezone_set('Europe/Moscow');

function check_coords($x, $y, $r)
{
    // 3 четверть
    if ($x <= 0 && $y <= 0) {
        return $x >= -($r / 2) && $y >= -$r;
    }
    // 4 четверть
    if ($x >= 0 && $y <= 0) {
        return TRUE;
    }
    // 1 четверть
    if ($x >= 0 && $y >= 0) {
        return $x * $x + $y * $y <= $r * $r;
    }
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

        $finish_time = round((microtime(true) - $starting_time) * 1000000, 2);

        exit("
            <tr>
                <td width='10%'>$x</td>
                <td width='10%'>$y</td>
                <td width='10%'>$r</td>
                <td width='20%'>$current_time</td>
                <td width='30%'>$finish_time</td>
                <td width='40%'>$checked_dot</td>
            </tr> ");
    } else {
        exit("<tr><td colspan=6 id='error'>Серверу переданы неверные данные! Проверьте, что все данные введены!</td></tr>");
    }
} else {
    exit("1");
}