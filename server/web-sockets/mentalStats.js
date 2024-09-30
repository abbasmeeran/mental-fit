async function getMentalStats(options) {
  try {
    const response = await fetch("http://localhost:3001/api/logs", options)
      .then(handleResponse)
      .catch(handleError);
    const json = await response.json();
    return json;
  } catch (err) {}
}

module.exports = {
  getMentalStats,
};
