<?php
$counter_file = 'visits.txt';

// read current count
$current_count = (int) file_get_contents($counter_file);

// increment count
$current_count++;

// write updated count back to file
file_put_contents($counter_file, $current_count);

// display count
//echo "You are visitor number $current_count";
?>
