const chats = [
  {
    "isGroupChat": false,
    "users": [
      {
        "name": "Alice Smith",
        "email": "alice@example.com"
      },
      {
        "name": "Bob Johnson",
        "email": "bob@example.com"
      }
    ],
    "_id": "617a123e18c25468bc7c4dd4",
    "chatName": "Alice Smith"
  },
  {
    "isGroupChat": false,
    "users": [
      {
        "name": "Eve Johnson",
        "email": "eve@example.com"
      },
      {
        "name": "Grace Wilson",
        "email": "grace@example.com"
      }
    ],
    "_id": "617a123e18c25468b27c4dd4",
    "chatName": "Eve Johnson"
  },
  {
    "isGroupChat": false,
    "users": [
      {
        "name": "Michael Brown",
        "email": "michael@example.com"
      },
      {
        "name": "Sophia Lee",
        "email": "sophia@example.com"
      },
    ],
    "_id": "617a123e18c2d468bc7c4dd4",
    "chatName": "Michael Brown"
  },
  {
    "isGroupChat": true,
    "users": [
      {
        "name": "Alice Smith",
        "email": "alice@example.com"
      },
      {
        "name": "Eve Johnson",
        "email": "eve@example.com"
      },
      {
        "name": "Michael Brown",
        "email": "michael@example.com"
      }
    ],
    "_id": "617a518c4081150716472c78",
    "chatName": "Family Group",
    "groupAdmin": {
      "name": "Eve Johnson",
      "email": "eve@example.com"
    },
  },
  {
    "isGroupChat": false,
    "users": [
      {
        "name": "David Miller",
        "email": "david@example.com"
      },
      {
        "name": "Grace Wilson",
        "email": "grace@example.com"
      },
    ],
    "_id": "617a123e18c25468bc7cfdd4",
    "chatName": "David Miller"
  },
  {
    "isGroupChat": true,
    "users": [
      {
        "name": "Alice Smith",
        "email": "alice@example.com"
      },
      {
        "name": "Eve Johnson",
        "email": "eve@example.com"
      },
      {
        "name": "Michael Brown",
        "email": "michael@example.com"
      }
    ],
    "_id": "617a518c4081150016472c78",
    "chatName": "Friends Group",
    "groupAdmin": {
      "name": "Eve Johnson",
      "email": "eve@example.com"
    },
  },
];

module.exports= { chats };