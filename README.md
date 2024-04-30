**ObeSense-Django**

**Description:**
ObeSense is a predictive model built using RandomForestClassifier to classify obesity levels into five categories: "Underweight", "Normal Weight", "Obesity Level 1", "Obesity Level 2", and "Obesity Level 3". This project integrates a Django backend for serving predictions and a React frontend for user interaction. Additionally, the application is containerized using Docker for easy deployment and management.

**Getting Started:**

**Clone the Repository:**
git clone https://github.com/obesense-project.git
cd obesense-project

**Backend Setup:**
Navigate to the backend directory.

**Install dependencies:**
pip install -r requirements.txt

**Run Django server:**
django-admin runserver manage.py

**Frontend Setup:**
Navigate to the frontend directory.

**Install dependencies:**
npm install

**Start the React development server:**
npm start

**Accessing the Application:**
Open a web browser and go to http://localhost:3000 to access the ObeSense application.

**Docker Setup:**
**Build Docker Containers:**
Ensure Docker is installed and running on your system.

From the project root directory, run:
docker-compose build

**Run Docker Containers:**
**Start the Docker containers:**
docker-compose up

**Accessing the Application:**
Open a web browser and go to http://localhost:3000 to access the ObeSense application.

**Usage:**
Upon accessing the application, users can input relevant health metrics to obtain a prediction of their obesity level.
The RandomForestClassifier model will process the input data and return the predicted obesity level.

**Contributing:**
Contributions are welcome! Feel free to submit bug reports, feature requests, or pull requests to help improve ObeSense.

**License:**
This project is licensed under the MIT License. Feel free to use, modify, and distribute it as needed.

**Credits:**
ObeSense project was developed and maintained by Rahul.

**Contact:**
For inquiries or support, please contact rahulganapathy001@gmail.com.

**Disclaimer:**
ObeSense is for informational purposes only and should not be used as a substitute for professional medical advice or diagnosis. Always consult a healthcare professional for personalized guidance regarding health and wellness concerns.
