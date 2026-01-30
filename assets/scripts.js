// ===============================
// FETCH PLANS LOGIC
// ===============================
async function fetchPlans(userInput) {
  try {
    const response = await fetch('/api/search', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userInput)
    });
    const CHANNEL_LOGOS = {
  svt1: "images/channels/svt1.png",
  svt2: "images/channels/svt2.png",
  tv3: "images/channels/tv3.png",
  tv4: "images/channels/tv4.png",
  kanal5: "images/channels/kanal5.png",
  tv6: "images/channels/tv6.png",
  sjuan: "images/channels/sjuan.png",
  tv8: "images/channels/tv8.png",
  kanal9: "images/channels/kanal9.png",
  tv10: "images/channels/tv10.png",
  kanal11: "images/channels/kanal11.png",
  tv12: "images/channels/tv12.png",
  svt24: "images/channels/svt24.png",
  kunskapskanalen: "images/channels/kunskapskanalen.png",
  axess: "images/channels/axess.png",
  viaplaysport: "images/channels/viaplay.png",
  godare: "images/channels/godare.png"
  // add remaining
};

    const result = await response.json();
    console.log("Backend response:", result);

    const output = document.getElementById("result");
    if (output) {
      output.innerHTML = JSON.stringify(result, null, 2);
    }

    return result;

  } catch (err) {
    console.error("Error fetching plans:", err);
  }
}


// ===================================================================
// IMPORTANT:
// All old chat logic is removed because your new chat widget uses 
// assets/chat.js and partials/chat.html
//
// This ensures scripts.js does not crash the page.
// ===================================================================


// (If you need functions for your quiz or filters, they stay here later.)
