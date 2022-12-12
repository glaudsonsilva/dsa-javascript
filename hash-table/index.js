class HashTable {
  constructor(size = 7) {
    this.dataMap = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
    }

    return hash;
  }

  set(key, value) {
    let index = this._hash(key);

    if (!this.dataMap[index]) {
      this.dataMap[index] = [];
    }

    this.dataMap[index].push([key, value]);
  }

  get(key) {
    let index = this._hash(key);

    const spot = this.dataMap[index];

    if (spot) {
      for (let i = 0; i < spot.length; i++) {
        if (spot[i][0] === key) return spot[i][1];
      }
    }

    return undefined;
  }

  keys() {
    let keys = [];
    for (let i = 0; i < this.dataMap.length; i++) {
      const spot = this.dataMap[i];
      if (spot) {
        for (let j = 0; j < spot.length; j++) {
          keys.push(spot[j][0]);
        }
      }
    }

    return keys;
  }
}

let table = new HashTable();
table.set("bolts", 1400);
table.set("washers", 50);

console.log(table.get("bolts"));
console.log(table.get("washers"));
console.log(table.keys());
