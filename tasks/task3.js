function addSuccessPercent(olympicRepresentation) {
  return olympicRepresentation.map(item => {
    const percent =
      item.athletes === 0
        ? "0%"
        : ((item.medals / item.athletes) * 100).toFixed(1) + "%";

    return {
      sport: item.sport,
      athletes: item.athletes,
      medals: item.medals,
      percentOfSuccess: percent
    };
  });
}

module.exports = addSuccessPercent;
