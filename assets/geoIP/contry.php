<?php
include("geoip.inc");
//
  function getClientContry() {
      if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
        $ip=$_SERVER['HTTP_CLIENT_IP'];
      } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
        $ip=$_SERVER['HTTP_X_FORWARDED_FOR'];
      }
      else {
        $ip=$_SERVER['REMOTE_ADDR'];
      }

      $gi = geoip_open(geoip,GEOIP_STANDARD);
      $result = geoip_country_name_by_addr($gi, $ip);
      return $result;
  }

?>