## Profile

    GET /profile

Request

    {
        "id": 1,
        "name": "John Doe"
        "email": "something@something.com"
        "avatar_url: "http://avatar.png"
    }

## Manager

GET /profile/manager

Request

    {
        "id": 9,
        "name": "Big John"
        "email": "BigJohn@abc.com",
        "previous": {
             "id": 9,
            "name": "Big Big John"
            "email": "BigJohn@abc.com",
        }
    }
