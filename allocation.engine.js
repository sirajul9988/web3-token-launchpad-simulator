export function allocateTokens(participants, totalSupply) {
  console.log("Allocating tokens...");

  const totalContribution = participants.reduce((sum, p) => sum + p.contribution, 0);

  return participants.map(p => {
    const share = (p.contribution / totalContribution) * totalSupply;

    return {
      address: p.address,
      allocated: Math.floor(share)
    };
  });
}
