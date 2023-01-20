<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <link rel="icon" href="/favicon.svg" />
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
  <link rel="manifest" href="/manifest.json">

  <?php
$r = $_SERVER['REQUEST_URI']; 
$r = explode('/', $r);
if($r[1] == "blog" && $r[2] == "detail" && $r[3] !== null){
$url = "https://server.cricshizz.com.pk/blogs/getByID/".$r[3];
$curl = curl_init($url);
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
//for debug only!
curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
$resp = curl_exec($curl);
curl_close($curl);
$result = json_decode($resp);
$title = $result[0]->Data[0]->title;
$description = $result[0]->Data[0]->description;
$banner_main = $result[0]->Data[0]->banner_main;
        ?>
<meta property="og:title" content="<?=$title?>">
<meta property="og:type" content="website" />
<meta property="og:description" content="<?=$description?>">
<meta property="og:image" content="<?="https://bucket.cricshizz.com.pk/files/".$banner_main?>">
<meta name="twitter:card" content="summary_large_image">

<meta name="twitter:title" content="<?=$title?>">
<meta name="twitter:description" content="<?=$description?>">
<meta name="twitter:image" content="<?="https://bucket.cricshizz.com.pk/files/".$banner_main?>"/>
<?php
}else if($r[1] == "gallery" && $r[2] !== null){
$url = "https://server.cricshizz.com.pk/gallery/getByID/".$r[2];
$curl = curl_init($url);
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
//for debug only!
curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
$resp = curl_exec($curl);
curl_close($curl);
$result = json_decode($resp);
$title = $result[0]->Data[0]->album_name;
$description = "";
$banner_main = $result[0]->Data[0]->mainbanner;
    ?>
<meta property="og:title" content="<?=$title?>">
<meta property="og:type" content="website" />
<meta property="og:description" content="<?=$description?>">
<meta property="og:image" content="<?="https://bucket.cricshizz.com.pk/files/".$banner_main?>">
<meta name="twitter:card" content="summary_large_image">

<meta name="twitter:title" content="<?=$title?>">
<meta name="twitter:description" content="<?=$description?>">
<meta name="twitter:image" content="<?="https://bucket.cricshizz.com.pk/files/".$banner_main?>"/>
    <?php
}
?>

  <link href="https://fonts.googleapis.com/css?family=Hind+Siliguri:400,500,600,700" rel="stylesheet">

  <script src="/cdn.polyfill.io/v2/polyfill.min.js"></script>
  <link rel="stylesheet" href="/resources/icc-prod/v1.1.2/styles/screen.css" />

  <script>
    window.RESOURCES_VERSION = 'icc-prod/v1.1.2';
  </script>

    <script defer="defer" src="/static/js/main.fd8188a3.js"></script>
    <link href="/static/css/main.657a4969.css" rel="stylesheet">

</head>

<body data-widget="viewport-glue">
  <noscript>You need to enable JavaScript to run this app.</noscript>
  <script id="parsely-cfg" src="/cdn.parsely.com/keys/icc-cricket.com/p.js"></script>
  <div id="fb-root"></div>
  <script crossorigin="anonymous" src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v15.0"
    nonce="ehojMOab"></script>
  <div id="root"></div>
  <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
    -->
</body>

</html>

<script src="/resources/icc-prod/v1.1.2/scripts/vendors.min.js"></script>
<script src="/resources/icc-prod/v1.1.2/scripts/main.min.js"></script>
<script src="/resources/icc-prod/v1.1.2/widgets/common.min.js"></script>
<script type="text/javascript">
  svg4everybody();
</script>