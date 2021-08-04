var Iterator = function (elements) {
    this.elements = elements;
    this.index = 0;
  };
  
  Iterator.prototype = {
    hasNext: function () {
      return this.index < this.elements.length;
    },
    next: function () {
      return this.elements[this.index++];
    },
    reset: function () {
      this.index = 0;
    }
  };
  
  let url = "https://jsonplaceholder.typicode.com/todos/";
  
  let elements = [];
  for (let id = 1; id <= 5; id++) {
    elements.push(async () => {
      let response = await fetch(url + id);
      let data = await response.json();
      return data;
    });
  }
  
  let elements2 = [1, 2, 3, 4, 5];
  
  let iterator = new Iterator(elements);
  
  while (iterator.hasNext()) {
    let element = iterator.next();
    let data = element().then((result) => {
      console.log(result);
    });
  }
  
  iterator.reset();
  while (iterator.hasNext()) {
    let elements2 = iterator.next();
    let data = element().then((result) => {
      console.log(result);
    });
  }
  