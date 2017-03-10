/*global select, selectAll, log, byId*/
var session2 = (function session2() {
    "use strict";

    var exo2, estPalindrome, inverser;

    exo2 = function exo2() {
        var input, btn, affiche;
        input = byId('source_inversion_lettres');
        btn = byId('valider_inversion');
        affiche = byId('estPalindrome');


        if (btn) {
            btn.onclick = function () {
                var mot,res;
                mot = inverser(input.value);
                // on inverse le contenu de champs texte
                res = estPalindrome(mot);
                // res vaut true false
                affiche.textContent = res;

                if (res === true ) {
                    affiche.className ='succes';
                } else {
                    affiche.className ='error';
                }

            };
        }
    };

    inverser = function inverser(mot) {
        var i, len, inversion = '', caseResultat;

        caseResultat = byId('case_resultat');

        len = mot.length - 1;

        for (i = len; i >= 0; i -= 1) {
            inversion += mot[i];
        }

        caseResultat.textContent = inversion;
        return inversion;
    };

    estPalindrome = function estPalindrome(mot) {
        return mot === inverser(mot);

    };

    return {
        exo2: exo2,
        estPalindrome: estPalindrome
    };
}());
