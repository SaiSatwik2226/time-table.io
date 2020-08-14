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
function clear1(){
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

function Export() {
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