export function validateLimits(allocations) {
  return allocations.map(a => {
    return {
      ...a,
      valid: a.allocated <= 50000
    };
  });
}
