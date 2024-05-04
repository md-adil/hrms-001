POST /login

Request

    {
      "email": "john@doe.com";
      "password": "somethingCool";
    }

Response

    {
      "token": "abc",
      "user": {
        "name": "John Doe",
        "email": "john@doe.com"
      }
    }
