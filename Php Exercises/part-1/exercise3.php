<?php
  function checkInt($number) {
    if ($number % 2 == 0) {
      echo "<p> Even </p>";
      echo "<table class='green'> <tr> <th>$number is even</th> </table> ";
    } else {
      echo "<p> Odd </p>";
      echo "<table class='blue'> <tr> <th>$number is odd</th> </table> ";
    }
  }

  checkInt(1);
  checkInt(2);
?>