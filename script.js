function createCounter(n) {
    let count = n;
  
    return function () {
      const currentCount = count;
      count++;
      return currentCount;
    };
  }
  
  const counter = createCounter(5);
  
  const outputElement = document.getElementById("output");
  const counterButton = document.getElementById("counterButton");
  
  counterButton.addEventListener("click", function () {
    const newCount = counter();
    outputElement.textContent = `Counter: ${newCount}`;
  });