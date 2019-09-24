const spinnerStates = ['|', '/', '-','\\','|','/','-','\\'];
let statesToPrint = [...spinnerStates];

const spin = statesToPrint => {
  if (statesToPrint.length === 0)  statesToPrint = [...spinnerStates];
  process.stdout.write('\r' + statesToPrint[0]);
  setTimeout(() => spin(statesToPrint.splice(1)), 100);
};

spin(statesToPrint);