# **Link Shortener API**

A simple, fast, and efficient backend API for creating and managing short URLs. This service takes a long URL and generates a unique, short identifier that redirects to the original URL, perfect for sharing cleaner links on social media, in emails, or in any situation where space is limited.

## **✨ Key Features**

* **Generate Short URLs:** Provide a long URL and get a unique short ID in return.  
* **URL Redirection:** Accessing the short URL path (e.g., http://yourdomain.com/shortId) will redirect the user to the original long URL.

## **🛠️ Tech Stack**

* **Runtime:** [Node.js](https://nodejs.org/)  
* **Framework:** [Express.js](https://expressjs.com/)  
* **Database:** [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/) ODM  
* **Short ID Generation:** [nanoid](https://www.npmjs.com/package/nanoid) for creating unique, URL-friendly IDs.  
* **Environment Variables:** [dotenv](https://www.npmjs.com/package/dotenv)

## **⚙️ Setup and Installation**

Follow these steps to get the project running on your local machine.

### **Prerequisites**

* [Node.js](https://nodejs.org/) (v20.x or higher recommended)  
* [MongoDB](https://www.mongodb.com/try/download/community)

### **Installation**

1. **Clone the repository:**  
   git clone \[https://github.com/shubham019-ai/link-shortener-api.git\](https://github.com/shubham019-ai/link-shortener-api.git)  
   cd link-shortener-api

2. **Install the dependencies:**  
   npm install

3. Set up Environment Variables:  
   Create a file named .env in the root of the project and add the following variables. Replace the placeholder value with your actual MongoDB connection string.  
   PORT=8001  
   MONGO\_URL=your\_mongodb\_connection\_string

4. Start the server:  
   To run the server in development mode with automatic restarts:  
   npm run dev

   To run the server in production:  
   npm start

   The server will start on the port you defined in your .env file (e.g., http://localhost:8001).

## **🚀 API Endpoints**

Here is a summary of the available API routes.

### **POST /url**

* **Description:** Creates a new short URL.  
* **Request Body (JSON):**  
  {  
    "url": "\[https://www.example-long-url.com/some/very/long/path\](https://www.example-long-url.com/some/very/long/path)"  
  }

* **Successful Response (200 OK):**  
  {  
    "id": "Jk8sL9pQ"  
  }

### **GET /:shortId**

* **Description:** Redirects the user to the original long URL associated with the provided shortId. This endpoint also records the visit.  
* **Example Request:** GET http://localhost:8001/Jk8sL9pQ  
* **Successful Response:** A 302 Found redirect to the original URL.

## **🧑‍💻 Author**

* **Shubham Maurya**  
* GitHub: [@shubham019-ai](https://www.google.com/search?q=https://github.com/shubham019-ai)