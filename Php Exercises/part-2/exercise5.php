<?php
  function checkInt($number, $color1, $color2) {
    if ($number % 2 == 0) {
      return $color1;
    } else {
      return $color2;
    }
  }

  function calculate($color1, $color2) {
    // Alternate the background color
    $numbers = array(0, 1, 2, 3, 4, 5);

    foreach ($numbers as $number) {
      $multiply = $number * 2;
      $power = pow($number, 2);
      $cube = pow($number, 3);

      $bg_color = checkInt($number, $color1, $color2);
      echo "<pre style='background-color: $bg_color'> $multiply \t $power \t $cube</pre>";
    }
  }

  calculate('cyan', 'pink');
  echo '<br>';
  calculate('#CCC', '#999')
?>