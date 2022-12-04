<?php
  function stars($length) {
    for ($i = 0; $i < $length; $i++) {
      for ($j = 0; $j < 5; $j++) {
        echo '*';
      }
      echo '<br>';
    }
  }

  stars(5);
?>