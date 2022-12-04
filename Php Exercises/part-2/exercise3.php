<?php
  function odd_or_even($integer) {
    if ($integer % 2 == 0) {
      return 'Even';
    }
    return 'Odd';
  }

  function bg_color($class) {
    if ($class == 'Even') {
      return "green";
    } else {
      return "yellow";
    }
  }

  $arr = array(0, 1, 2, 3, 4, 5);

  foreach ($arr as $number) {
    $color = bg_color(odd_or_even($number));
    echo "<p class=$color> $number </p>";
  }
?>