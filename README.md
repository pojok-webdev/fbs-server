You may change users password like this example
curl -d "email=puji@padi.net.id&name=puji&newpassword=puji&password=puji" -X POST http://localhost:2000/changepassword

You may create user password like this example
curl -d "email=jane@padi.net.id&name=jane doe&newpassword=jane&password=jane" -X POST http://localhost:2000/createuser
