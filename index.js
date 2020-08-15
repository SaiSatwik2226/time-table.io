function myFunction(){
    var id = document.getElementById("courseId").value;
    var cid = document.getElementById("courseName").value;
    var prof = document.getElementById("prof").value;
    var days = document.getElementById("days").value;
    var hrs = parseInt(document.getElementById("hrs").value);
    
    var st = id +' '+cid+' '+prof;
    if(days.includes('M')){
        document.getElementById('row-1').cells[hrs].innerHTML = st;
    }
    if(days.includes('T')){
        document.getElementById('row-2').cells[hrs].innerHTML = st;
    }
    if(days.includes('W')){
        document.getElementById('row-3').cells[hrs].innerHTML = st;
    }
    if(days.includes('TH')){
        document.getElementById('row-4').cells[hrs].innerHTML = st;;
    }
    if(days.includes('F')){
        document.getElementById('row-5').cells[hrs].innerHTML = st;
    }
    if(days.includes('S')){
        document.getElementById('row-6').cells[hrs].innerHTML = st;
    }
    clearAll();
}

function myFunction1(){
    var id = document.getElementById("courseId1").value;
    var cid = document.getElementById("courseName1").value;
    var prof = document.getElementById("prof1").value;
    var days = document.getElementById("days1").value;
    var hrs1 = parseInt(document.getElementById("hrs1").value);
    var hrs2 = parseInt(document.getElementById("hrs2").value);
    
    var st = id +' '+cid+' '+'LAB'+' '+prof;

    if(days.includes('M')){
        document.getElementById('row-1').cells[hrs1].innerHTML = st;
        document.getElementById('row-1').cells[hrs2].innerHTML = st;
    }
    if(days.includes('T')){
        document.getElementById('row-2').cells[hrs1].innerHTML = st;
        document.getElementById('row-2').cells[hrs2].innerHTML = st;
    }
    if(days.includes('W')){
        document.getElementById('row-3').cells[hrs1].innerHTML = st;
        document.getElementById('row-3').cells[hrs2].innerHTML = st;
    }
    if(days.includes('TH')){
        document.getElementById('row-4').cells[hrs1].innerHTML = st;
        document.getElementById('row-4').cells[hrs2].innerHTML = st;
    }
    if(days.includes('F')){
        document.getElementById('row-5').cells[hrs1].innerHTML = st;
        document.getElementById('row-5').cells[hrs2].innerHTML = st;
    }
    if(days.includes('S')){
        document.getElementById('row-6').cells[hrs1].innerHTML = st;
        document.getElementById('row-6').cells[hrs2].innerHTML = st;
    }
    clearAll();
}

function clear1(){
    document.getElementById("courseId1").value = "";
    document.getElementById("courseName1").value = "";
    document.getElementById("prof1").value = "";
    document.getElementById("days1").value = "";
    document.getElementById("hrs1").value = "";
    document.getElementById("hrs2").value = "";
}
function clear(){
    document.getElementById("courseId").value = "";
    document.getElementById("courseName").value = "";
    document.getElementById("prof").value = "";
    document.getElementById("days").value = "";
    document.getElementById("hrs").value = "";
}

function clearAll(){
    clear1();
    clear();
}

function exportPDF() {
    html2canvas(document.getElementById('tab'), {
        onrendered: function (canvas) {
            var data = canvas.toDataURL();
            var docDefinition = {
                content: [{
                    image: data,
                    width: 500
                }]
            };
            pdfMake.createPdf(docDefinition).download("Timetable.pdf");
        }
    });
}

/* 
function createPDF() {
    var sTable = document.getElementById('tab').innerHTML;

    // CREATE A WINDOW OBJECT.
    var win = window.open('', '', 'height=1000,width=1000');
    
    var style1 = "<style>";
        style1 = style1 + "table {width: 100%;font: 17px Calibri;}";
        style1 = style1 + "table, th, td {border: solid 1px #DDD; border-collapse: collapse;";
        style1 = style1 + "padding: 2px 3px;text-align: center;}";
        style1 = style1 + "</style>";

    win.document.write('<html><head>');
    win.document.write('<title>Profile</title>');   // <title> FOR PDF HEADER.
    win.document.write(style1);          // ADD STYLE INSIDE THE HEAD TAG.
    win.document.write('</head>');
    win.document.write('<body>');
    win.document.write(sTable);         // THE TABLE CONTENTS INSIDE THE BODY TAG.
    win.document.write('</body></html>');

    win.document.close(); 	// CLOSE THE CURRENT WINDOW.

    win.print();    // PRINT THE CONTENTS.
}
 */
//"<style> table {width: 100%;font: 17px Calibri;} table, th, td {border: solid 1px #DDD; border-collapse: collapse; padding: 2px 3px;text-align: center;} </style>"


/* function createPDF(){
    if (window.navigator.msSaveBlob()){
        window.navigator.msSaveBlob(tab.msSaveBlob(), 'timetable.png');
    }
    else{
        const a =document.createElement('a');

        document.body.appendChild(a);
        a.hreff = tab.toDataURL();
        a.download = 'timetable.png'
        a.click();
        document.body.removeChild(a);

    }
} */


/* document.getElementsByTagName("td").addEventListener("onclick", this.erase());

this.erase = function(){
  alert(this.innerHTML);
};


document.getElementsById("row-1").cells[4].addEventListener("click", this.handleCellClick.bind(this));
alert(document.getElementsById("row-1").cells[4].innerHTML)

this.handleCellClick = function(e)
    {
        alert(e.innerHTML);
    } */