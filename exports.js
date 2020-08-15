/* var specialElementHandlers = {
    // element with id of "bypass" - jQuery style selector
    '.no-export': function (element, renderer) {
        // true = "handled elsewhere, bypass text extraction"
        return true;
    }
};

 */
// function exportPDF1() {
// //     var doc = new jsPDF('p', 'pt', 'a4');
// //     //A4 - 595x842 pts
// //     //https://www.gnu.org/software/gv/manual/html_node/Paper-Keywords-and-paper-size-in-points.html


// //     //Html source 
// //     var source = document.getElementById('tab').innerHTML;
// // /*     console.log(source);
// //     alert('done1'); */
// //     var margins = {
// //         top: 10,
// //         bottom: 10,
// //         left: 10,
// //         width: 595
// //     };

// //     doc.fromHTML(
// //         source, // HTML string or DOM elem ref.
// //         margins.left,
// //         margins.top, {
// //         'width': margins.width,
// //         'elementHandlers': specialElementHandlers
// //     },

// //         function (dispose) {
// //             // dispose: object with X, Y of the last line add to the PDF 
// //             //          this allow the insertion of new lines after html
// //             doc.save('Timetable.pdf');
// //         }, margins);

//     // var doc = new jsPDF('p', 'pt');
//     // var elem = document.getElementById("basic-table");
//     // var res = doc.autoTableHtmlToJson(elem);
//     // doc.autoTable(res.columns, res.data);
//     // doc.save("table.pdf");

     
    
// }


/* 
function exportPDF1(){
    import * as jsPDF from 'jspdf';
import 'jspdf-autotable';
    // var jsPDF = require('jspdf');
    // require('jspdf-autotable');
    const doc = new jsPDF()
    autoTable(doc, { html: '#tab' })
    doc.save('table.pdf')
} */