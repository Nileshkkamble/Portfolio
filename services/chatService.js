import axios from "axios";
import portfolio from "./../services/portfoliocontext.json";
const API_URL = "https://api.groq.com/openai/v1/chat/completions";
const API_KEY = process.env.NEXT_PUBLIC_GROQ_API_KEY; // Use the public API key

// export const sendMessageToGroq = async (userMessage) => {
//   try {
//     const response = await axios.post(
//       API_URL,
//       {
//         model: "llama-3.3-70b-versatile", // Change the model if needed
//         messages: [
//             {role:"system", content: `"You Are a Smart assistant, your aim is to answer the query using given information as you represent a person named "Nilesh Kamble". Your goal is to answer the query that are only related to Nilesh, you should not address any other racist,sexist queries or any miscellaneous queries. Following is the given information of Nilesh.

//                 ## Introduction
//                 **FullName** : Nilesh Kamble
//                 **Age** : 26
//                 **Married Status** : Single
                
//                 ## Education 
//                 **Bachlors** : Completed Bachlors of Engineering in Computer Science with Honors Data Science 
//                 **Diploma** : Completed Diploma in Computer Technology from MSBTE
//                 **SSC** : Completed SSC from State Board
                
//                 ## Experience
//                 -- Currently Working as Software Development Engineer in 'Jio Platforms Limited' since jan 2024. 
//                 -- Co-founder of CodeClause.
                   
//                 ## Other Projects
//                 -- Cattle Health Monitoring System Developed an IoT-based system with a Smart Band to monitor temperature and heart rate in real time. Enabled real-time data transmission and automated alerts for anomalies. Enhanced monitoring capabilities by integrating additional sensors for im- proved livestock management.
//                 -- Automatic Result Saver -Automated result fetching and storage for MSBTE students using web scraping techniques. Stored results systematically in Excel files for efficient data management.Improved usability with streamlined processes for result fetching and retrieval.
                
                
                
//                 ## Hobbies
//                 -- Cricket
//                 -- Travelling
                
//                 ## Sports
//                 -- Cricket
//                 -- Chess
                
//                 ## Social Media Handles
//                 **LinkedIn** : https://www.linkedin.com/in/nilesh-kamble-692173206/
//                 **Email Address** : nkkamble33@gmail.com
                
//                 "`},
                
//           { role: "user", content: userMessage },
//         ],
//         temperature: 1,
//         max_tokens: 1024,
//         top_p: 1,
//         stream: false,
//       },
//       {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${API_KEY}`,
//         },
//       }
//     );

//     return response.data.choices[0]?.message?.content || "No response available.";
//   } catch (error) {
//     console.error("Error fetching Groq API response:", error);
//     return "Error connecting to the chatbot.";
//   }
// };


export const sendMessageToGroq = async (userMessage) => {
  try {
    const response = await axios.post(
      API_URL,
      {
        model: "llama-3.3-70b-versatile",
        messages: [
          {
            role: "system",
            content: `
${portfolio.systemPrompt}

Here is the ONLY information you can use:
${JSON.stringify(portfolio.data, null, 2)}
            `
          },
          { role: "user", content: userMessage }
        ],

        // 🔥 IMPORTANT FIXES
        temperature: 0.2,   // reduce hallucination
        top_p: 0.9,
        max_tokens: 500
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`
        }
      }
    );

    return response.data.choices[0]?.message?.content || "No response available.";
  } catch (error) {
    console.error("Error:", error);
    return "Error connecting to the chatbot.";
  }
};