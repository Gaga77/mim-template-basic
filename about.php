<?php include('inc/header.php'); ?>

<?php //TESTTTTT  ?>
<link rel="stylesheet" type="text/css" href="styles/bases.css">
<link rel="stylesheet" type="text/css" href="styles/modules.css">

<style>
.page {
    padding: 20px;
}
</style>

<h1 class="title"> About </h1>
<h2 class="title"> Inversion / Palindrome</h2>

<div id="main_content" class="page">
    <input id="source_inversion_lettres" type="text" placeholder="saisir un mot à inverser...">
    <input id="valider_inversion" type="submit">
    <p class="resultat">
        <span id="case_resultat"></span><br>
        <span> palindrome ? </span>
        <span id="estPalindrome"></span>
    </p>
</div>

<?php include ('inc/footer.php'); ?>
