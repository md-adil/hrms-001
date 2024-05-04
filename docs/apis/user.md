## Profile

    GET /profile

Response

```json
{
  "id": 1,
  "name": "John Doe",
  "email": "something@something.com",
  "avatar_url": "http://avatar.png",
  "department": {
    "id": 21,
    "code": "string",
    "name": "UK Operation"
  },
  "job": {
    "id": 32,
    "title": "Sales Head"
  }
}
```

## Manager

GET /profile/manager

Response

```json
{
  "id": 9,
  "name": "Big John",
  "email": "BigJohn@abc.com",
  "previous": {
    "id": 9,
    "name": "Big Big John",
    "email": "BigJohn@abc.com"
  }
}
```
