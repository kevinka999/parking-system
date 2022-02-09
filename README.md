# Summary
Manage your parking with this system.

This application was built in React.js integrated with one API Rest created in .NET Core

*This application was builted for studying prupose*

# How to run
1. Clone the repository in any path on your computer using git or download it.
2. Run the script file called *.\database_estacionamento.sql* to create the database in ur local machine.
3. Run the API localy using IIS (API folder is located on "./Estacionamento")
*Obs: Make sure to run the API on the door 3000. You can also change the API route on the React application, follow the step bellow*
4. Open the terminal on the folder *./website* and type *"**npm install**"* to install the project depedencies (make sure have Node installed in ur computer)
5. Run the website using react-script by type *"**npm start**"* on your terminal (make sure to be on the root of ./website folder)

### How to configure your API url
If you do not run the API on localhost or use a different door, you will need to change the API url to make the calls.

1. Open the file on *.\website\src\services\api.js*
2. Modify the **baseURL** for the respective API url
*EX: baseURL: "https://127.0.0.1:3000"*
