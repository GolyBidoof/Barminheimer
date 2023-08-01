const Battery = Windows.Devices.Power.Battery;
const aggBattery = Battery.aggregateBattery;

// Get report
const report = aggBattery.getReport();

const remainingCapacity = report.remainingCapacityInMilliwattHours;
const fullCapacity = report.fullChargeCapacityInMilliwattHours;

const percentage = (remainingCapacity / fullCapacity) * 100;

window.onload = () => {
    const rightTopBarItem = document.getElementById('rightTopBarItem');
    rightTopBarItem.innerHTML = `Battery: ${Math.round(percentage)}%`;
    renderClock();
}