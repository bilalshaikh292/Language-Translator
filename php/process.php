<?php
require_once 'vendor/autoload.php';

use Stichoza\GoogleTranslate\GoogleTranslate;

$lang_one = $_POST['lang_one'];
$lang_two = $_POST['lang_two'];
$text1 = $_POST['text1'];

if($lang_one == "AUTO_DETECT"){
    $tr = new GoogleTranslate();
    echo $tr->setSource($lang_one)->setTarget($lang_two)->translate($text1);
    $tr->getLastDetectedSource();

}
else{
    echo GoogleTranslate::trans($text1, $lang_two, $lang_one);
}