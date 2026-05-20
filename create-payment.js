// ============================================================
// YoyooBaker — HitPay Payment Function (fixed)
// File location: netlify/functions/create-payment.js
// Uses built-in https module — works on ALL Node.js versions
// ============================================================

var https = require('https');

var CORS = {
  'Access-Control-Allow-Origin':  '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Content-Type':                 'application/json'
};

// Helper: make an HTTPS POST request using Node built-ins
function hitpayPost(apiKey, payload) {
  return new Promise(function(resolve, reject) {
    var bodyStr = JSON.stringify(payload);
    var options = {
      hostname: 'api.hit-pay.com',
      path:     '/v1/payment-requests',
      method:   'POST',
      headers: {
        'X-BUSINESS-API-KEY': apiKey,
        'Content-Type':       'application/json',
        'Content-Length':     Buffer.byteLength(bodyStr),
        'X-Requested-With':   'XMLHttpRequest'
      }
    };

    var req = https.request(options, function(res) {
      var data = '';
      res.on('data', function(chunk) { data += chunk; });
      res.on('end',  function() {
        try { resolve({ status: res.statusCode, body: JSON.parse(data) }); }
        catch(e) { reject(new Error('Invalid JSON from HitPay: ' + data)); }
      });
    });

    req.on('error', function(err) { reject(err); });
    req.write(bodyStr);
    req.end();
  });
}

exports.handler = async function(event) {

  // Handle CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers: CORS, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers: CORS, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  // Check API key is configured
  if (!process.env.HITPAY_API_KEY) {
    console.error('HITPAY_API_KEY environment variable is not set');
    return {
      statusCode: 500,
      headers: CORS,
      body: JSON.stringify({ error: 'Payment gateway not configured' })
    };
  }

  try {
    var body = JSON.parse(event.body || '{}');
    var amount  = body.amount;
    var name    = body.name;
    var phone   = body.phone;
    var product = body.product;
    var notes   = body.notes || '';
    var date    = body.date  || '';

    // Validate required fields
    if (!amount || !name || !phone || !product) {
      return {
        statusCode: 400,
        headers: CORS,
        body: JSON.stringify({ error: 'Missing required fields: amount, name, phone, product' })
      };
    }

    // Build order description visible in HitPay dashboard
    var purpose = product;
    if (notes) purpose += ' | ' + notes;
    if (date)  purpose += ' | Date: ' + date;
    purpose += ' | ' + name + ' (' + phone + ')';

    // Create payment request via HitPay API
    var result = await hitpayPost(process.env.HITPAY_API_KEY, {
      amount:                  parseFloat(amount).toFixed(2),
      currency:                'MYR',
      name:                    name,
      phone:                   phone,
      purpose:                 purpose,
      send_sms:                false,
      send_email:              false,
      allow_repeated_payments: false,
      redirect_url:            'https://yoyoobaker.netlify.app/?payment=success'
    });

    console.log('HitPay response status:', result.status);
    console.log('HitPay response body:', JSON.stringify(result.body));

    // Success — return the checkout URL to the browser
    if (result.body && result.body.url) {
      return {
        statusCode: 200,
        headers: CORS,
        body: JSON.stringify({ url: result.body.url, id: result.body.id })
      };
    }

    // HitPay returned an unexpected response
    return {
      statusCode: 502,
      headers: CORS,
      body: JSON.stringify({
        error:  'HitPay did not return a payment URL',
        detail: result.body.message || JSON.stringify(result.body)
      })
    };

  } catch (err) {
    console.error('Function error:', err.message);
    return {
      statusCode: 500,
      headers: CORS,
      body: JSON.stringify({ error: err.message })
    };
  }
};
