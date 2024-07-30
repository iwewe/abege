function HumanToABG(form) {
    var abgteks = "";
    var stemp;
    var i, j;
    var acak;
    var aseli = form.aseli.value;

    var TabelHuruf = "AEGIOSZ";
    var TabelAngka = "4361052"; //01234567890

    var TabelVokal = "AIUEO";

    if (aseli.length) {
        //modifikasi huruf besar kecil kecil
        if (form.pilihan[0].checked == true) {
            for (i = 0; i < aseli.length; i++) {
                acak = Math.round(2 * Math.random());
                if (acak)
                    abgteks = abgteks + aseli.charAt(i).toLowerCase();
                else
                    abgteks = abgteks + aseli.charAt(i).toUpperCase();
            }
        } else
            abgteks = aseli;

        //Modifikasi huruf jadi angka
        var terganti = 0;
        stemp = "";
        if (form.pilihan[1].checked == true) {
            for (i = 0; i < aseli.length; i++) {
                acak = Math.round(2 * Math.random());
                terganti = 0;
                if (acak) {
                    for (j = 0; j < TabelHuruf.length; j++) {
                        if (abgteks.charAt(i).toUpperCase() == TabelHuruf.charAt(j)) {
                            stemp = stemp + TabelAngka.charAt(j);
                            terganti = 1;
                            break;
                        }
                    }
                }

                if (terganti == 0) //huruf tidak dapat diganti 
                    stemp = stemp + abgteks.charAt(i);
            }
            abgteks = stemp;
        }

        //disingkat-singkat biar pendek
        stemp = "";
        if (form.pilihan[2].checked == true) {
            for (i = 0; i < aseli.length; i++) {
                acak = Math.round(2 * Math.random());
                terganti = 0;
                if (acak) {
                    for (j = 0; j < TabelVokal.length; j++) {
                        if (aseli.charAt(i).toUpperCase() == TabelVokal.charAt(j)) {
                            if ((aseli.charAt(i - 1) != " ") && (i > 0)) {
                                //stemp=stemp+TabelAngka.charAt(j); hilangkan saja
                                terganti = 1;
                            }
                            break;
                        }
                    }
                }

                if (terganti == 0) //huruf tidak dapat diganti 
                    stemp = stemp + abgteks.charAt(i);
            }
            abgteks = stemp;
        }

        form.abg.value = abgteks;
    } else {
        form.abg.value = "tolong itu diisi dulu form diatas ya";
    }
}

function SelectAll(id) {
    document.getElementById(id).focus();
    document.getElementById(id).select();
}
