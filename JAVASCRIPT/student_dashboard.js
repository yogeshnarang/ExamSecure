// Constructor function for test object
function Test(subject, total_marks, timings) {
    this.subject = subject;
    this.total_marks = total_marks;
    this.timings = timings;
}

// Test objects
let test1 = new Test("Software Eng. Test 1", "40 Marks", "10:00 AM 21st Sept 2020");
let test2 = new Test("Software Eng. Test 2", "40 Marks", "10:00 AM 21st Sept 2020");
let test3 = new Test("Software Eng. Test 3", "40 Marks", "10:00 AM 21st Sept 2020");

// Test array
let test_array = [test1,test2,test3];

// Append all tests in html
for(let i=0;i<test_array.length;i++){
    let curTest = test_array[i];

    //Test Wrapper Div
    let test_wrapper_div = document.createElement("div");
    test_wrapper_div.classList.add('row', 'test-wrapper');
    
    // Test Heading
    let test_heading_div = document.createElement("div");
    test_heading_div.classList.add('test-heading', 'col-lg-3');
    test_heading_div.innerHTML = "<h3>" + curTest.subject + "</h3>";

    //Test Marks
    let test_marks_div = document.createElement("div");
    test_marks_div.classList.add('test-marks', 'col-lg-3');
    test_marks_div.innerHTML = "<p>" + curTest.total_marks + "</p>";

    //Test Timings
    let test_timings_div = document.createElement("div");
    test_timings_div.classList.add('test-timings', 'col-lg-3');

    let test_time = curTest.timings.slice(0,8);
    let test_date = curTest.timings.slice(9,curTest.timings.length);
    
    test_timings_div.innerHTML = "<p class='test-time'>" + test_time + "</p>" + "<p class='test-date'>" + test_date + "</p>";

    //Test Button
    let test_start_div = document.createElement("div");
    test_start_div.classList.add('start-test-button', 'col-lg-3');
    test_start_div.innerHTML = "<button class='btn btn-primary btn-lg' type='submit'>Start</button>"

    //Append the above 4 divs in test-wrapper-div
    test_wrapper_div.appendChild(test_heading_div);
    test_wrapper_div.appendChild(test_marks_div);
    test_wrapper_div.appendChild(test_timings_div);
    test_wrapper_div.appendChild(test_start_div);

    //Append test-wrapper-div to html
    document.querySelector(".main").appendChild(test_wrapper_div);

}
