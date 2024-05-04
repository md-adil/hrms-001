# Feedback

## Feedbacks self

    GET /feedbacks/self?season=q1-2024

Response

```json
{
  "id": 32,
  "comment": "some comment",
  "season": {
    "id": 32,
    "name": "q1-2024",
    "started_at": "2024-01-01",
    "ended_at": "2024-03-31"
  },
  "status": "draft",
  "reviews": [
    {
      "id": 19,
      "question": "My subordinate logically analyze problems and develops right technical solutions.",
      "answer": "absc.com",
      "file_url": "https://sbcdc.pdf"
    },
    {
      "id": 20,
      "question": "My subordinate logically analyze problems and develops right technical solutions.",
      "answer": "absc.com",
      "file_url": "https://sbcdc.pdf"
    },
    {
      "id": 22,
      "question": "My subordinate logically analyze problems and develops right technical solutions.",
      "answer": "absc.com",
      "file_url": "https://sbcdc.pdf"
    },
    {
      "id": 23,
      "question": "My subordinate logically analyze problems and develops right technical solutions.",
      "answer": "absc.com",
      "file_url": "https://sbcdc.pdf"
    },
    {
      "id": 24,
      "question": "My subordinate logically analyze problems and develops right technical solutions.",
      "answer": "absc.com",
      "file_url": "https://sbcdc.pdf"
    }
  ]
}
```

## Feedbacks self publish

    PUT /feedbacks/self?season=q1-2024

Request

```json
{
  "id": 32,
  "comment": "some comment",
  "season_id": 32,
  "status": "draft",
  "reviews": [
    {
      "id": 19,
      "answer": "absc.com"
    },
    {
      "id": 20,
      "answer": "absc.com"
    },
    {
      "id": 22,
      "answer": "absc.com"
    },
    {
      "id": 23,
      "answer": "absc.com"
    },
    {
      "id": 24,
      "answer": "absc.com"
    }
  ]
}
```

## Feedbacks manager

    GET /feedbacks/manager?season=q1-2024

Response

```json
{
  "id": 32,
  "comment": "some comment",
  "season": {
    "name": "q1-2024",
    "started_at": "2024-01-01",
    "ended_at": "2024-03-31"
  },
  "reviews": [
    {
      "question": "My subordinate logically analyze problems and develops right technical solutions.",
      "answer": "absc.com",
      "file_url": "https://sbcdc.pdf"
    },
    {
      "question": "My subordinate logically analyze problems and develops right technical solutions.",
      "answer": "absc.com",
      "file_url": "https://sbcdc.pdf"
    },
    {
      "question": "My subordinate logically analyze problems and develops right technical solutions.",
      "answer": "absc.com",
      "file_url": "https://sbcdc.pdf"
    },
    {
      "question": "My subordinate logically analyze problems and develops right technical solutions.",
      "answer": "absc.com",
      "file_url": "https://sbcdc.pdf"
    },
    {
      "question": "My subordinate logically analyze problems and develops right technical solutions.",
      "answer": "absc.com",
      "file_url": "https://sbcdc.pdf"
    }
  ]
}
```
