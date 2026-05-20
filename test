// ============================================================
// DIAGNOSTIC FUNCTION — netlify/functions/test.js
// Upload this to GitHub alongside create-payment.js
// Then visit: https://yoyoobaker.netlify.app/.netlify/functions/test
// It will tell us exactly what's wrong
// ============================================================

exports.handler = async function(event) {
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      status:           'Function is running OK',
      node_version:     process.version,
      api_key_set:      !!process.env.HITPAY_API_KEY,
      api_key_preview:  process.env.HITPAY_API_KEY
                          ? process.env.HITPAY_API_KEY.substring(0, 10) + '...'
                          : 'NOT SET — check Netlify environment variables',
      salt_set:         !!process.env.HITPAY_SALT,
      fetch_available:  typeof fetch !== 'undefined',
      method:           event.httpMethod
    })
  };
};
