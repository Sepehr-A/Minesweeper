var left = [], right = [],flag = false, sSs, allcells = [];

$(document).ready(function ()
{
    var w = $("#inp").width();
    w = ($("#container").width() - w) / 2;
    $("#inp").css("left", w);

    w = $("#timer").width();
    w = ($("#container").width()/2 - w) / 2;
    $("#timer").css("left", 30+w);

    w = $("#bnumDiv").width();
    w = $("#container").width()/2 + ($("#container").width()/2 - w) / 2;
    $("#bnumDiv").css("left", w-30);
});

function setbombs()
{
    var img = "<img id='bomb' src='img/bombsvg.svg' class='bombCloseimg'>";
    for (i = 1; i <=40 ; i++)
    {
        x= Math.floor((Math.random() * 256));
        var id = "#td" + x;
        $(id).html(img);
    }
    bombCount();
}

function checkbomb(i)
{
    if (i>0 && i<256)
        if (sSs[i].getElementsByTagName("img")[0])
            return true;
        else
            return false;
    else
        return false;
}

function bombCount()
{
    var s = 0,
        lflag = false, rflag = false;
    while (s < 256)
    {
        left.push(s);
        s = s + 15;
        right.push(s);
        s++;
    }
    sSs = document.getElementsByTagName("td");
    for (i = 0; i < 256; i++)
    {
        s = 0;
        lflag = rflag = false;
        if (i in left)
            lflag = true;
        else if (i in right)
            rflag = true;
        if (!checkbomb(i))
        {
            if (checkbomb(i - 17) && !lflag)
                s++;
            if (checkbomb(i - 16))
                s++;
            if (checkbomb(i - 15) && !rflag)
                s++;
            if (checkbomb(i - 1) && !lflag)
                s++;
            if (checkbomb(i + 1) && !rflag)
                s++;
            if (checkbomb(i + 15) && !lflag)
                s++;
            if (checkbomb(i + 16))
                s++;
            if (checkbomb(i + 17) && !rflag)
                s++;
            allcells[i] = s;
        }
        else
            allcells[i]=41;
    }
}

function expl(g)
{
    var y = document.getElementsByClassName("tropne");

    if (g>0 && g<256 && !(sSs[g].id in y))
    {
        sSs[g].setAttribute("class", "tropne");
        if (allcells[g] !== 0)
        {
            // var d = g + 1;
            var j = "#" + sSs[g].id;
            // console.log(j);
            $(j).html("<div class='bnac'>" + allcells[g] + "</div>");
        }
        else
            exploreZ(g);
    }
}

function exploreZ(index)
{
    var lflag = false, rflag = false;
    if (index in left)
        lflag = true;
    else if (index in right)
        rflag = true;
    // if (!checkbomb(index))
    // {
        if (allcells[index-17]!==41 && !lflag)
        {
            expl(index - 17);
            // console.log(index-17)
        }
        if (allcells[index - 16]!==41)
        {
            expl(index - 16);
            // console.log(index-16)
        }
        if (allcells[index - 15]!==41 && !rflag)
        {
            expl(index - 15);
            // console.log(index-15)
        }
        if (allcells[index - 1]!==41 && !lflag)
        {
            expl(index - 1);
            // console.log(index-1)
        }
        if (allcells[index + 1]!==41 && !rflag)
        {
            expl(index +1);
            // console.log(index+1)
        }
        if (allcells[index + 15]!==41 && !lflag)
        {
            expl(index +15);
            // console.log(index+15)
        }
        if (allcells[index + 16]!==41)
        {
            expl(index + 16);
            // console.log(index+16)
        }
        if (allcells[index + 17]!==41 && !rflag)
        {
            expl(index +17);
            // console.log(index+17)
        }
    // }
}

function creatable()
{
    var tbl = "";
    var c = 1;
    for (i = 1; i < 17; i++)
    {
        tbl = tbl+"<tr>";
        for (j = 1;j<17;j++)
        {
            tbl = tbl+"<td onmousedown = 'onClick(event)' id = 'td" + c +"'></td>";
            c++;
        }
        tbl=tbl+"</tr>";
    }
    $("#tm").html(tbl);

    var w = $("#tm").width();
    w = ($("#container").width() - w )/2;
    $("#tbl").css("left", w);
    setbombs();
}

function onClick(event)
{
    var click = event.target;
    var i = click.id;
    j = "#" + i;
    i = i.replace("td", "");
    if (event.button===0)
    {
        click.setAttribute("class","tropne");
        var bombopening = click.getElementsByTagName("img")[0];
        if (bombopening) {
            // hh= "#"+bombopening.id;
            bombopening.setAttribute("class","openbomb");
            flag = true;
            alert("Game Over Sweet Heart");
        }
        else
        {
            if (allcells[i - 1] !== 0)
                $(j).html("<div class='bnac'>" + allcells[i - 1] + "</div>");
            else
                exploreZ(i - 1)
        }
    }
    if (event.button===2)
    {
        $(j).bind("contextmenu" , function(){
            return false;
        });
        if (checkbomb(i))
        {
            // chang bomb num
            var tr=$("#bombnum").html();
            tr--;
            $("#bombnum").html(tr);
        }
        //var d1 = click.getElementsByTagName("img")[0];
        // var d2 = click.getElementsByTagName("img")[1];
        var h = "<img src='img/black%20flag.svg' class='flgo'>";
        var tt = $(j).html();
        /*console.log(tt);
        console.log(tt.search(h));
        if (tt.search(h) !==-1)
        {
            tt= tt.replace(h,"");
            $(j).html(tt);
        }*/
        // else
        // {
            h = $(j).html() + h;
            $(j).html(h);
        // }
    }
}
