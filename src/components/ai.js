console.log("KEY =", import.meta.env.VITE_GEMINI_API_KEY);
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(
  import.meta.env.VITE_GEMINI_API_KEY
);

export async function generateProductDetails(imageBase64) {
  try {
    const model = genAI.getGenerativeModel({
  model: "gemini-3.6-flash",
});

    const prompt = `
You are an expert handicraft catalog manager.

Look at this product image and identify:
1. Product Name
2. Product Category
3. Professional Product Description
4. Suggested Price Range in Indian Rupees

Return ONLY in this format:

Name: ...
Category: ...
Description: ...
Price: ...
`;

    const result = await model.generateContent([
      prompt,
      {
        inlineData: {
          data: imageBase64,
          mimeType: "image/jpeg",
        },
      },
    ]);

    return result.response.text();
  } catch (error) {
    console.error("Gemini Error:", error);
    return error.message;
  }
}