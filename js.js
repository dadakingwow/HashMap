class HashMap {
  constructor() {
    this.store = [];
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }
    return hashCode;
  }

  set(key, value) {
    let index = this.hash(key);
    if (!this.store[index]) {
      this.store[index] = [];
    }

    let found = false;
    for (let i = 0; i < this.store[index].length; i++) {
      if (this.store[index][i].key === key) {
        found = true;
        this.store[index][i].value = value;
        break;
      }
    }
    if (!found) {
      this.store[index].push({ key, value });
    }
  }

  get(key) {
    let index = this.hash(key);

    let found = false;
    for (let i = 0; i < this.store[index].length; i++) {
      if (this.store[index][i].key === key) {
        found = true;
        return this.store[index][i].value;
      }
    }
    if (!found) {
      return null;
    }
  }

  has(key) {
    let index = this.hash(key);
    let found = false;

    for (let i = 0; i < this.store[index].length; i++) {
      if (this.store[index][i].key === key) {
        found = true;
        return true;
      }
    }
    if (!found) {
      return false;
    }
  }

  remove(key) {
    let index = this.hash(key);
    let found = false;
    for (let i = 0; i < this.store[index].length; i++) {
      if (this.store[index][i].key === key) {
        found = true;
        this.store[index].splice(i, 1);
        return true;
      }
    }
    return false;
  }

  length() {
    let count = 0;
    for (let i = 0; i < this.store.length; i++) {
      if (this.store[i]) {
        count += this.store[i].length;
      }
    }
    return count;
  }

  clear() {
    this.store = [];
  }

  keys() {
    let keys = [];

    for (let i = 0; i < this.store.length; i++) {
      if (this.store[i]) {
        for (let j = 0; j < this.store[i].length; j++) {
          keys.push(this.store[i][j].key);
        }
      }
    }
    return keys;
  }

  values() {
    let values = [];
    for (let i = 0; i < this.store.length; i++) {
      if (this.store[i]) {
        for (let j = 0; j < this.store[i].length; j++) {
          values.push(this.store[i][j].value);
        }
      }
    }
    return values;
  }

  entries() {
    let entries = [];

    for (let i = 0; i < this.store.length; i++) {
      if (this.store[i]) {
        for (let j = 0; j < this.store[i].length; j++) {
          entries.push([this.store[i][j].key, this.store[i][j].value]);
        }
      }
    }
    return entries;
  }
}
