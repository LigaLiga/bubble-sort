window.addEventListener('resize', () => location.reload());

let mylist = [];

let mainIndex, comparisonIndex;

const border = 150;

function display(array) {
    for (index = 0; index < array.length; index++) {
        fill(map(array[index], 0, 1000, 55, 255));
        stroke(map(array[index], 0, 1000, 55, 255));
        rect(index * ((width - border * 2) / array.length) + border, border, (width - border * 2) / array.length, map(array[index], 0, 1000, 0, height - border * 2));
    }
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(1000);
    noStroke();

    for (_ = 0; _ < 50; _++) {
        mylist.push(random(0, 1000));
    }

    mainIndex = 0;
    comparisonIndex = 0;
}

function draw() {
    background(0);
    display(mylist);

    if (comparisonIndex == mylist.length) {
        if (mainIndex < mylist.length) {
            mainIndex++;
        }

        comparisonIndex = mainIndex;
    }

    fill(0, 255, 0);
    stroke(0, 255, 0);
    rect(mainIndex * ((width - border * 2) / mylist.length) + border, border, (width - border * 2) / mylist.length, map(mylist[mainIndex], 0, 1000, 0, height - border * 2));
    
    fill(255, 0, 0);
    stroke(255, 0, 0);
    rect(comparisonIndex * ((width - border * 2) / mylist.length) + border, border, (width - border * 2) / mylist.length, map(mylist[comparisonIndex], 0, 1000, 0, height - border * 2));

    if (mylist[mainIndex] < mylist[comparisonIndex]) {
        let holder = mylist[mainIndex];
        mylist[mainIndex] = mylist[comparisonIndex];
        mylist[comparisonIndex] = holder;
    }

    comparisonIndex++;
}