// Tab switching logic
function openTab(evt, tabName) {
  const tablinks = document.querySelectorAll('nav button.tablink');
  tablinks.forEach(btn => btn.classList.remove('active'));

  const tabcontents = document.querySelectorAll('.tabcontent');
  tabcontents.forEach(tc => tc.classList.remove('active'));

  evt.currentTarget.classList.add('active');
  document.getElementById(tabName).classList.add('active');
}

// Unit definitions with conversion factors relative to base units
const unitsData = {
  // General Conversions
  length: {
    baseUnit: 'meter',
    units: {
      meter: 1,
      kilometer: 1000,
      centimeter: 0.01,
      millimeter: 0.001,
      micrometer: 1e-6,
      nanometer: 1e-9,
      mile: 1609.344,
      yard: 0.9144,
      foot: 0.3048,
      inch: 0.0254
    }
  },
  mass: {
    baseUnit: 'kilogram',
    units: {
      kilogram: 1,
      gram: 0.001,
      milligram: 1e-6,
      metricTon: 1000,
      pound: 0.45359237,
      ounce: 0.0283495231
    }
  },
  temperature: {
    // special case, conversion handled differently
    units: ['celsius', 'fahrenheit', 'kelvin']
  },
  time: {
    baseUnit: 'second',
    units: {
      second: 1,
      millisecond: 0.001,
      microsecond: 1e-6,
      nanosecond: 1e-9,
      minute: 60,
      hour: 3600,
      day: 86400
    }
  },
  area: {
    baseUnit: 'square meter',
    units: {
      'square meter': 1,
      'square kilometer': 1e6,
      'square centimeter': 0.0001,
      'square millimeter': 1e-6,
      hectare: 10000,
      acre: 4046.8564224,
      'square mile': 2589988.110336
    }
  },
  volume: {
    baseUnit: 'cubic meter',
    units: {
      'cubic meter': 1,
      liter: 0.001,
      milliliter: 1e-6,
      'cubic centimeter': 1e-6,
      'cubic millimeter': 1e-9,
      gallon: 0.00378541,
      quart: 0.000946353,
      pint: 0.000473176,
      cup: 0.000236588,
      'cubic foot': 0.0283168,
      'cubic inch': 1.6387e-5
    }
  },
  massFlow: {
    baseUnit: 'kilogram per second',
    units: {
      'kilogram per second': 1,
      'gram per second': 0.001,
      'pound per second': 0.45359237,
      'kilogram per minute': 1 / 60,
      'pound per minute': 0.45359237 / 60
    }
  },
  molarFlow: {
    baseUnit: 'mole per second',
    units: {
      'mole per second': 1,
      'mole per minute': 1 / 60,
      'millimole per second': 0.001,
      'millimole per minute': 0.001 / 60
    }
  },
  volumetricFlow: {
    baseUnit: 'cubic meter per second',
    units: {
      'cubic meter per second': 1,
      'liter per second': 0.001,
      'liter per minute': 0.001 / 60,
      'gallon per minute': 0.00006309
    }
  },

  // Mechanics
  velocity: {
    baseUnit: 'meter/second',
    units: {
      'meter/second': 1,
      'kilometer/hour': 0.277777778,
      'mile/hour': 0.44704,
      'foot/second': 0.3048
    }
  },
  acceleration: {
    baseUnit: 'meter/second²',
    units: {
      'meter/second²': 1,
      'foot/second²': 0.3048,
      'standard gravity (g)': 9.80665
    }
  },
  force: {
    baseUnit: 'newton',
    units: {
      newton: 1,
      kilogramForce: 9.80665,
      poundForce: 4.448221615
    }
  },
  momentum: {
    baseUnit: 'kilogram meter per second',
    units: {
      'kilogram meter per second': 1,
      'newton second': 1,
      'pound foot per second': 1.35582
    }
  },
  stress: {
    baseUnit: 'pascal',
    units: {
      pascal: 1,
      kilopascal: 1000,
      megapascal: 1000000,
      bar: 100000,
      poundPerSquareInch: 6894.76
    }
  },
  strain: {
    baseUnit: 'dimensionless',
    units: {
      'dimensionless': 1,
      'percent': 0.01
    }
  },

  // Thermodynamics
  heat: {
    baseUnit: 'joule',
    units: {
      joule: 1,
      calorie: 4.184,
      kilocalorie: 4184,
      britishThermalUnit: 1055.06
    }
  },
  enthalpy: {
    baseUnit: 'joule',
    units: {
      joule: 1,
      calorie: 4.184,
      kilocalorie: 4184,
      britishThermalUnit: 1055.06
    }
  },
  entropy: {
    baseUnit: 'joule per kelvin',
    units: {
      'joule per kelvin': 1,
      'calorie per kelvin': 4.184
    }
  },
  gibbsFreeEnergy: {
    baseUnit: 'joule',
    units: {
      joule: 1,
      calorie: 4.184,
      kilocalorie: 4184,
      britishThermalUnit: 1055.06
    }
  },
  helmholtzFreeEnergy: {
    baseUnit: 'joule',
    units: {
      joule: 1,
      calorie: 4.184,
      kilocalorie: 4184,
      britishThermalUnit: 1055.06
    }
  },

  // Electromagnetism
  current: {
    baseUnit: 'ampere',
    units: {
      ampere: 1,
      milliampere: 0.001,
      microampere: 0.000001
    }
  },
  voltage: {
    baseUnit: 'volt',
    units: {
      volt: 1,
      millivolt: 0.001,
      kilovolt: 1000
    }
  },
  resistance: {
    baseUnit: 'ohm',
    units: {
      ohm: 1,
      kiloohm: 1000,
      milliohm: 0.001
    }
  },
  magneticField: {
    baseUnit: 'tesla',
    units: {
      tesla: 1,
      gauss: 0.0001
    }
  },

  // Molecular
  molecularWeight: {
    baseUnit: 'gram per mole',
    units: {
      'gram per mole': 1,
      'kilogram per mole': 1000,
      'pound per mole': 453.592
    }
  },
  viscosity: {
    baseUnit: 'pascal second',
    units: {
      'pascal second': 1,
      poise: 0.1,
      centipoise: 0.001
    }
  },
  rateOfReaction: {
    baseUnit: 'mole per liter per second',
    units: {
      'mole per liter per second': 1,
      'mole per liter per minute': 1/60,
      'millimole per liter per second': 0.001
    }
  }
};

// Quantity with special temperature handling
const temperatureQuantities = ['temperature'];

const quantitySelect = document.getElementById('quantitySelect');
const unitsSection = document.getElementById('unitsSection');
const convertButton = document.getElementById('convertButton');
const resultDiv = document.getElementById('result');

// Create unit selection UI based on selected quantity
function createUnitsUI(quantity) {
  unitsSection.innerHTML = '';

  if (!unitsData.hasOwnProperty(quantity)) {
    unitsSection.innerHTML = '<p>Unit conversion for this quantity is not implemented yet.</p>';
    return;
  }

  if (temperatureQuantities.includes(quantity)) {
    const fromLabel = document.createElement('label');
    fromLabel.textContent = 'From Unit:';
    const fromSelect = document.createElement('select');
    fromSelect.id = 'fromUnit';
    ['celsius', 'fahrenheit', 'kelvin'].forEach(unit => {
      const option = document.createElement('option');
      option.value = unit;
      option.textContent = unit.charAt(0).toUpperCase() + unit.slice(1);
      fromSelect.appendChild(option);
    });

    const toLabel = document.createElement('label');
    toLabel.textContent = 'To Unit:';
    const toSelect = document.createElement('select');
    toSelect.id = 'toUnit';
    ['celsius', 'fahrenheit', 'kelvin'].forEach(unit => {
      const option = document.createElement('option');
      option.value = unit;
      option.textContent = unit.charAt(0).toUpperCase() + unit.slice(1);
      toSelect.appendChild(option);
    });

    const inputLabel = document.createElement('label');
    inputLabel.textContent = 'Value:';
    const inputValue = document.createElement('input');
    inputValue.type = 'number';
    inputValue.id = 'inputValue';
    inputValue.step = 'any';

    unitsSection.appendChild(fromLabel);
    unitsSection.appendChild(fromSelect);
    unitsSection.appendChild(toLabel);
    unitsSection.appendChild(toSelect);
    unitsSection.appendChild(inputLabel);
    unitsSection.appendChild(inputValue);

    return;
  }

  // For other quantities
  const fromLabel = document.createElement('label');
  fromLabel.textContent = 'From Unit:';
  const fromSelect = document.createElement('select');
  fromSelect.id = 'fromUnit';
  for (const unit in unitsData[quantity].units) {
    const option = document.createElement('option');
    option.value = unit;
    option.textContent = unit;
    fromSelect.appendChild(option);
  }

  const toLabel = document.createElement('label');
  toLabel.textContent = 'To Unit:';
  const toSelect = document.createElement('select');
  toSelect.id = 'toUnit';
  for (const unit in unitsData[quantity].units) {
    const option = document.createElement('option');
    option.value = unit;
    option.textContent = unit;
    toSelect.appendChild(option);
  }

  const inputLabel = document.createElement('label');
  inputLabel.textContent = 'Value:';
  const inputValue = document.createElement('input');
  inputValue.type = 'number';
  inputValue.id = 'inputValue';
  inputValue.step = 'any';

  unitsSection.appendChild(fromLabel);
  unitsSection.appendChild(fromSelect);
  unitsSection.appendChild(toLabel);
  unitsSection.appendChild(toSelect);
  unitsSection.appendChild(inputLabel);
  unitsSection.appendChild(inputValue);
}

// Conversion function for temperature (special case)
function convertTemperature(value, fromUnit, toUnit) {
  let celsius;

  switch (fromUnit) {
    case 'celsius':
      celsius = value;
      break;
    case 'fahrenheit':
      celsius = (value - 32) * (5 / 9);
      break;
    case 'kelvin':
      celsius = value - 273.15;
      break;
    default:
      return NaN;
  }

  switch (toUnit) {
    case 'celsius':
      return celsius;
    case 'fahrenheit':
      return celsius * (9 / 5) + 32;
    case 'kelvin':
      return celsius + 273.15;
    default:
      return NaN;
  }
}

// General conversion function for normal units
function convertUnits(value, quantity, fromUnit, toUnit) {
  // Convert input value to base unit
  const baseFactor = unitsData[quantity].units[fromUnit];
  if (!baseFactor) return NaN;
  const baseValue = value * baseFactor;

  // Convert base unit to target unit
  const targetFactor = unitsData[quantity].units[toUnit];
  if (!targetFactor) return NaN;
  const convertedValue = baseValue / targetFactor;

  return convertedValue;
}

// Convert button event handler
convertButton.addEventListener('click', () => {
  const quantity = quantitySelect.value;
  const fromUnit = document.getElementById('fromUnit')?.value;
  const toUnit = document.getElementById('toUnit')?.value;
  const inputValue = parseFloat(document.getElementById('inputValue')?.value);

  if (isNaN(inputValue)) {
    resultDiv.textContent = 'Please enter a valid number.';
    return;
  }
  if (!fromUnit || !toUnit) {
    resultDiv.textContent = 'Please select units.';
    return;
  }
  if (fromUnit === toUnit) {
    resultDiv.textContent = `Same unit selected. Value: ${inputValue}`;
    return;
  }

  let converted;
  if (temperatureQuantities.includes(quantity)) {
    converted = convertTemperature(inputValue, fromUnit, toUnit);
  } else if (unitsData.hasOwnProperty(quantity)) {
    converted = convertUnits(inputValue, quantity, fromUnit, toUnit);
  } else {
    resultDiv.textContent = 'Conversion for this quantity is not implemented yet.';
    return;
  }

  if (isNaN(converted)) {
    resultDiv.textContent = 'Conversion error.';
    return;
  }

  resultDiv.textContent = `${inputValue} ${fromUnit} = ${converted} ${toUnit}`;
});

// Update units UI when quantity changes
quantitySelect.addEventListener('change', () => {
  createUnitsUI(quantitySelect.value);
  resultDiv.textContent = '';
});

// Initialize UI at page load
document.addEventListener('DOMContentLoaded', () => {
  createUnitsUI(quantitySelect.value);
});
