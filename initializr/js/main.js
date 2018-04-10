$(document).ready(function(){       //Error happens here, $ is not defined.
    console.log("hey");
    
    function generateString(length){
        var text = "";
        var possible = "abcdefghijklmnopqrstuvwxyz0123456789";

        for( var i=0; i < length; i++ )
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        console.log(text);
        return text;
    }
    
//    var idInicial = 9776;
    var idInicial = 14975;
    var iniString = "rg318";
   
    var finString = "100";
    var numCupones = 200;
    
    
    for(i=0;i<numCupones;i++){
        console.log(i);
        var midString = generateString(8);
        var code = iniString+midString+finString;
        var myId = idInicial + i;
        var myquery = "<p>INSERT INTO `carf_vikrentcar_coupons`(`id`, `code`, `type`, `percentot`, `value`, `datevalid`, `allvehicles`, `idcars`, `mintotord`) VALUES ('"+myId+"','"+code+"','2','2','100.00','','1','','');</p>";
                    $("body").append(myquery);
    }
});
