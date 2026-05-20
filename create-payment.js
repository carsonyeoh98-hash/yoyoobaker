// ============================================================
// YoyooBaker — HitPay Payment Function
// File location: netlify/functions/create-payment.js
//
// This runs on Netlify's server. Your API key is NEVER
// visible to customers — it lives in environment variables.
// ============================================================

exports.handler = async function(event) {

  // Only allow POST requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      },
      body: ''
    };
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method not allowed' };
  }

  try {
    var body = JSON.parse(event.body);
    var amount  = body.amount;
    var name    = body.name;
    var phone   = body.phone;
    var product = body.product;
    var notes   = body.notes || '';
    var date    = body.date  || '';

    // Basic validation
    if (!amount || !name || !phone || !product) {
      return {
        statusCode: 400,
        headers: { 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify({ error: 'Missing required fields' })
      };
    }

    // Build the order description that Yoyo sees in her HitPay dashboard
    var purpose = product;
    if (notes) purpose += ' | ' + notes;
    if (date)  purpose += ' | Pickup/Delivery: ' + date;
    purpose += ' | Customer: ' + name + ' (' + phone + ')';

    // Call HitPay API to create a payment request
    var response = await fetch('https://api.hit-pay.com/v1/payment-requests', {
      method: 'POST',
      headers: {
        'X-BUSINESS-API-KEY': process.env.HITPAY_API_KEY,  // stored securely in Netlify
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      },
      body: JSON.stringify({
        amount:                   parseFloat(amount).toFixed(2),
        currency:                 'MYR',
        name:                     name,
        phone:                    phone,
        purpose:                  purpose,
        send_sms:                 false,
        send_email:               false,
        allow_repeated_payments:  false,
        redirect_url:             'https://yoyoobaker.netlify.app/?payment=success'
        // ↑↑↑ REPLACE with your real domain once you have one
      })
    });

    var data = await response.json();

    // HitPay returns a .url if successful
    if (data.url) {
      return {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url: data.url, id: data.id })
      };
    }

    // HitPay returned an error
    console.error('HitPay API error:', JSON.stringify(data));
    return {
      statusCode: 502,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ error: 'HitPay declined the request', detail: data.message || '' })
    };

  } catch (err) {
    console.error('Function error:', err.message);
    return {
      statusCode: 500,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ error: 'Server error: ' + err.message })
    };
  }

};
