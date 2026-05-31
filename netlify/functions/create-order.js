const Razorpay = require("razorpay");

exports.handler = async (event) => {

  try {

    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET
    });

    console.log("EVENT BODY:", event.body);

    const body = JSON.parse(event.body);  

    const order = await razorpay.orders.create({
      amount: body.amount,
      currency: body.currency,
      receipt: body.receipt
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        order_id: order.id,
        amount: order.amount,
        currency: order.currency
      })
    };

  } catch (error) {
  console.error("CREATE ORDER ERROR:", error);

  return {
    statusCode: 500,
    body: JSON.stringify({
      error: error.message,
      rawBody: event.body || null
    })
  };
}

};