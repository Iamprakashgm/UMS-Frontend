
// // INCREASE NUMBER VALUE

// var speed = 10;

// /* Call this function with a string containing the ID name to
//  * the element containing the number you want to do a count animation on.*/
// function incEltNbr(id) {
//   elt = document.getElementById(id);
//   endNbr = Number(document.getElementById(id).innerHTML);
//   incNbrRec(0, endNbr, elt);
// }

// /*A recursive function to increase the number.*/
// function incNbrRec(i, endNbr, elt) {
//   if (i <= endNbr) {
//     elt.innerHTML = i;
//     setTimeout(function() {//Delay a bit before calling the function again.
//       incNbrRec(i + 1, endNbr, elt);
//     }, speed);
//   }
// }

// /*Function called on button click*/
// function incNbr(){
//   incEltNbr("nbr");
// }

// incEltNbr("nbr"); /*Call this funtion with the ID-name for that element to increase the number within*/



// GENDER_DATA

var gender = ["Male", "Female", "Others"];
var gender_number = ["1298", "1241", "0"];
var gender_color = [
    "#1c6385",
    "#d9593a",
    "#1e7145"
];

// ROOF_DATA

var roof = ['Cemented', 'Stone', 'Tin'];
var roof_number = ['117', '63', '253'];
var roof_color = [
    '#008080',
    '#ff75ac',
    '#463eef'
]

// COOKING_DATA

var cooking = ['LPG Gas', 'Fire Wood', 'Bio Gas'];
var cooking_number = ['369', '59', '5'];
var cooking_color = [
    '#ac14e7',
    '#004225',
    '#40213e'
]

// INTERNET_DATA

var internet = ['Available', 'Not Available'];
var internet_number = ['256', '177'];
var internet_color = [
    '#008080',
    '#ff4040'
]

// WATER_SUPPLY_DATA

var water_supply = ['Tap', 'Others'];
var water_supply_number = ['424', '9'];
var water_supply_color = [
    '#002080',
    '#ff6040'
]

// LIGHTING_DATA

var lighting = ['Electricity Only', 'Electricity with Solar'];
var lighting_number = ['415', '18'];
var lighting_color = [
    '#902080',
    '#af6000'
]

// SCHOOL_DATA

var school = ['Durga Bhawani Adarsha Basic School', 'Machhapuchhre Namuna Secondary School', 'Morning Star Secondary Boarding School', 'Shree Saraswoti Basic School'];
var school_staffs = ['14', '27', '45', '3'];
var school_students = ['130', '388', '700', '13'];
var school_color = [
    '#008080',
    '#ac14e7'
]


// GENDER_CHART

new Chart.Chart("gender-chart", {
    type: "pie",
    data: {
        labels: gender,
        datasets: [{
            backgroundColor: gender_color,
            data: gender_number
        }]
    },
    options: {
        title: {
            display: true,
            text: "Gender Distribution, 2079"
        }
    }
});

// ROOF_CHART

new Chart.Chart("roof-chart", {
    type: "doughnut",
    data: {
        labels: roof,
        datasets: [{
            backgroundColor: roof_color,
            data: roof_number
        }]
    },
    options: {
        title: {
            display: true,
            text: "Roof Distribution, 2079"
        }
    }
});


// COOKING_CHART

new Chart.Chart("cooking-chart", {
    type: "doughnut",
    data: {
        labels: cooking,
        datasets: [{
            backgroundColor: cooking_color,
            data: cooking_number
        }]
    },
    options: {
        title: {
            display: true,
            text: "Cooking Distribution, 2079"
        }
    }
});


// INTERNET_CHART

new Chart.Chart("internet-chart", {
    type: "pie",
    data: {
        labels: internet,
        datasets: [{
            backgroundColor: internet_color,
            data: internet_number
        }]
    },
    options: {
        title: {
            display: true,
            text: "Internet Distribution, 2079"
        }
    }
});


// WATER_SUPPLY_CHART

new Chart.Chart("water-supply-chart", {
    type: "pie",
    data: {
        labels: water_supply,
        datasets: [{
            backgroundColor: water_supply_color,
            data: water_supply_number
        }]
    },
    options: {
        title: {
            display: true,
            text: "Water Supply Distribution, 2079"
        }
    }
});


// LIGHTING_CHART

new Chart.Chart("lighting-chart", {
    type: "doughnut",
    data: {
        labels: lighting,
        datasets: [{
            backgroundColor: lighting_color,
            data: lighting_number
        }]
    },
    options: {
        title: {
            display: true,
            text: "Lighting Distribution, 2079"
        }
    }
});


// SCHOOL_CHART

new Chart.Chart("school-chart", {
    type: "bar",
    data: {
        labels: school,
        datasets: [{
            label: 'Staffs',
            backgroundColor: school_color[0],
            data: school_staffs
        },
        {
            label: 'Students',
            backgroundColor: school_color[1],
            data: school_students
        }]
    },
    options: {
        title: {
            display: true,
            text: "School Distribution, 2079"
        }
    }
});
