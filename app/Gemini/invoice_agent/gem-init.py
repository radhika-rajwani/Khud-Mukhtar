import google.generativeai as genai  
import json

genai.configure(api_key=""GENAI_API_KEY"")
# We will replace this with the actual conversation between the customer and the tailor after the whole negotiation is done.
chat_transcript="""
Customer: Hi, my name is Mahnoor, I need to get 2 full piece suits stitched and one trouser.
Tailor: Sure, I can help you with that. What fabric do you want to use for the suits?
Customer: I want to use cotton fabric for both suits.
Tailor: Noted. Any design preferances?
Customer: Nope, just plain stitching.
Tailor: Okay! The stitching will const 200 rupees per shirt and 150 rupees for the trouser.
Customer: Okay. Let's proceed with the order.
Tailor: Sure! I will take your measurements and get started on the order. Can you please provide me with your measurements?

"""

#System Prompt for model instruction:)
#To basically tell the model "ooh you are an invoice generator. Generate invoice in this format."
#Telling the model to generate the invoice in the JSON format because it is easy to parse and later on would be easy to bring it to the shape of a table or if we wanna save in a database.
system_instruction = """
You are an invoice generating assistant for a tailor. Based on the full conversation
between a customer and a tailor, extract the order details and generate an invoice in the following JSON format.

This is only a sample format:

{
    "customer_name": "Gireesh",
    "items": [
        {
            "item": "Kurti",
            "quantity": 2,
            "unit_price": 3000,
            "total_price": 6000
        },
        {
            "item": "Trouser",
            "quantity": 1,
            "unit_price": 1500,
            "total_price": 1500
        }
    ],
    "total_amount": 7500,
    "notes": "Plain cotton fabric. Round collar kurtis. Straight trousers."
}

Only return valid JSON. Do not add any explanations or extra text.
Make sure the quantities, item names, and prices reflect the actual conversation.

"""

#Nowwww we send this to gemini
response = genai.GenerativeModel("gemini-1.5-flash").generate_content(
    system_instruction + "\nHere is the conversation:\n" + chat_transcript
)

#Printing the response
print(response.text)
# Clean response: remove markdown ```json ... ``` if present
cleaned_response = response.text.strip().strip("```json").strip("```").strip()

# Save the JSON to a file
try:
    invoice_data = json.loads(cleaned_response)
    with open("invoice.json", "w") as f:
        json.dump(invoice_data, f, indent=4)
    print("✅ Invoice saved to 'invoice.json'")
except json.JSONDecodeError as e:
    print("❌ Failed to parse Gemini's response as JSON. Check the model output.")
    print("Error:", e)
