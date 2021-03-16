const createNewLead = require('./createNewLead');
const { refreshTokens } = require('./tokens');

async function createLead(req, res) {
  const tokens = await refreshTokens();
  const results = await createNewLead(req.body.variables, tokens);
  return res.status(200).json(results);
}

module.exports = createLead;
