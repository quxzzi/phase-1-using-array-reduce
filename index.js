const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
const batteries = batteryBatches.map(batch => {
    return { capacity: batch };
  });
const totalBatteries = batteries.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.capacity;
  }, 0);