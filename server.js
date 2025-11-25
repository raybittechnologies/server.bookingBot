const express = require("express");
const { CallLog } = require("./models/index");

const app = express();
const PORT = 5073;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./models/index");

// ROUTES / API

app.post("/data", async (req, res) => {
  try {
    const data = req.body.call;

    console.log("req.data:", data);

    // // Validate required fields
    // if (!data.call_analysis || !data.call_analysis.user_name) {
    //   return res.status(400).json({ message: "Missing required fields" });
    // }

    let saved = null; // declare outside

    // Save only if call has ended
    if (data.call_status === "ended") {
      saved = await CallLog.create({
        call_id: data.call_id,
        agent_id: data.agent_id,
        booking_user: data.call_analysis?.custom_analysis_data.user_name,
        booking_summary: data.call_analysis.call_summary,
        from_number: data.from_number,
        to_number: data.to_number,
        duration: data.call_cost.total_duration_seconds,
        combined_cost: data.call_cost.combined_cost,
      });
    }

    return res.json({
      message:
        data.call_status === "ended"
          ? "Data saved successfully"
          : "Call not ended. No data saved.",
      data: saved,
    });
  } catch (error) {
    console.error("Error saving data:", error);
    return res
      .status(500)
      .json({ message: "Failed to process request", error });
  }
});

// START SERVER

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
