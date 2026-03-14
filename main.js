class MultiSet {

  constructor() {
    this.data = new Map();
  }

  add(v) {
    let count = this.data.get(v) || 0; 
    count = count + 1;               
    this.data.set(v, count);           
    return count;                    
  }

  remove(v) {
    if (!this.data.has(v)) {
      return false; 
    }

    this.data.delete(v); 
    return true;
  }


  reduce(v) {
    if (!this.data.has(v)) {
      return -1;
    }

    let count = this.data.get(v);
    count = count - 1;

    if (count === 0) {
      this.data.delete(v); 
    } else {
      this.data.set(v, count);
    }

    return count;
  }

  count(v) {

    if (v !== undefined) {
      return this.data.get(v) || 0;
    }

    let total = 0;

    for (let value of this.data.values()) {
      total = total + value;
    }

    return total;
  }


  countDistinct() {
    return this.data.size;
  }

}