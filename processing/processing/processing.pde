int[] array;
int mainIndex, comparisonIndex;

int border;

void display() {
  for (int index = 0; index < array.length; index++) {
    fill(map(array[index], 0, 200, 50, 200), map(array[index], 0, 200, 255, 100), map(array[index], 0, 200, 255, 10));
    rect(index * ((width - border * 2) / array.length) + border, border, (width - border * 2) / array.length, map(array[index], 0, 200, 0, height - border * 2));
  }
}

void settings() {
  size(600, 400);
}

void setup() {
  frameRate(1000);
  noStroke();

  border = 50;

  array = new int[100];
  for (int index = 0; index < array.length; index++) {
    array[index] = (int)random(50, 200);
  }

  mainIndex = 0;
  comparisonIndex = 0;
}

void draw() {
  background(#000000);
  display();

  if (mainIndex >= 100) {
    noLoop();
  }

  if (comparisonIndex == array.length) {
    if (mainIndex < array.length - 1) {
      mainIndex++;
    }

    comparisonIndex = mainIndex;
  }

  fill(#FF0000);
  rect(mainIndex * ((width - border * 2) / array.length) + border, border, (width - border * 2) / array.length, map(array[mainIndex], 0, 200, 0, height - border * 2));

  fill(#00FF00);
  rect(comparisonIndex * ((width - border * 2) / array.length) + border, border, (width - border * 2) / array.length, map(array[comparisonIndex], 0, 200, 0, height - border * 2));

  if (array[mainIndex] < array[comparisonIndex]) {
    int holder = array[mainIndex];
    array[mainIndex] = array[comparisonIndex];
    array[comparisonIndex] = holder;
  }

  comparisonIndex++;
}
