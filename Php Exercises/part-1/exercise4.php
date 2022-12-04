<?php
      
  function bloodPressure($bp){
    if ($bp >= 120 && $bp <=  130 || $bp >= 80 && $bp <= 85) {
      echo "<p class='normal pad'> $bp is normal </p>";
    }
    elseif ($bp >= 130 && $bp <= 139 || $bp >= 85 && $bp <= 89) {      
      echo "<p class='warning pad'> $bp is warning </p>";
    }
    else {
      echo "<p class='high pad'> $bp is high </p>";
    }
  }

  bloodPressure(80);
  bloodPressure(139);
  bloodPressure(30);

?>    