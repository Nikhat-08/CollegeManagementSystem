// Import required modules
const express = require('express');
const axios = require('axios');

// Create an Express application
const app = express();
const port = 3000;

// Replace with your Dialogflow API key and project ID
const dialogflowProjectId = 'vvitqueryassist-cumk';
const dialogflowApiKey = 'AIzaSyDs5FGU7gYla0bHo6idppPZg2057HYWesU';

// Endpoint for handling queries
app.get('/query', async (req, res) => {
  try {
    // Extract query parameter from the request
    const query = req.query.query;

    // Make a request to Dialogflow using the server-side API key
    const dialogflowResponse = await axios.post(
      `https://dialogflow.googleapis.com/v2/projects/${dialogflowProjectId}/agent/sessions/123456789:detectIntent`,
      {
        queryInput: {
          text: {
            text: query,
            languageCode: 'en',
          },
        },
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${dialogflowApiKey}`,
        },
      }
    );

    // Process the Dialogflow response as needed
    const fulfillmentText = dialogflowResponse.data.queryResult.fulfillmentText;

    // Send the response back to the client
    res.json({ response: fulfillmentText });
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
