# todos-api
Learning for express + mongo (api for todo-list)

# Get todos

`GET` `/todos`

*response*

```
[
    {
        "isActive": true,
        "id": "1584018487791",
        "_id": "5e6a2b3c998e7db513064e97",
        "__v": 0
    },
    {
        "isActive": true,
        "id": "1584018487791",
        "_id": "5e6a39c80042afb8c8b8209b",
        "task": "create third todo",
        "__v": 0
    },
    {
        "isActive": false,
        "id": "f3eb80fb",
        "_id": "5e6a3a35e0441cb9bcbe0307",
        "task": "create 4rd todo",
        "__v": 0
    }
]
```

# Post todos

`POST` `/todos`

*body*
```
{
	"task": "create 4rd todo"
}
```
*response*
```
{
    "isActive": true,
    "id": "f139cf7c",
    "_id": "5e6a4d5c433fc6baa929a7a8",
    "task": "create 4rd todo",
    "__v": 0
}
```

# Edit todos

`PATCH` `/todos/:id`

*body*
```
{
	"task": "I'm so lol"
}
```
*response*
```
{
    "isActive": true,
    "id": "f139cf7c",
    "_id": "5e6a4d5c433fc6baa929a7a8",
    "task": "I'm so lol",
    "__v": 0
}
```

# Edit status

`PATCH` `/todos/update_status/:id`

*body*
```
{
  "isActive": false
}
```
*response*
```
{
    "isActive": false,
    "id": "f139cf7c",
    "_id": "5e6a4d5c433fc6baa929a7a8",
    "task": "I'm so lol",
    "__v": 0
}
```

# Delete todo

`DELETE` `/todos/:id`

*response*
```
{
    "isActive": false,
    "id": "f139cf7c",
    "_id": "5e6a4d5c433fc6baa929a7a8",
    "task": "I'm so lol",
    "__v": 0
}
```
