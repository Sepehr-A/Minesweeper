

    empthcell();
}
function empthcell() {
    td = document.getElementsByTagName("td");
    for (i = 0; i <= 99; i++) {
        if (td[i].children.length === 0){td[i].innerHTML+="<div class='sefr'>"+0+"</div>"}

    }

}






        }}


        // td=tr[i].getElementsByTagName("td");
            // chap=td[j-1];
            // var Rast=td[j+1];
            // if (tr[i-1]){var Bala=tr[i-1].getElementsByTagName("td")[j]}
            // if (tr[i-1]){var BalaChap=tr[i-1].getElementsByTagName("td")[j-1]}
            // if (tr[i-1]){var BalaRast=tr[i-1].getElementsByTagName("td")[j+1]}
            // if(tr[i+1]){var Pain=tr[i+1].getElementsByTagName("td")[j]}
            // if(tr[i+1]){var  PainChap=tr[i+1].getElementsByTagName("td")[j-1]}
            // if(tr[i+1]){var PainRast=tr[i+1].getElementsByTagName("td")[j+1]}
            //
            // if(chap)if(chap.innerHTML===""){chap.setAttribute("class","tropne")}
            // if (Rast)if(Rast.innerHTML===""){Rast.setAttribute("class","tropne")}
            // if (Bala)if(Bala.innerHTML===""){Bala.setAttribute("class","tropne")}
            // if (BalaChap)if(BalaChap.innerHTML===""){bombCount++}
            // if (BalaRast)if(BalaRast.innerHTML===""){bombCount++}
            // if (Pain)if(Pain.innerHTML===""){bombCount++}
            // if (PainRast)if(PainRast.innerHTML===""){bombCount++}
            // if (PainChap)if(PainChap.innerHTML===""){bombCount++}
            //




