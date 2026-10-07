const findDeviceById = (devices, targetId) => {
  for (let i = 0; i < devices.length; i++) {
    if (devices[i].id === targetId) return devices[i];
  }
  return null;
};

const updateDevice = (devices, targetId, updatedData) => {
  const targetDevice = findDeviceById(devices, targetId);
  if (targetDevice === null) return false;

  if (updatedData.name !== undefined) {
    targetDevice.name = updatedData.name;
  }

  if (updatedData.isActive !== undefined) {
    targetDevice.isActive = updatedData.isActive;
  }

  if (updatedData.powerWatts !== undefined) {
    targetDevice.powerWatts = updatedData.powerWatts;
  }

  return true;
};

const smartDevices = [
  { id: 'D01', name: 'Điều hòa Phòng Khách', isActive: true, powerWatts: 2000 },
  { id: 'D02', name: 'Đèn ngủ', isActive: true, powerWatts: 15 }
];

console.log("--- TRƯỚC KHI CẬP NHẬT ---");
console.table(smartDevices);

updateDevice(smartDevices, 'D01', { isActive: false });
updateDevice(smartDevices, 'D02', { powerWatts: 0 });

console.log("\n--- SAU KHI CẬP NHẬT ---");
console.table(smartDevices);
