<?php
  function checkInteger($number) {
    if ($number % 2 == 0) {
      return "<h3 class='green'> $number is even</h3> ";
    } else {
      return "<h3 class='blue'> $number is odd</h3>";
    }
  }

  echo checkInteger(6);
  echo checkInteger(9);
?>