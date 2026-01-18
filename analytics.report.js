export function generateReport(allocations, validation) {
  console.log("----- Launchpad Report -----");

  validation.forEach(v => {
    console.log("User:", v.address, "Allocated:", v.allocated, "Valid:", v.valid);
  });

  console.log("-----------------------------");
}
