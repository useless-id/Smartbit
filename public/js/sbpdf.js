$('a.print-repair').on('click',function(){
    var doc = new jsPDF();
    var code = ''+$('input[name="seriale"]').val();
 	JsBarcode("#barcode", code);
    var can = document.getElementById('barcode');
    doc.text(20, 30, 'Ricevuta riparazione per Smartbit');
    doc.setFontSize(10);
    doc.text(20, 40, $('.modello-ricevuta').text()+"\n"+
    $('.marca-ricevuta').text()+
    "\n"+$('.imei-ricevuta').text()+"\nData ricezione: "+$('.today').text());
    doc.text(110, 40, 'Cliente:\n'+$('.nome-ricevuta').text()+"\n"+$('.cognome-ricevuta').text()+"\n"+$('.recapito-ricevuta').text());
    doc.text(20,60,'Garanzia');
    if($('input[name="garanzia"]').val() === '1'){
        doc.rect(36,57,5,5,'F');
    }else{
        doc.rect(36,57,5,5);
    }
    doc.text(50,60,'Assistenza');
    if($('input[name="assistenza"]').val() === '1'){
        doc.rect(69,57,5,5,'F');
    }else{
        doc.rect(69,57,5,5);
    }
    doc.text(20, 70,'Note:');
    doc.setDrawColor(255,171,0);
    doc.rect(25, 72, 160, 20);
    doc.setFontSize(8);
    doc.text(26, 75,''+$('.note-ricevuta').text());
    doc.setFontSize(8);
    doc.text(20,96,
    "1. Il cliente è pregato di ritirare il dispositivo riparato entro un massimo di 6 mesi (180 giorni) \n"+
    "che verranno contati a partire dal giorno dell'avvenuta riparazione. Passati 180 giorni la presente \n "+
    "ricevuta non sarà più valida.\n\n"+
    "2. la garanzia è di soli 3 mesi (90 giorni) che verranno contati a partire dal giorno dell'eventuale \n"+
    "riparazione del cellulare e copre solamente il guasto riparato. Dopo il ritiro del dispositivo non si \n"+
    "assume alcuna responsabilità per eventuali problemi che dovessero insorgere.\n\n"+
    "3. Si prega di rimuovere (se il dispositivo ne è munito o ne permette l'alloggiamento) sim-card e memory-card.\n\n"+
    "4. I dati del dispositivo devono essere trascritti, poichè c'è il rischio che durante la riparazione\n"+
    "essi possano essere cancellati.\n\n"+
    "5. Si prega di provare subito il dispositivo per controllare se funziona, in caso contrario decade la garanzia.\n\n"+
    "6. Si autorizza il trattamento dei dati personali in base art. 13 del D. Lgs. 196/2003.\n\n"+
    "7. Smartbit non è responsabile di possibili prolungamenti dei tempi di assistenza tecnica.\n\n"+
    "Firma __________________\n\n"+
    "Smartbit S.R.L. Via Casilina 343 Valmontone (RM) Tel.06/95995061\n"+
    "Grazie per aver scelto smartbit!"
    );
    var data = can.toDataURL( "image/jpeg" );
    doc.addImage(data, 'JPEG', 80, 175);
    doc.addPage();
    doc.setFontSize(16);
    doc.text(20, 30, 'Ricevuta riparazione per Smartbit');
    doc.setFontSize(10);
    doc.text(20, 40, $('.modello-ricevuta').text()+"\n"+
    $('.marca-ricevuta').text()+
    "\n"+$('.imei-ricevuta').text()+"\nData ricezione: "+$('.today').text());
    doc.text(110, 40, 'Cliente:\n'+$('.nome-ricevuta').text()+"\n"+$('.cognome-ricevuta').text()+"\n"+$('.recapito-ricevuta').text());
    doc.text(20,60,'Garanzia');
    if($('input[name="garanzia"]').val() === '1'){
        doc.rect(36,57,5,5,'F');
    }else{
        doc.rect(36,57,5,5);
    }
    doc.text(50,60,'Assistenza');
    if($('input[name="assistenza"]').val() === '1'){
        doc.rect(69,57,5,5,'F');
    }else{
        doc.rect(69,57,5,5);
    }
    doc.text(20, 70,'Note:');
    doc.setDrawColor(255,171,0);
    doc.rect(25, 72, 160, 20);
    doc.setFontSize(8);
    doc.text(26, 75,''+$('.note-ricevuta').text());
    doc.setFontSize(8);
    doc.text(20,96,
    "1. Il cliente è pregato di ritirare il dispositivo riparato entro un massimo di 6 mesi (180 giorni) \n"+
    "che verranno contati a partire dal giorno dell'avvenuta riparazione. Passati 180 giorni la presente \n "+
    "ricevuta non sarà più valida.\n\n"+
    "2. la garanzia è di soli 3 mesi (90 giorni) che verranno contati a partire dal giorno dell'eventuale \n"+
    "riparazione del cellulare e copre solamente il guasto riparato. Dopo il ritiro del dispositivo non si \n"+
    "assume alcuna responsabilità per eventuali problemi che dovessero insorgere.\n\n"+
    "3. Si prega di rimuovere (se il dispositivo ne è munito o ne permette l'alloggiamento) sim-card e memory-card.\n\n"+
    "4. I dati del dispositivo devono essere trascritti, poichè c'è il rischio che durante la riparazione\n"+
    "essi possano essere cancellati.\n\n"+
    "5. Si prega di provare subito il dispositivo per controllare se funziona, in caso contrario decade la garanzia.\n\n"+
    "6. Si autorizza il trattamento dei dati personali in base art. 13 del D. Lgs. 196/2003.\n\n"+
    "7. Smartbit non è responsabile di possibili prolungamenti dei tempi di assistenza tecnica.\n\n"+
    "Firma __________________\n\n"+
    "Smartbit S.R.L. Via Casilina 343 Valmontone (RM) Tel.06/95995061\n"+
    "Grazie per aver scelto smartbit!"
    );
    var data = can.toDataURL( "image/jpeg" );
    doc.addImage(data, 'JPEG', 80, 175);
    doc.save('ricevuta_'+$('input[name="seriale"]').val()+'.pdf');
});

$('a.print-ddt').on('click',function(){
    
});

$('a.print-delivery').on('click',function(){
    $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
            }
        });
        $.ajax({
            url:'/delivery-info/'+$('input[name="delivery-pickup-id"]').val(),
            type: 'GET',
            data:{
            },
            success: function(result){
                console.log(result);
                var doc = new jsPDF();
                doc.text(60, 30, 'DDT: Lista spedizione Smartbit S.R.L');
                doc.setFontSize(10);
                doc.text(60,45, 'presso il centro riparazione specializzato: '+backup_old_center.nome);
                doc.text(60,50, '('+backup_old_center.indirizzo+')');
                var offset = 25;
                doc.text(90,60, 'riparazioni da stampare:');
                var turned = false;
                var j = 1;
                for(var i = 0; i< result.repairs.length;i++){
                    
                    if(i>7 && 9%j == 0){
                        j = 1;
                        doc.addPage();
                    }
                    if(i>7 || turned){
                        turned = true;
                        doc.rect(48,6 + (offset * j),120,20);
                        doc.text(50, 10 + (offset * j),'- Seriale: '+result.repairs[i].seriale+' - Modello: '+result.repairs[i].device.model);
                        doc.text(50, 15 + (offset * j),'- Note: "'+result.repairs[i].note+' " ');
                        doc.text(50, 20 + (offset * j),'- Imei: '+result.repairs[i].device.imei);
                        doc.text(50, 25 + (offset * j),'- Proprietario: '+result.repairs[i].person.nome+' '+result.repairs[i].person.cognome);
                        j++;
                    }else{
                        doc.rect(48,46 + (offset * j),120,20);
                        doc.text(50, 50 + (offset * j),'- Seriale: '+result.repairs[i].seriale+' - Modello: '+result.repairs[i].device.model);
                        doc.text(50, 55 + (offset * j),'- Note: "'+result.repairs[i].note+' " ');
                        doc.text(50, 60 + (offset * j),'- Imei: '+result.repairs[i].device.imei);
                        doc.text(50, 65 + (offset * j),'- Proprietario: '+result.repairs[i].person.nome+' '+result.repairs[i].person.cognome);
                        j++;
                    }
                }
                doc.text(20,260,'in data: '+backup_old_date);
                doc.save('ddt.pdf');
            },
            error: function (xhr, b, c) {
                var $insert_person_i = $('a.insert_person i');
                $insert_person_i.text('add');
                console.log('response error: \n');
                console.log(xhr);
                console.log(b);
                console.log(c);
                }
        });
    
});
$('a.print-pickup').on('click',function(){
    $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
            }
        });
        $.ajax({
            url:'/delivery-info/'+$('input[name="delivery-pickup-id"]').val(),
            type: 'GET',
            data:{
            },
            success: function(result){
                console.log(result);
                var doc = new jsPDF();
                doc.text(60, 30, 'DDT: Lista ritiro Smartbit S.R.L');
                doc.setFontSize(10);
                doc.text(60,45, 'presso il centro riparazione specializzato: '+backup_old_center_back.nome);
                doc.text(60,50, '('+backup_old_center_back.indirizzo+')');
                var offset = 25;
                doc.text(90,60, 'riparazioni da stampare:');
                var turned = false;
                var j = 1;
                for(var i = 0; i< result.repairs.length;i++){
                    
                    if(i>7 && 9%j == 0){
                        j = 1;
                        doc.addPage();
                    }
                    if(i>7 || turned){
                        turned = true;
                        doc.rect(48,6 + (offset * j),120,20);
                        doc.text(50, 10 + (offset * j),'- Seriale: '+result.repairs[i].seriale+' - Modello: '+result.repairs[i].device.model);
                        doc.text(50, 15 + (offset * j),'- Note: "'+result.repairs[i].note+' " ');
                        doc.text(50, 20 + (offset * j),'- Imei: '+result.repairs[i].device.imei);
                        doc.text(50, 25 + (offset * j),'- Proprietario: '+result.repairs[i].person.nome+' '+result.repairs[i].person.cognome);
                        j++;
                    }else{
                        doc.rect(48,46 + (offset * j),120,20);
                        doc.text(50, 50 + (offset * j),'- Seriale: '+result.repairs[i].seriale+' - Modello: '+result.repairs[i].device.model);
                        doc.text(50, 55 + (offset * j),'- Note: "'+result.repairs[i].note+' " ');
                        doc.text(50, 60 + (offset * j),'- Imei: '+result.repairs[i].device.imei);
                        doc.text(50, 65 + (offset * j),'- Proprietario: '+result.repairs[i].person.nome+' '+result.repairs[i].person.cognome);
                        j++;
                    }
                }
                doc.text(20,260,'in data: '+backup_old_date_back);
                doc.save('ddt-ritiro.pdf');
                
            },
            error: function (xhr, b, c) {
                var $insert_person_i = $('a.insert_person i');
                $insert_person_i.text('add');
                console.log('response error: \n');
                console.log(xhr);
                console.log(b);
                console.log(c);
                }
        });
});