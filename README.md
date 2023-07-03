# Receipt-Processor-Challenge

## Files included in this project:
1. 'index.js': This is the main file of the project where the Express server is created and configured. It handles the routing and logic for processing receipts and calculating points.
   
3. 'receipt.json' : It is a JSON  file which is typically used as a sample or test data to simulate the receipt information that would be sent in the POST request to the /receipts/process endpoint. It allows you to test the functionality of the server by processing a receipt and calculating the points based on the defined rules.

4. 'package.json': This file contains metadata about the project and the list of dependencies required by the project. It includes information such as the project name, version, author, and scripts.

5. 'package-lock.json': This file is automatically generated by npm (Node Package Manager) and provides version information for all the dependencies installed in the project. It ensures that the project's dependencies are installed with the same versions across different environments.

6. 'node_modules/': This directory contains all the dependencies installed for the project. It is automatically created and managed by npm when you run the npm install command.

## How to run the project:

1. Clone the Project: Clone or download the project source code to your local machine.

2. Navigate to Project Directory: Open a terminal or command prompt and navigate to the directory where you have the project files.

3. Build the Docker Image: Run the following command to build the Docker image for your project:
    #### docker build -t {api-image-name}

4. Run the Docker Container: After the image is built successfully, run the Docker container using the following command:                                                    
    #### docker run -p 3000:3000 {api-image-name}

5. Sending POST Request using docker command: Replace <container_name_or_id> with the actual name or ID of your container. Below is the command for sending POST Request:    
    #### docker exec <container_name_or_id> curl -X POST -H "Content-Type: application/json" -d '@path/receipt.json' http://localhost:3000/receipts/process

6. Sending GET Request using docker command : Replace <id> with the specific receipt ID you want to retrieve points for. Below is the code for sending GET Request:          
    #### docker exec <container_name_or_id> curl -X GET http://localhost:3000/receipts/<id>/points




 
