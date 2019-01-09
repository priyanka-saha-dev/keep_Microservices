# Assignments

- Recreate the App using ExpressJS as the Web Framework
- Keep_Microservices

# Deadline

- Before next session

# Synopsis

- Design & implement, Notes Application as a personal productivity tool for display users and notes. Below are its endpoints those you need to design.

# Core features

- As a user, i should be able to view user details.
- As a user, i should be able to list all created notes by me.

# What must be implemented

1. The code should have 4 Microservices with following names :-
    - Web (for Angular web client )
    - Notes ( for notes microservices)
    - Users (for users microservices )
    - ApiGateWay ( to manage all the microservices available). 
2. The notes and user both microservices should have separate db.json to store and display the notes and users details.
3. The “user” object of user’s db.json should contain userId, username,password
4. The “notes” object of note’s db.json should contain noteId,title,text,userid and status.
NodeJS based server side application (server part only of the application).
5. Automated test cases to test the server side application.
6. Must be able to interface & integrate with any web based clients.
7. Implement the application using TDD approach.
8. Instructions for implementation and submission
9. Successful submission must have a well document README.md, which explain how to build, run & test the application, you can also add a DESIGN.MD to explain your data model & design.
10. Source code must be integrated with ESLint with standard ESLint recommended JS rules, and should not have any lint errors open.

# API design

1. API to view user’s details /api/v1/users/:userId.
    - Display userName and password from db.json.
2. API for getting all notes of a user /api/v1/notes/
    - userId will be passed as query param into request and will be used to fetch notes by userId.




