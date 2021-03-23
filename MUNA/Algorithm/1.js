function queuePrinter(bufferSize, capacities, documents) {
  const queue = [];
  let time = 0;

  while (queue.length > 0 || documents.length > 0) {
    const firstDoc = documents[0];

    queue.map((v) => v[1]--);

    while (queue.length > 0 && queue[0][1] === 0) {
      const done = queue.shift();
      capacities += done[0];
    }

    if (capacities >= firstDoc) {
      queue.push([documents.shift(), bufferSize]);
      capacities -= firstDoc;
    }

    time++;
  }

  return time;
}

let bufferSize = 2;
let capacities = 10;
let documents = [7, 4, 5, 6];

let output = queuePrinter(bufferSize, capacities, documents);
console.log(output); // 8
