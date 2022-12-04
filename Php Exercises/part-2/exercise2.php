<?php
  $prime = array(1, 2, 3, 5, 7);

  foreach ($prime as $number) {
    $multiply = $number * 2;
    $power = pow($number, 2);
    $cube = pow($number, 3);

    echo "<pre>$multiply \t $power \t $cube</pre>";
  }
?>
