define({ "api": [
  {
    "type": "get",
    "url": "/auth/:method",
    "title": "get authentication method",
    "name": "GetAuthMethod",
    "group": "AUTH",
    "parameter": {
      "fields": {
        "param": [
          {
            "group": "param",
            "type": "string",
            "allowedValues": [
              "[\"apiKey\"",
              "\"jwt\"",
              "\"facebook\"]"
            ],
            "optional": false,
            "field": "method",
            "description": "<p>Type</p>"
          }
        ],
        "query": [
          {
            "group": "query",
            "type": "string",
            "optional": true,
            "field": "user",
            "description": "<p>query param when set to 1 return</p>"
          },
          {
            "group": "query",
            "type": "string",
            "optional": true,
            "field": "apikey",
            "description": "<p>apikey unique apikey for the user</p>"
          },
          {
            "group": "query",
            "type": "string",
            "optional": true,
            "field": "token",
            "description": "<p>jWT unique generated encrypted userData the user object</p>"
          }
        ]
      }
    },
    "description": "<p>endpoint allows various get request authentication facebook and google would use oAuth for userauthentication while apikey and jwt requires their parameters to be in the headers or query due to the stateless authentication principle of the auth implementation credentials are of either apikey or jwt is to be passed repeatedly for most write actions or resources</p>",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UnAuthorized",
            "description": "<p>invalid auth credentials provided</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 UnAuthorized\n\tUnAuthorized\n\nHTTP/1.1 401 UnAuthorized\n\t{mgs: \"validation mgs\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/passport/index.js",
    "groupTitle": "AUTH",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "_id",
            "description": "<p>unique id generated as idendier</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>the user email used Registration</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "fullName",
            "description": "<p>fullname firstName and Lastname</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "fullName.first",
            "description": "<p>first Name</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "fullName.last",
            "description": "<p>last Name</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>hashed password</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "gender",
            "description": "<p>user gender</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "dob",
            "description": "<p>date of birth of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "aboutMe",
            "description": "<p>briefs user info for profile</p>"
          },
          {
            "group": "Success 200",
            "type": "string[]",
            "optional": false,
            "field": "skills",
            "description": "<p>arrays of string of skills</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>describing user briefly</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "phoneNo",
            "description": "<p>contact phoneNo for the user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\tHTTP/1.1 201 created\n\t \t{\n\t \t \"_id\" : ObjectId(\"58f3faedd54ab01c60ad5585\"),\n\t \t \"email\" : \"user@keystonejs.com\",\n\t \t \"title\" : \"the only paris kportk in town\",\n\t \t \"skills\" : [ ],\n\t \t \"aboutMe\" : \"a new awesome wokkaholic who enjoys good and creative work that blows mind miles away\",\n\t \t \"dob\" : \"3-12-80\",\n\t \t \"gender\" : \"male\",\n\t \t \"phoneNo\" : 81333984314\n\t \t \"fullName\" : {\n\t \t\t \t\"first\" : \"keystone\",\n\t \t\t \t \"last\" : \"Admin\"\n \t \t}\n \t}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/api/auth/dashboard",
    "title": "get current user details",
    "name": "GetDashboard",
    "group": "AUTH",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>unique id to retrieve Category</p>"
          }
        ]
      }
    },
    "description": "<p>this endpoint is responsible for retrieving the current user biodata</p>",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UnAuthorized",
            "description": "<p>invalid auth credentials provided</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 UnAuthorized\n\tUnAuthorized",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/index.js",
    "groupTitle": "AUTH",
    "header": {
      "examples": [
        {
          "title": "header-auth-paramters",
          "content": "{\n\t\"apiKey\": \"my secure api key\"\n}\n\n\tOR\n\n{\n\t\"JWT_TOKEN\": \"my random apiker\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "_id",
            "description": "<p>unique id generated as idendier</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>the user email used Registration</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "fullName",
            "description": "<p>fullname firstName and Lastname</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "fullName.first",
            "description": "<p>first Name</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "fullName.last",
            "description": "<p>last Name</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>hashed password</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "gender",
            "description": "<p>user gender</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "dob",
            "description": "<p>date of birth of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "aboutMe",
            "description": "<p>briefs user info for profile</p>"
          },
          {
            "group": "Success 200",
            "type": "string[]",
            "optional": false,
            "field": "skills",
            "description": "<p>arrays of string of skills</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>describing user briefly</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "phoneNo",
            "description": "<p>contact phoneNo for the user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\tHTTP/1.1 201 created\n\t \t{\n\t \t \"_id\" : ObjectId(\"58f3faedd54ab01c60ad5585\"),\n\t \t \"email\" : \"user@keystonejs.com\",\n\t \t \"title\" : \"the only paris kportk in town\",\n\t \t \"skills\" : [ ],\n\t \t \"aboutMe\" : \"a new awesome wokkaholic who enjoys good and creative work that blows mind miles away\",\n\t \t \"dob\" : \"3-12-80\",\n\t \t \"gender\" : \"male\",\n\t \t \"phoneNo\" : 81333984314\n\t \t \"fullName\" : {\n\t \t\t \t\"first\" : \"keystone\",\n\t \t\t \t \"last\" : \"Admin\"\n \t \t}\n \t}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/auth/:method",
    "title": "post authentication method",
    "name": "PostAuthMethod",
    "group": "AUTH",
    "parameter": {
      "fields": {
        "param": [
          {
            "group": "param",
            "type": "string",
            "allowedValues": [
              "[\"login\"",
              "\"signup\"]"
            ],
            "optional": false,
            "field": "method",
            "description": "<p>Type</p>"
          }
        ],
        "query": [
          {
            "group": "query",
            "type": "string",
            "optional": true,
            "field": "user",
            "description": "<p>query param when set to 1 returns the user object</p>"
          }
        ],
        "body": [
          {
            "group": "body",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>the user email used Registration</p>"
          },
          {
            "group": "body",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>use for vaildation</p>"
          }
        ],
        "signup": [
          {
            "group": "signup",
            "type": "string",
            "optional": false,
            "field": "fullName",
            "description": "<p>fullname firstName and Lastname</p>"
          },
          {
            "group": "signup",
            "type": "string",
            "optional": false,
            "field": "gender",
            "description": "<p>user gender</p>"
          },
          {
            "group": "signup",
            "type": "string",
            "optional": false,
            "field": "dob",
            "description": "<p>date of birth of the user</p>"
          },
          {
            "group": "signup",
            "type": "string",
            "optional": true,
            "field": "aboutMe",
            "description": "<p>briefs user info for profile</p>"
          },
          {
            "group": "signup",
            "type": "string[]",
            "optional": true,
            "field": "skills",
            "description": "<p>arrays of string of skills</p>"
          },
          {
            "group": "signup",
            "type": "string",
            "optional": true,
            "field": "title",
            "description": "<p>describing user briefly</p>"
          },
          {
            "group": "signup",
            "type": "string",
            "optional": false,
            "field": "phoneNo",
            "description": "<p>contact phoneNo for the user</p>"
          }
        ]
      }
    },
    "description": "<p>endpoint allows various get request authentication facebook and google would use oAuth for userauthentication while apikey and jwt requires their parameters to be in the headers or in the query for authentication due to the stateless implementation of resources</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "apikey",
            "description": "<p>unique id generated apikey</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>unique id random generated auth atringr</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "_id",
            "description": "<p>unique id generated as idendier</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>the user email used Registration</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "fullName",
            "description": "<p>fullname firstName and Lastname</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "fullName.first",
            "description": "<p>first Name</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "fullName.last",
            "description": "<p>last Name</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>hashed password</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "gender",
            "description": "<p>user gender</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "dob",
            "description": "<p>date of birth of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "aboutMe",
            "description": "<p>briefs user info for profile</p>"
          },
          {
            "group": "Success 200",
            "type": "string[]",
            "optional": false,
            "field": "skills",
            "description": "<p>arrays of string of skills</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>describing user briefly</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "phoneNo",
            "description": "<p>contact phoneNo for the user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\tHTTP/1.1 201 created\n\t \t{\n\t \t\t\"apikey\": \"random crypto key\",\n\t \t\t\"user\": {\n\t \t \"_id\" : ObjectId(\"58f3faedd54ab01c60ad5585\"),\n\t \t \"email\" : \"user@keystonejs.com\",\n\t \t \"title\" : \"the only paris kportk in town\",\n\t \t \"skills\" : [ ],\n\t \t \"aboutMe\" : \"a new awesome wokkaholic who enjoys good and creative work that blows mind miles away\",\n\t \t \"dob\" : \"3-12-80\",\n\t \t \"gender\" : \"male\",\n\t \t \"phoneNo\" : 81333984314\n\t \t \"fullName\" : {\n\t \t\t \t\"first\" : \"keystone\",\n\t \t\t \t \"last\" : \"Admin\"\n \t \t }\n \t },\n \t \"jwt\": \"randowm jwt token\"\n\t \t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UnAuthorized",
            "description": "<p>invalid auth credentials provided</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 UnAuthorized\n\tUnAuthorized\n\nHTTP/1.1 401 UnAuthorized\n\t{mgs: \"validation mgs\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/passport/index.js",
    "groupTitle": "AUTH"
  },
  {
    "type": "POST",
    "url": "/api/v1/account",
    "title": "create account details",
    "name": "CreateAccount",
    "group": "Account",
    "description": "<p>this endpoint is responsible for creating user accounts from their bank accounts number which is used for payments and returns the new bank details</p>",
    "version": "0.0.0",
    "filename": "routes/config/account.js",
    "groupTitle": "Account",
    "header": {
      "examples": [
        {
          "title": "header-auth-paramters",
          "content": "{\n\t\"apiKey\": \"my secure api key\"\n}\n\n\tOR\n\n{\n\t\"JWT_TOKEN\": \"my random apiker\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "bankName",
            "description": "<p>bank name that the account belongs to</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "acctNo",
            "description": "<p>private user account owned at the bank</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Account-Write-Json-Example:",
          "content": "{\n\t\"acctNo\": \"12345678901\",\n\t\"bankName\": \"Second Trust Bank\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "_id",
            "description": "<p>unique id generated as idendier</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "acctNo",
            "description": "<p>private user account owned at the bank</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "bankName",
            "description": "<p>bank name that the account belongs to</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "subAcct",
            "description": "<p>unique id to mapp payments to</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "bank",
            "description": "<p>short bank code</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "author",
            "description": "<p>my unique id | my details</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 created\n{\n\"_id\": \"57f8c68481cc811dc8c42988\",\n\t\"acctNo\": \"12345678901\",\n\t\"bankName\": \"Second Trust Bank\",\n\t\"subAcct\": \"r_teyris\",\n\t\"bank\": \"035\",\n\t\"author\": \"57f8c68481cc811dc8c42923\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "accountFail",
            "description": "<p>failure during validation</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 406 unacceptable\n\t{\n\tmgs: \"validation error message object\"\n\t}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "PATCH",
    "url": "/api/v1/account/:id",
    "title": "update account details",
    "name": "CreateAccount",
    "group": "Account",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "unique",
            "description": "<p>account identifer</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "bankName",
            "description": "<p>bank name that the account belongs to</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "acctNo",
            "description": "<p>private user account owned at the bank</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Account-Write-Json-Example:",
          "content": "{\n\t\"acctNo\": \"12345678901\",\n\t\"bankName\": \"Second Trust Bank\",\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>this endpoint is responsible for updating an exiting user accounts from their bank accounts number which is used for payments and returns the newly updated bank details</p>",
    "version": "0.0.0",
    "filename": "routes/config/account.js",
    "groupTitle": "Account",
    "header": {
      "examples": [
        {
          "title": "header-auth-paramters",
          "content": "{\n\t\"apiKey\": \"my secure api key\"\n}\n\n\tOR\n\n{\n\t\"JWT_TOKEN\": \"my random apiker\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "_id",
            "description": "<p>unique id generated as idendier</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "acctNo",
            "description": "<p>private user account owned at the bank</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "bankName",
            "description": "<p>bank name that the account belongs to</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "subAcct",
            "description": "<p>unique id to mapp payments to</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "bank",
            "description": "<p>short bank code</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "author",
            "description": "<p>my unique id | my details</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 created\n{\n\"_id\": \"57f8c68481cc811dc8c42988\",\n\t\"acctNo\": \"12345678901\",\n\t\"bankName\": \"Second Trust Bank\",\n\t\"subAcct\": \"r_teyris\",\n\t\"bank\": \"035\",\n\t\"author\": \"57f8c68481cc811dc8c42923\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "accountFail",
            "description": "<p>failure during validation</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 406 unacceptable\n\t{\n\tmgs: \"validation error message object\"\n\t}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/api/v1/account",
    "title": "get account details",
    "name": "GetAccount",
    "group": "Account",
    "description": "<p>this endpoint is responsible for retrieving an exiting user accounts used for payments</p>",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFOund",
            "description": "<p>null response from the db</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 ok\n\tnull",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/config/account.js",
    "groupTitle": "Account",
    "header": {
      "examples": [
        {
          "title": "header-auth-paramters",
          "content": "{\n\t\"apiKey\": \"my secure api key\"\n}\n\n\tOR\n\n{\n\t\"JWT_TOKEN\": \"my random apiker\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "_id",
            "description": "<p>unique id generated as idendier</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "acctNo",
            "description": "<p>private user account owned at the bank</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "bankName",
            "description": "<p>bank name that the account belongs to</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "subAcct",
            "description": "<p>unique id to mapp payments to</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "bank",
            "description": "<p>short bank code</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "author",
            "description": "<p>my unique id | my details</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 created\n{\n\"_id\": \"57f8c68481cc811dc8c42988\",\n\t\"acctNo\": \"12345678901\",\n\t\"bankName\": \"Second Trust Bank\",\n\t\"subAcct\": \"r_teyris\",\n\t\"bank\": \"035\",\n\t\"author\": \"57f8c68481cc811dc8c42923\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/api/v1/bid",
    "title": "create Bids for offers",
    "name": "CreateBid",
    "group": "Bid",
    "description": "<p>this endpoint is responsible for creating user Bids for offers placed by another user</p>",
    "version": "0.0.0",
    "filename": "routes/config/bid.js",
    "groupTitle": "Bid",
    "header": {
      "examples": [
        {
          "title": "header-auth-paramters",
          "content": "{\n\t\"apiKey\": \"my secure api key\"\n}\n\n\tOR\n\n{\n\t\"JWT_TOKEN\": \"my random apiker\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "offer",
            "description": "<p>unique id for the bid</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "price",
            "description": "<p>bid price tag for the offer</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "info",
            "description": "<p>info for the offer_athor</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Bid-Write-Json-Example:",
          "content": "{\n\"offer\": \"57f8c68481cc811dc8c429b9\",\n\"price\": 10000,\n\"info\": \"i am very good at this kind of bid\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "_id",
            "description": "<p>unique id generated as idendier</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "info",
            "description": "<p>brief info about the bid for the offer author</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "price",
            "description": "<p>price tag for the offer</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "offer",
            "description": "<p>unique id or offer object</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "author",
            "description": "<p>my unique id | my details</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 created\n{\n\"_id\": \"57f8c68481cc811dc8c42988\",\n\t\"offer\": \"57f8c68481cc811dc8c429b9\",\n\t\"price\": 10000,\n\t\"info\": \"i am very good at this kind of bid\",\n\t\"author\": \"57f8c68481cc811dc8c42923\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BidFail",
            "description": "<p>failure during validation</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 406 unacceptable\n\t{\n\tmgs: \"validation error message object\"\n\t}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/api/v1/bid/:id",
    "title": "get Bid details",
    "name": "GetBid",
    "group": "Bid",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>unique id to retrieve bid</p>"
          }
        ]
      }
    },
    "description": "<p>this endpoint is responsible for retrieving an exiting user Bids used for payments</p>",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFOund",
            "description": "<p>null response from the db</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 ok\n\tnull",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/config/bid.js",
    "groupTitle": "Bid",
    "header": {
      "examples": [
        {
          "title": "header-auth-paramters",
          "content": "{\n\t\"apiKey\": \"my secure api key\"\n}\n\n\tOR\n\n{\n\t\"JWT_TOKEN\": \"my random apiker\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "_id",
            "description": "<p>unique id generated as idendier</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "info",
            "description": "<p>brief info about the bid for the offer author</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "price",
            "description": "<p>price tag for the offer</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "offer",
            "description": "<p>unique id or offer object</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "author",
            "description": "<p>my unique id | my details</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 created\n{\n\"_id\": \"57f8c68481cc811dc8c42988\",\n\t\"offer\": \"57f8c68481cc811dc8c429b9\",\n\t\"price\": 10000,\n\t\"info\": \"i am very good at this kind of bid\",\n\t\"author\": \"57f8c68481cc811dc8c42923\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/api/v1/bid",
    "title": "get bids lists",
    "name": "ListBids",
    "group": "Bid",
    "description": "<p>this endpoint is responsible for retrieving and searching Bids dyanmically using params and _id  provided as querys returns a list filtered from the query</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "_id",
            "description": "<p>unique id for bid</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "offer",
            "description": "<p>unique id for the bid</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "price",
            "description": "<p>bid price tag for the offer</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "info",
            "description": "<p>info for the offer_athor</p>"
          }
        ],
        "query": [
          {
            "group": "query",
            "type": "number",
            "optional": true,
            "field": "skip",
            "description": "<p>amount of items to skip for the query</p>"
          },
          {
            "group": "query",
            "type": "number",
            "optional": true,
            "field": "limit",
            "description": "<p>amount of items to return</p>"
          },
          {
            "group": "query",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>to off pagination</p>"
          },
          {
            "group": "query",
            "type": "string",
            "optional": true,
            "field": "field",
            "description": "<p>fields to be return</p>"
          },
          {
            "group": "query",
            "type": "string",
            "optional": true,
            "field": "sortBy",
            "description": "<p>field used for sorting</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFOund",
            "description": "<p>null response from the db</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Empty-Response:",
          "content": "HTTP/1.1 200 ok\n\t[]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/config/bid.js",
    "groupTitle": "Bid",
    "header": {
      "examples": [
        {
          "title": "header-auth-paramters",
          "content": "{\n\t\"apiKey\": \"my secure api key\"\n}\n\n\tOR\n\n{\n\t\"JWT_TOKEN\": \"my random apiker\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "bids",
            "description": "<p>various bids tha match filter</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "bid._id",
            "description": "<p>unique id generated as idendier</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "bid.info",
            "description": "<p>brief info about the bid for the offer author</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "bid.price",
            "description": "<p>price tag for the offer</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "bid.offer",
            "description": "<p>unique id or offer object</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "bid.author",
            "description": "<p>my unique id | my details</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 created\n[\n {\n \t\"_id\": \"57f8c68481cc811dc8c42988\",\n\t\"offer\": \"57f8c68481cc811dc8c429b9\",\n\t\"price\": 10000,\n\t\"info\": \"i am very good at this kind of bid\",\n\t\"author\": \"57f8c68481cc811dc8c42923\"\n },\n {\n \t\"_id\": \"57f8c68481cc811dc8c4299b\",\n\t\"offer\": \"57f8c68481cc811dc8c429b9\",\n\t\"price\": 18000,\n\t\"info\": \"i am very good at this kind of docs\",\n\t\"author\": \"57f8c68481cc811dc8c42923\"\n }\n]",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "PATCH",
    "url": "/api/v1/bid/:id",
    "title": "update Bid details",
    "name": "UpdateBid",
    "group": "Bid",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "unique",
            "description": "<p>Bid identifer</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "offer",
            "description": "<p>unique id for the bid</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "price",
            "description": "<p>bid price tag for the offer</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "info",
            "description": "<p>info for the offer_athor</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Bid-Write-Json-Example:",
          "content": "{\n\"offer\": \"57f8c68481cc811dc8c429b9\",\n\"price\": 10000,\n\"info\": \"i am very good at this kind of bid\",\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>this endpoint is responsible for updating an exiting user Bids from a particular offer</p>",
    "version": "0.0.0",
    "filename": "routes/config/bid.js",
    "groupTitle": "Bid",
    "header": {
      "examples": [
        {
          "title": "header-auth-paramters",
          "content": "{\n\t\"apiKey\": \"my secure api key\"\n}\n\n\tOR\n\n{\n\t\"JWT_TOKEN\": \"my random apiker\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "_id",
            "description": "<p>unique id generated as idendier</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "info",
            "description": "<p>brief info about the bid for the offer author</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "price",
            "description": "<p>price tag for the offer</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "offer",
            "description": "<p>unique id or offer object</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "author",
            "description": "<p>my unique id | my details</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 created\n{\n\"_id\": \"57f8c68481cc811dc8c42988\",\n\t\"offer\": \"57f8c68481cc811dc8c429b9\",\n\t\"price\": 10000,\n\t\"info\": \"i am very good at this kind of bid\",\n\t\"author\": \"57f8c68481cc811dc8c42923\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BidFail",
            "description": "<p>failure during validation</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 406 unacceptable\n\t{\n\tmgs: \"validation error message object\"\n\t}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/api/v1/category/:id",
    "title": "get Category details",
    "name": "GetCategory",
    "group": "Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>unique id to retrieve Category</p>"
          }
        ]
      }
    },
    "description": "<p>this endpoint is responsible for retrieving an exiting Categorys</p>",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFOund",
            "description": "<p>null response from the db</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 ok\n\tnull",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/config/category.js",
    "groupTitle": "Category",
    "header": {
      "examples": [
        {
          "title": "header-auth-paramters",
          "content": "{\n\t\"apiKey\": \"my secure api key\"\n}\n\n\tOR\n\n{\n\t\"JWT_TOKEN\": \"my random apiker\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "_id",
            "description": "<p>unique id generated as idendier</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>name for the category</p>"
          },
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "children",
            "description": "<p>array of subcategory strings</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 ok\n {\n \t\"_id\" : \"58f41bbe5e35cb17c0f688c2\",\n \t\"name\" : \"Web Design\",\n \t\"children\" : [\n \t \"node js\",\n \t \"wordPress designer\",\n \t \"Laravel programmer\",\n \t \"Web Designer\"]\n }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/api/v1/category",
    "title": "get Categorys lists",
    "name": "ListCategorys",
    "group": "Category",
    "description": "<p>this endpoint is responsible for retrieving and searching all Categorys dyanmically using params and _id  provided as querys returns a list filtered from the query</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "_id",
            "description": "<p>unique id for Category</p>"
          }
        ],
        "query": [
          {
            "group": "query",
            "type": "number",
            "optional": true,
            "field": "skip",
            "description": "<p>amount of items to skip for the query</p>"
          },
          {
            "group": "query",
            "type": "number",
            "optional": true,
            "field": "limit",
            "description": "<p>amount of items to return</p>"
          },
          {
            "group": "query",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>to off pagination</p>"
          },
          {
            "group": "query",
            "type": "string",
            "optional": true,
            "field": "field",
            "description": "<p>fields to be return</p>"
          },
          {
            "group": "query",
            "type": "string",
            "optional": true,
            "field": "sortBy",
            "description": "<p>field used for sorting</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFOund",
            "description": "<p>null response from the db</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Empty-Response:",
          "content": "HTTP/1.1 200 ok\n\t[]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/config/category.js",
    "groupTitle": "Category",
    "header": {
      "examples": [
        {
          "title": "header-auth-paramters",
          "content": "{\n\t\"apiKey\": \"my secure api key\"\n}\n\n\tOR\n\n{\n\t\"JWT_TOKEN\": \"my random apiker\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "categories",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "categories._id",
            "description": "<p>unique id generated as idendier</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "categories.name",
            "description": "<p>name for the category</p>"
          },
          {
            "group": "Success 200",
            "type": "string[]",
            "optional": false,
            "field": "categories.children",
            "description": "<p>array of subcategory strings</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 ok\n[\n {\n \t\"_id\" : \"58f41bbe5e35cb17c0f688c2\",\n \t\"name\" : \"Web Design\",\n \t\"children\" : [\n \t \"node js\",\n \t \"wordPress designer\",\n \t \"Laravel programmer\",\n \t \"Web Designer\"]\n }\n]",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/api/v1/Gig",
    "title": "create Gigs for offers",
    "name": "CreateGig",
    "group": "Gig",
    "description": "<p>this endpoint is responsible for creating user Gigs for offers placed by another user</p>",
    "version": "0.0.0",
    "filename": "routes/config/gig.js",
    "groupTitle": "Gig",
    "header": {
      "examples": [
        {
          "title": "header-auth-paramters",
          "content": "{\n\t\"apiKey\": \"my secure api key\"\n}\n\n\tOR\n\n{\n\t\"JWT_TOKEN\": \"my random apiker\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>brief info about the gig</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "category",
            "description": "<p>category the gig belongs to</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "subcategory",
            "description": "<p>subcategory gig belongs to</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "detail",
            "description": "<p>full description of the gig</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "price",
            "description": "<p>tag for the gig</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "deliveryDate",
            "description": "<p>gig delivery dater</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "requirement",
            "description": "<p>any requirement for the gig</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "faq",
            "description": "<p>any faq people might ask about Gig</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "GigWriteJsonExample:",
          "content": "{\n \"category\" : \"Web Design\",\n \"faq\" : \"qweretwui\",\n \"price\" : 800,\n \"title\" : \"ytyuuiuoipopoer\",\n \"detail\" : \"werwerrttyghjil\",\n \"requirement\" : \"sdgfhklooly\",\n \"author\" : \"58f3faedd54ab01c60ad5585\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "_id",
            "description": "<p>unique id generated as idendier</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "detail",
            "description": "<p>full description of the gig</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "faq",
            "description": "<p>any faq people might ask about Gig</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "requirement",
            "description": "<p>any requirement for the gig</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "price",
            "description": "<p>tag for the gig</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "deliveryDate",
            "description": "<p>gig delivery date</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>brief info about the gig</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "category",
            "description": "<p>category the gig belongs to</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "subcategory",
            "description": "<p>subcategory gig belongs to</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "author",
            "description": "<p>my unique id | my details</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 created\n{\n \"_id\": \"57f8c68481cc811dc8c42988\",\n \"category\" : \"Web Design\",\n \"faq\" : \"how busy is the traffic? : very busy trafic\",\n \"price\" : 800,\n \"title\" : \"build car software\",\n \"detail\" : \"i want to build an traffic software\",\n \"requirement\" : \"sdgfhklooly\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "GigFail",
            "description": "<p>failure during validation</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 406 unacceptable\n\t{\n\tmgs: \"validation error message object\"\n\t}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/api/v1/gig/:id",
    "title": "get Gig details",
    "name": "GetGig",
    "group": "Gig",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>unique id to retrieve Gig</p>"
          }
        ]
      }
    },
    "description": "<p>this endpoint is responsible for retrieving an exiting user Gig.</p>",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFOund",
            "description": "<p>null response from the db</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 ok\n\tnull",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/config/gig.js",
    "groupTitle": "Gig",
    "header": {
      "examples": [
        {
          "title": "header-auth-paramters",
          "content": "{\n\t\"apiKey\": \"my secure api key\"\n}\n\n\tOR\n\n{\n\t\"JWT_TOKEN\": \"my random apiker\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "_id",
            "description": "<p>unique id generated as idendier</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "detail",
            "description": "<p>full description of the gig</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "faq",
            "description": "<p>any faq people might ask about Gig</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "requirement",
            "description": "<p>any requirement for the gig</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "price",
            "description": "<p>tag for the gig</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "deliveryDate",
            "description": "<p>gig delivery date</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>brief info about the gig</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "category",
            "description": "<p>category the gig belongs to</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "subcategory",
            "description": "<p>subcategory gig belongs to</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "author",
            "description": "<p>my unique id | my details</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 created\n{\n \"_id\": \"57f8c68481cc811dc8c42988\",\n \"category\" : \"Web Design\",\n \"faq\" : \"how busy is the traffic? : very busy trafic\",\n \"price\" : 800,\n \"title\" : \"build car software\",\n \"detail\" : \"i want to build an traffic software\",\n \"requirement\" : \"sdgfhklooly\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/api/v1/gig",
    "title": "get Gigs lists",
    "name": "ListGigs",
    "group": "Gig",
    "description": "<p>this endpoint is responsible for retrieving and searching Gigs dyanmically using params and _id  provided as querys returns a list filtered from the query</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "_id",
            "description": "<p>unique id for Gig</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>brief info about the gig</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "category",
            "description": "<p>category the gig belongs to</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "subcategory",
            "description": "<p>subcategory gig belongs to</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "detail",
            "description": "<p>full description of the gig</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "price",
            "description": "<p>tag for the gig</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "deliveryDate",
            "description": "<p>gig delivery dater</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "requirement",
            "description": "<p>any requirement for the gig</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "faq",
            "description": "<p>any faq people might ask about Gig</p>"
          }
        ],
        "query": [
          {
            "group": "query",
            "type": "number",
            "optional": true,
            "field": "skip",
            "description": "<p>amount of items to skip for the query</p>"
          },
          {
            "group": "query",
            "type": "number",
            "optional": true,
            "field": "limit",
            "description": "<p>amount of items to return</p>"
          },
          {
            "group": "query",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>to off pagination</p>"
          },
          {
            "group": "query",
            "type": "string",
            "optional": true,
            "field": "field",
            "description": "<p>fields to be return</p>"
          },
          {
            "group": "query",
            "type": "string",
            "optional": true,
            "field": "sortBy",
            "description": "<p>field used for sorting</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFOund",
            "description": "<p>null response from the db</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Empty-Response:",
          "content": "HTTP/1.1 200 ok\n\t[]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/config/gig.js",
    "groupTitle": "Gig",
    "header": {
      "examples": [
        {
          "title": "header-auth-paramters",
          "content": "{\n\t\"apiKey\": \"my secure api key\"\n}\n\n\tOR\n\n{\n\t\"JWT_TOKEN\": \"my random apiker\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Gigs",
            "description": "<p>various Gigs tha match filter</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "gig._id",
            "description": "<p>unique id generated as idendier</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "gig.detail",
            "description": "<p>full description of the gig</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "gig.faq",
            "description": "<p>any faq people might ask about Gig</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "gig.requirement",
            "description": "<p>any requirement for the gig</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "gig.price",
            "description": "<p>tag for the gig</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "gig.deliveryDate",
            "description": "<p>gig delivery date</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "gig.title",
            "description": "<p>brief info about the gig</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "gig.category",
            "description": "<p>category the gig belongs to</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "gig.subcategory",
            "description": "<p>subcategory gig belongs to</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "gig.author",
            "description": "<p>my unique id | my details</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 created\n[\n\t\t{\n\t\t \"_id\" : ObjectId(\"592571c56c8f761aa4f77934\"),\n\t\t \"category\" : \"Web Design\",\n\t\t \"faq\" : \"qweretwui\",\n\t\t \"price\" : 800,\n\t\t \"title\" : \"ytyuuiuoipopoer\",\n\t\t \"detail\" : \"werwerrttyghjil\",\n\t\t \"requirement\" : \"sdgfhklooly\",\n\t\t \"author\" : \"58f3faedd54ab01c60ad5585\"\n\t\t},\n\t\t{\n\t\t \"_id\" : ObjectId(\"59257f3f6c8f761aa4f77936\"),\n\t\t \"category\" : \"Web Design\",\n\t\t \"faq\" : \"ghghgyuguihhijo\",\n\t\t \"price\" : 7500,\n\t\t \"title\" : \"ihpiuhiijio\",\n\t\t \"detail\" : \"iguyglhjklnj\",\n\t\t \"requirement\" : \"ih;iuhuihuyhj\",\n\t\t \"author\" : \"58f3faedd54ab01c60ad5585\"\n\t\t}\n]",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "PATCH",
    "url": "/api/v1/Gig/:id",
    "title": "update Gig details",
    "name": "UpdateGig",
    "group": "Gig",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "unique",
            "description": "<p>Gig identifer</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>brief info about the gig</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "category",
            "description": "<p>category the gig belongs to</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "subcategory",
            "description": "<p>subcategory gig belongs to</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "detail",
            "description": "<p>full description of the gig</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "price",
            "description": "<p>tag for the gig</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "deliveryDate",
            "description": "<p>gig delivery dater</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "requirement",
            "description": "<p>any requirement for the gig</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "faq",
            "description": "<p>any faq people might ask about Gig</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "GigWriteJsonExample:",
          "content": "{\n \"category\" : \"Web Design\",\n \"faq\" : \"qweretwui\",\n \"price\" : 800,\n \"title\" : \"ytyuuiuoipopoer\",\n \"detail\" : \"werwerrttyghjil\",\n \"requirement\" : \"sdgfhklooly\",\n \"author\" : \"58f3faedd54ab01c60ad5585\",\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>this endpoint is responsible for updating an exiting user Gigs from a particular offer</p>",
    "version": "0.0.0",
    "filename": "routes/config/gig.js",
    "groupTitle": "Gig",
    "header": {
      "examples": [
        {
          "title": "header-auth-paramters",
          "content": "{\n\t\"apiKey\": \"my secure api key\"\n}\n\n\tOR\n\n{\n\t\"JWT_TOKEN\": \"my random apiker\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "_id",
            "description": "<p>unique id generated as idendier</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "detail",
            "description": "<p>full description of the gig</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "faq",
            "description": "<p>any faq people might ask about Gig</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "requirement",
            "description": "<p>any requirement for the gig</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "price",
            "description": "<p>tag for the gig</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "deliveryDate",
            "description": "<p>gig delivery date</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>brief info about the gig</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "category",
            "description": "<p>category the gig belongs to</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "subcategory",
            "description": "<p>subcategory gig belongs to</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "author",
            "description": "<p>my unique id | my details</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 created\n{\n \"_id\": \"57f8c68481cc811dc8c42988\",\n \"category\" : \"Web Design\",\n \"faq\" : \"how busy is the traffic? : very busy trafic\",\n \"price\" : 800,\n \"title\" : \"build car software\",\n \"detail\" : \"i want to build an traffic software\",\n \"requirement\" : \"sdgfhklooly\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "GigFail",
            "description": "<p>failure during validation</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 406 unacceptable\n\t{\n\tmgs: \"validation error message object\"\n\t}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/api/v1/giger",
    "title": "create Bids for Gigs",
    "name": "CreateGigger",
    "group": "Giger",
    "description": "<p>this endpoint is responsible for creating user Bids for Gigs placed by another user</p>",
    "version": "0.0.0",
    "filename": "routes/config/giger.js",
    "groupTitle": "Giger",
    "header": {
      "examples": [
        {
          "title": "header-auth-paramters",
          "content": "{\n\t\"apiKey\": \"my secure api key\"\n}\n\n\tOR\n\n{\n\t\"JWT_TOKEN\": \"my random apiker\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "price",
            "description": "<p>tag for the gig</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "info",
            "description": "<p>any information for the gig</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "expDate",
            "description": "<p>expiring date for the bid gig</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "gig",
            "description": "<p>the unique id for the gig for the bid</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "GiggerWriteJsonExample:",
          "content": "{\n \"category\" : \"Web Design\",\n \"faq\" : \"qweretwui\",\n \"price\" : 800,\n \"title\" : \"ytyuuiuoipopoer\",\n \"detail\" : \"werwerrttyghjil\",\n \"requirement\" : \"sdgfhklooly\",\n \"author\" : \"58f3faedd54ab01c60ad5585\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "_id",
            "description": "<p>unique id generated as idendier</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "accepted",
            "description": "<p>whether the gig is accepted</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "price",
            "description": "<p>tag for the gig</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "info",
            "description": "<p>any information for the gig</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "expDate",
            "description": "<p>expiring date for the bid gig</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "gig",
            "description": "<p>the unique id for the gig for the bid</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "author",
            "description": "<p>my unique id | my details</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 created\n\t {\n\t \t \"_id\" : \"592c9fe59a38332008788c8c\",\n\t \t \"expDate\" : \"2017-01-01\",\n\t \t \"gig\" : \"592c9fbe9a38332008788c8b\",\n\t \t \"gigAuthor\" : \"58f3faedd54ab01c60ad5585\",\n\t \t \"info\" : \"am interested in your offwr\",\n\t \t \"price\" : 5000,\n\t \t \"author\" : \"58f3faedd54ab01c60ad5585\",\n\t \t \"accepted\" : false\n\t }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "GigFail",
            "description": "<p>failure during validation</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 406 unacceptable\n\t{\n\tmgs: \"validation error message object\"\n\t}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/api/v1/giger/:id",
    "title": "get bid for Gig details",
    "name": "GetGiger",
    "group": "Giger",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>unique id to retrieve a Bid meant for a bid</p>"
          }
        ]
      }
    },
    "description": "<p>this endpoint is responsible for retrieving an exiting user Gig.</p>",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFOund",
            "description": "<p>null response from the db</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 ok\n\tnull",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/config/giger.js",
    "groupTitle": "Giger",
    "header": {
      "examples": [
        {
          "title": "header-auth-paramters",
          "content": "{\n\t\"apiKey\": \"my secure api key\"\n}\n\n\tOR\n\n{\n\t\"JWT_TOKEN\": \"my random apiker\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "_id",
            "description": "<p>unique id generated as idendier</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "accepted",
            "description": "<p>whether the gig is accepted</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "price",
            "description": "<p>tag for the gig</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "info",
            "description": "<p>any information for the gig</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "expDate",
            "description": "<p>expiring date for the bid gig</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "gig",
            "description": "<p>the unique id for the gig for the bid</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "author",
            "description": "<p>my unique id | my details</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 created\n\t {\n\t \t \"_id\" : \"592c9fe59a38332008788c8c\",\n\t \t \"expDate\" : \"2017-01-01\",\n\t \t \"gig\" : \"592c9fbe9a38332008788c8b\",\n\t \t \"gigAuthor\" : \"58f3faedd54ab01c60ad5585\",\n\t \t \"info\" : \"am interested in your offwr\",\n\t \t \"price\" : 5000,\n\t \t \"author\" : \"58f3faedd54ab01c60ad5585\",\n\t \t \"accepted\" : false\n\t }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/api/v1/giger",
    "title": "get Bids lists for Gigs",
    "name": "ListGigers",
    "group": "Giger",
    "description": "<p>this endpoint is responsible for retrieving and searching Bids for Gigs dyanmically using params and _id  provided as querys returns a list filtered from the query</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "_id",
            "description": "<p>unique id for Gig</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "price",
            "description": "<p>tag for the gig</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "info",
            "description": "<p>any information for the gig</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "expDate",
            "description": "<p>expiring date for the bid gig</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "gig",
            "description": "<p>the unique id for the gig for the bid</p>"
          }
        ],
        "query": [
          {
            "group": "query",
            "type": "number",
            "optional": true,
            "field": "skip",
            "description": "<p>amount of items to skip for the query</p>"
          },
          {
            "group": "query",
            "type": "number",
            "optional": true,
            "field": "limit",
            "description": "<p>amount of items to return</p>"
          },
          {
            "group": "query",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>to off pagination</p>"
          },
          {
            "group": "query",
            "type": "string",
            "optional": true,
            "field": "field",
            "description": "<p>fields to be return</p>"
          },
          {
            "group": "query",
            "type": "string",
            "optional": true,
            "field": "sortBy",
            "description": "<p>field used for sorting</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFOund",
            "description": "<p>null response from the db</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Empty-Response:",
          "content": "HTTP/1.1 200 ok\n\t[]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/config/giger.js",
    "groupTitle": "Giger",
    "header": {
      "examples": [
        {
          "title": "header-auth-paramters",
          "content": "{\n\t\"apiKey\": \"my secure api key\"\n}\n\n\tOR\n\n{\n\t\"JWT_TOKEN\": \"my random apiker\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "giggers",
            "description": "<p>bids  for the Gig alias gigger</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "gigger._id",
            "description": "<p>unique id generated as idendier</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "gigger.accepted",
            "description": "<p>whether the gig is accepted</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "gigger.price",
            "description": "<p>tag for the gig</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "gigger.info",
            "description": "<p>any information for the gig</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "gigger.expDate",
            "description": "<p>expiring date for the bid gig</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "gigger.gig",
            "description": "<p>the unique id for the gig for the bid</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "gigger.author",
            "description": "<p>my unique id | my details</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 created\n[\n \t{\n \t \t\"_id\" : \"5925cbe5458b2819e04effe3\",\n \t \t\"expDate\" : \"2017-01-01\",\n \t \t\"gig\" : \"592571c56c8f761aa4f77934\",\n \t \t\"gigAuthor\" : \"58f3faedd54ab01c60ad5585\",\n \t \t\"info\" : \"eiwrwhrw\",\n \t \t\"price\" : 8221,\n \t \t\"author\" : \"58f3faedd54ab01c60ad5585\",\n \t \t\"accepted\" : true\n \t },\n \t {\n \t \t\"_id\" : \"59263d896c09c10a8422ac40\",\n \t \t\"expDate\" : \"2017-01-01\",\n \t \t\"gig\" : \"592585bc6c8f761aa4f7793a\",\n \t \t\"gigAuthor\" : \"58f3faedd54ab01c60ad5585\",\n \t \t\"info\" : \"yruieorr\",\n \t \t\"price\" : 129292,\n \t \t\"author\" : \"58f3faedd54ab01c60ad5585\",\n \t \t\"accepted\" : true\n \t },\n \t {\n \t \t\"_id\" : \"592c9fe59a38332008788c8c\",\n \t \t\"expDate\" : \"2017-01-01\",\n \t \t\"gig\" : \"592c9fbe9a38332008788c8b\",\n \t \t\"gigAuthor\" : \"58f3faedd54ab01c60ad5585\",\n \t \t\"info\" : \"am interested in your offwr\",\n \t \t\"price\" : 5000,\n \t \t\"author\" : \"58f3faedd54ab01c60ad5585\",\n \t \t\"accepted\" : false\n \t }\n]",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "PATCH",
    "url": "/api/v1/giger/:id",
    "title": "update Bids for Gigs",
    "name": "UpdateGiger",
    "group": "Giger",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "unique",
            "description": "<p>Gig identifer</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "price",
            "description": "<p>tag for the gig</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "info",
            "description": "<p>any information for the gig</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "expDate",
            "description": "<p>expiring date for the bid gig</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "gig",
            "description": "<p>the unique id for the gig for the bid</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "GiggerWriteJsonExample:",
          "content": "{\n \"category\" : \"Web Design\",\n \"faq\" : \"qweretwui\",\n \"price\" : 800,\n \"title\" : \"ytyuuiuoipopoer\",\n \"detail\" : \"werwerrttyghjil\",\n \"requirement\" : \"sdgfhklooly\",\n \"author\" : \"58f3faedd54ab01c60ad5585\",\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>this endpoint is responsible for updating an existing user Bids for Gigs</p>",
    "version": "0.0.0",
    "filename": "routes/config/giger.js",
    "groupTitle": "Giger",
    "header": {
      "examples": [
        {
          "title": "header-auth-paramters",
          "content": "{\n\t\"apiKey\": \"my secure api key\"\n}\n\n\tOR\n\n{\n\t\"JWT_TOKEN\": \"my random apiker\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "_id",
            "description": "<p>unique id generated as idendier</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "accepted",
            "description": "<p>whether the gig is accepted</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "price",
            "description": "<p>tag for the gig</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "info",
            "description": "<p>any information for the gig</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "expDate",
            "description": "<p>expiring date for the bid gig</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "gig",
            "description": "<p>the unique id for the gig for the bid</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "author",
            "description": "<p>my unique id | my details</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 created\n\t {\n\t \t \"_id\" : \"592c9fe59a38332008788c8c\",\n\t \t \"expDate\" : \"2017-01-01\",\n\t \t \"gig\" : \"592c9fbe9a38332008788c8b\",\n\t \t \"gigAuthor\" : \"58f3faedd54ab01c60ad5585\",\n\t \t \"info\" : \"am interested in your offwr\",\n\t \t \"price\" : 5000,\n\t \t \"author\" : \"58f3faedd54ab01c60ad5585\",\n\t \t \"accepted\" : false\n\t }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "GigFail",
            "description": "<p>failure during validation</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 406 unacceptable\n\t{\n\tmgs: \"validation error message object\"\n\t}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/api/v1/offer",
    "title": "create offers",
    "name": "CreateOffer",
    "group": "Offer",
    "description": "<p>this endpoint is responsible for creating offers for audience to apply and bid for</p>",
    "version": "0.0.0",
    "filename": "routes/config/offer.js",
    "groupTitle": "Offer",
    "header": {
      "examples": [
        {
          "title": "header-auth-paramters",
          "content": "{\n\t\"apiKey\": \"my secure api key\"\n}\n\n\tOR\n\n{\n\t\"JWT_TOKEN\": \"my random apiker\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "budget",
            "description": "<p>tag for the offer</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "detail",
            "description": "<p>full description of the offer</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "category",
            "description": "<p>category the offer</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "subcategory",
            "description": "<p>the subcategory the offer belongs to</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "expDate",
            "description": "<p>when the offer will expire</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "acceptedBy",
            "description": "<p>uniqueId for the user who accepted It</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Offer-Write-Json-Example:",
          "content": "{\n\t \"budget\" : 0,\n\t \"expDate\" : ISODate(\"2017-06-27T23:00:00Z\",\n\t \"detail\" : \"testing things being built by me\",\n\t \"category\" : \"Web Design\",\n\t \"acceptedBy\" : \"591afbb24938021bc8bd90c9  when accepting\",\n\t \"subcategory\" : \"\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 created\n {\n \t \"_id\" : \"5902b1ad83ba31206800da35\",\n \t \"budget\" : 0,\n \t \"expDate\" : ISODate(\"2017-06-27T23:00:00Z\",\n \t \"detail\" : \"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\\r\\ntempor\",\n \t \"category\" : \"Web Design\",\n \t \"author\" : \"58f3faedd54ab01c60ad5585\",\n \t \"acceptedBy\" : \"591afbb24938021bc8bd90c9\",\n \t \"subcategory\" : \"\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "GigFail",
            "description": "<p>failure during validation</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 406 unacceptable\n\t{\n\tmgs: \"validation error message object\"\n\t}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/api/v1/offer/:id",
    "title": "get Offer details",
    "name": "Getoffer",
    "group": "Offer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>unique id to retrieve a Bid meant for a bid</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "budget",
            "description": "<p>tag for the offer</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "detail",
            "description": "<p>full description of the offer</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "category",
            "description": "<p>category the offer</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "subcategory",
            "description": "<p>the subcategory the offer belongs to</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "expDate",
            "description": "<p>when the offer will expire</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "acceptedBy",
            "description": "<p>uniqueId for the user who accepted It</p>"
          }
        ]
      }
    },
    "description": "<p>this endpoint is responsible for retrieving an exiting user Gig.</p>",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFOund",
            "description": "<p>null response from the db</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 ok\n\tnull",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/config/offer.js",
    "groupTitle": "Offer",
    "header": {
      "examples": [
        {
          "title": "header-auth-paramters",
          "content": "{\n\t\"apiKey\": \"my secure api key\"\n}\n\n\tOR\n\n{\n\t\"JWT_TOKEN\": \"my random apiker\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 created\n {\n \t \"_id\" : \"5902b1ad83ba31206800da35\",\n \t \"budget\" : 0,\n \t \"expDate\" : ISODate(\"2017-06-27T23:00:00Z\",\n \t \"detail\" : \"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\\r\\ntempor\",\n \t \"category\" : \"Web Design\",\n \t \"author\" : \"58f3faedd54ab01c60ad5585\",\n \t \"acceptedBy\" : \"591afbb24938021bc8bd90c9\",\n \t \"subcategory\" : \"\"\n }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/api/v1/offer",
    "title": "get Offer lists",
    "name": "Listoffers",
    "group": "Offer",
    "description": "<p>this endpoint is responsible for retrieving and searching Offers dyanmically using params and _id  provided as querys returns a list filtered from the query</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "_id",
            "description": "<p>unique id for Gig</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "budget",
            "description": "<p>tag for the offer</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "detail",
            "description": "<p>full description of the offer</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "category",
            "description": "<p>category the offer</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "subcategory",
            "description": "<p>the subcategory the offer belongs to</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "expDate",
            "description": "<p>when the offer will expire</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "acceptedBy",
            "description": "<p>uniqueId for the user who accepted It</p>"
          }
        ],
        "query": [
          {
            "group": "query",
            "type": "number",
            "optional": true,
            "field": "skip",
            "description": "<p>amount of items to skip for the query</p>"
          },
          {
            "group": "query",
            "type": "number",
            "optional": true,
            "field": "limit",
            "description": "<p>amount of items to return</p>"
          },
          {
            "group": "query",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>to off pagination</p>"
          },
          {
            "group": "query",
            "type": "string",
            "optional": true,
            "field": "field",
            "description": "<p>fields to be return</p>"
          },
          {
            "group": "query",
            "type": "string",
            "optional": true,
            "field": "sortBy",
            "description": "<p>field used for sorting</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFOund",
            "description": "<p>null response from the db</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Empty-Response:",
          "content": "HTTP/1.1 200 ok\n\t[]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/config/offer.js",
    "groupTitle": "Offer",
    "header": {
      "examples": [
        {
          "title": "header-auth-paramters",
          "content": "{\n\t\"apiKey\": \"my secure api key\"\n}\n\n\tOR\n\n{\n\t\"JWT_TOKEN\": \"my random apiker\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "offers",
            "description": "<p>objects of offers created</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "offers._id",
            "description": "<p>unique id generated as idendier</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "offers.budget",
            "description": "<p>tag for the offer</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "offers.detail",
            "description": "<p>full description of the offer</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "offers.category",
            "description": "<p>category the offer</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "offers.subcategory",
            "description": "<p>the subcategory the offer belongs to</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "offers.expDate",
            "description": "<p>when the offer will expire</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "offers.acceptedBy",
            "description": "<p>uniqueId for the user who accepted It</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "offers.author",
            "description": "<p>my unique id | my details</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 created\n[\n {\n \t \"_id\" : \"58f7ee5bdb33611ce4ae3336\",\n \t \"expDate\" : ISODate(\"2017-05-03T23:00:00Z\",\n \t \"budget\" : 7500,\n \t \"author\" : \"58f401232d435c23047069b4\",\n \t \"detail\" : \"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\\r\\ntempor\",\n \t \"category\" : \"Web Design\",\n \t \"subcategory\" : \"\"\n },\n {\n \t \"_id\" : \"5902b1ad83ba31206800da35\",\n \t \"budget\" : 0,\n \t \"expDate\" : ISODate(\"2017-06-27T23:00:00Z\",\n \t \"detail\" : \"testing things being built by me\",\n \t \"category\" : \"Web Design\",\n \t \"author\" : \"58f3faedd54ab01c60ad5585\",\n \t \"acceptedBy\" : \"591afbb24938021bc8bd90c9\",\n \t \"subcategory\" : \"\"\n }\n]",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "PATCH",
    "url": "/api/v1/offer/:id",
    "title": "update Offer",
    "name": "Updateoffer",
    "group": "Offer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "unique",
            "description": "<p>Gig identifer</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "budget",
            "description": "<p>tag for the offer</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "detail",
            "description": "<p>full description of the offer</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "category",
            "description": "<p>category the offer</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "subcategory",
            "description": "<p>the subcategory the offer belongs to</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "expDate",
            "description": "<p>when the offer will expire</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "acceptedBy",
            "description": "<p>uniqueId for the user who accepted It</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Offer-Write-Json-Example:",
          "content": "{\n\t \"budget\" : 0,\n\t \"expDate\" : ISODate(\"2017-06-27T23:00:00Z\",\n\t \"detail\" : \"testing things being built by me\",\n\t \"category\" : \"Web Design\",\n\t \"acceptedBy\" : \"591afbb24938021bc8bd90c9  when accepting\",\n\t \"subcategory\" : \"\"\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>this endpoint is responsible for updating an existing offer created by a user</p>",
    "version": "0.0.0",
    "filename": "routes/config/offer.js",
    "groupTitle": "Offer",
    "header": {
      "examples": [
        {
          "title": "header-auth-paramters",
          "content": "{\n\t\"apiKey\": \"my secure api key\"\n}\n\n\tOR\n\n{\n\t\"JWT_TOKEN\": \"my random apiker\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 created\n {\n \t \"_id\" : \"5902b1ad83ba31206800da35\",\n \t \"budget\" : 0,\n \t \"expDate\" : ISODate(\"2017-06-27T23:00:00Z\",\n \t \"detail\" : \"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\\r\\ntempor\",\n \t \"category\" : \"Web Design\",\n \t \"author\" : \"58f3faedd54ab01c60ad5585\",\n \t \"acceptedBy\" : \"591afbb24938021bc8bd90c9\",\n \t \"subcategory\" : \"\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "GigFail",
            "description": "<p>failure during validation</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 406 unacceptable\n\t{\n\tmgs: \"validation error message object\"\n\t}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/api/v1/user/:id",
    "title": "retrieve user with that id",
    "name": "GetUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>unique id to retrieve a User</p>"
          }
        ]
      }
    },
    "description": "<p>this endpoint is responsible for retrieving an exiting user details.</p>",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFOund",
            "description": "<p>null response from the db</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 ok\n\tnull",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/config/user.js",
    "groupTitle": "User",
    "header": {
      "examples": [
        {
          "title": "header-auth-paramters",
          "content": "{\n\t\"apiKey\": \"my secure api key\"\n}\n\n\tOR\n\n{\n\t\"JWT_TOKEN\": \"my random apiker\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "_id",
            "description": "<p>unique id generated as idendier</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>the user email used Registration</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "fullName",
            "description": "<p>fullname firstName and Lastname</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "fullName.first",
            "description": "<p>first Name</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "fullName.last",
            "description": "<p>last Name</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>hashed password</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "gender",
            "description": "<p>user gender</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "dob",
            "description": "<p>date of birth of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "aboutMe",
            "description": "<p>briefs user info for profile</p>"
          },
          {
            "group": "Success 200",
            "type": "string[]",
            "optional": false,
            "field": "skills",
            "description": "<p>arrays of string of skills</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>describing user briefly</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "phoneNo",
            "description": "<p>contact phoneNo for the user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\tHTTP/1.1 201 created\n\t \t{\n\t \t \"_id\" : ObjectId(\"58f3faedd54ab01c60ad5585\"),\n\t \t \"email\" : \"user@keystonejs.com\",\n\t \t \"title\" : \"the only paris kportk in town\",\n\t \t \"skills\" : [ ],\n\t \t \"aboutMe\" : \"a new awesome wokkaholic who enjoys good and creative work that blows mind miles away\",\n\t \t \"dob\" : \"3-12-80\",\n\t \t \"gender\" : \"male\",\n\t \t \"phoneNo\" : 81333984314\n\t \t \"fullName\" : {\n\t \t\t \t\"first\" : \"keystone\",\n\t \t\t \t \"last\" : \"Admin\"\n \t \t}\n \t}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/api/v1/user",
    "title": "get user lists",
    "name": "ListUser",
    "group": "User",
    "description": "<p>this endpoint is responsible for retrieving and searching Users  dyanmically using params and _id  provided as querys returns a list filtered from the query</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "_id",
            "description": "<p>unique id for Gig</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>the user email used Registration</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "fullName",
            "description": "<p>fullname firstName and Lastname</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password used for Registration</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "\"male\"",
              "\"female\""
            ],
            "optional": false,
            "field": "gender",
            "description": "<p>user gender</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "dob",
            "description": "<p>date of birth of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "aboutMe",
            "description": "<p>briefs user info for profile</p>"
          },
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": true,
            "field": "skills",
            "description": "<p>arrays of string of skills</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "title",
            "description": "<p>describing user briefly</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "phoneNo",
            "description": "<p>contact phoneNo for the user</p>"
          }
        ],
        "query": [
          {
            "group": "query",
            "type": "number",
            "optional": true,
            "field": "skip",
            "description": "<p>amount of items to skip for the query</p>"
          },
          {
            "group": "query",
            "type": "number",
            "optional": true,
            "field": "limit",
            "description": "<p>amount of items to return</p>"
          },
          {
            "group": "query",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>to off pagination</p>"
          },
          {
            "group": "query",
            "type": "string",
            "optional": true,
            "field": "field",
            "description": "<p>fields to be return</p>"
          },
          {
            "group": "query",
            "type": "string",
            "optional": true,
            "field": "sortBy",
            "description": "<p>field used for sorting</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFOund",
            "description": "<p>null response from the db</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Empty-Response:",
          "content": "HTTP/1.1 200 ok\n\t[]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/config/user.js",
    "groupTitle": "User",
    "header": {
      "examples": [
        {
          "title": "header-auth-paramters",
          "content": "{\n\t\"apiKey\": \"my secure api key\"\n}\n\n\tOR\n\n{\n\t\"JWT_TOKEN\": \"my random apiker\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Users",
            "description": "<p>List that match the query</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "_id",
            "description": "<p>unique id generated as idendier</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>the user email used Registration</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "fullName",
            "description": "<p>fullname firstName and Lastname</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "fullName.first",
            "description": "<p>first Name</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "fullName.last",
            "description": "<p>last Name</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>hashed password</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "gender",
            "description": "<p>user gender</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "dob",
            "description": "<p>date of birth of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "aboutMe",
            "description": "<p>briefs user info for profile</p>"
          },
          {
            "group": "Success 200",
            "type": "string[]",
            "optional": false,
            "field": "skills",
            "description": "<p>arrays of string of skills</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>describing user briefly</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "phoneNo",
            "description": "<p>contact phoneNo for the user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\tHTTP/1.1 200 created\n\t[\n\t \t{\n\t \t \"_id\" : ObjectId(\"58f3faedd54ab01c60ad5585\"),\n\t \t \"email\" : \"user@keystonejs.com\",\n\t \t title\" : \"the only paris kportk in town\",\n\t \t \"skills\" : [ ],\n\t \t \"aboutMe\" : \"a new awesome wokkaholic who enjoys good and creative work that blows mind miles away\",\n\t \t \"dob\" : \"3-12-80\",\n\t \t \"gender\" : \"male\",\n\t \t \"phoneNo\" : 81333984314\n\t \t \"fullName\" : {\n\t \t\t \t\"first\" : \"keystone\",\n\t \t\t \t \"last\" : \"Admin\"\n \t \t},\n\t },\n\t {\n\t \t \"_id\" : ObjectId(\"58f3fcc02d435c23047069b2\"),\n\t \t \"email\" : \"abey@mail.com\",\n\t \t \"dob\" : ISODate(\"1994-01-01T00:00:00Z\"),\n\t \t \"phoneNo\" : 8133398431,\n\t \t \"gender\" : \"male\",\n\t \t \"title\" : \"a great wokkaholic\",\n\t \t \"skills\" : [ ],\n\t \t \"aboutMe\" : \"a new awesome wokkaholic who enjoys good and creative work\"\n }\n\t]",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "PATCH",
    "url": "/api/v1/user/:id",
    "title": "update user with new details",
    "name": "UpdateUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "unique",
            "description": "<p>user identifer</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>the user email used Registration</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "fullName",
            "description": "<p>fullname firstName and Lastname</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password used for Registration</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "\"male\"",
              "\"female\""
            ],
            "optional": false,
            "field": "gender",
            "description": "<p>user gender</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "dob",
            "description": "<p>date of birth of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "aboutMe",
            "description": "<p>briefs user info for profile</p>"
          },
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": true,
            "field": "skills",
            "description": "<p>arrays of string of skills</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "title",
            "description": "<p>describing user briefly</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "phoneNo",
            "description": "<p>contact phoneNo for the user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "User-Write-Json-Example:",
          "content": "{\n \t \"email\" : \"abey@mail.com\",\n \t \"password\" : \"lobverysgig\",\n \t \"dob\" : ISODate(\"1994-01-01T00:00:00Z\"),\n \t \"phoneNo\" : 78133398431,\n \t \"gender\" : \"male\",\n \t \"title\" : \"a great wokkaholic gigger\",\n \t \"aboutMe\" : \"a new awesome wokkaholic who enjoys good and creative work\"",
          "type": "json"
        }
      ]
    },
    "description": "<p>this endpoint is responsible for updating an existing user details</p>",
    "version": "0.0.0",
    "filename": "routes/config/user.js",
    "groupTitle": "User",
    "header": {
      "examples": [
        {
          "title": "header-auth-paramters",
          "content": "{\n\t\"apiKey\": \"my secure api key\"\n}\n\n\tOR\n\n{\n\t\"JWT_TOKEN\": \"my random apiker\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "_id",
            "description": "<p>unique id generated as idendier</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>the user email used Registration</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "fullName",
            "description": "<p>fullname firstName and Lastname</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "fullName.first",
            "description": "<p>first Name</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "fullName.last",
            "description": "<p>last Name</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>hashed password</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "gender",
            "description": "<p>user gender</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "dob",
            "description": "<p>date of birth of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "aboutMe",
            "description": "<p>briefs user info for profile</p>"
          },
          {
            "group": "Success 200",
            "type": "string[]",
            "optional": false,
            "field": "skills",
            "description": "<p>arrays of string of skills</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>describing user briefly</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "phoneNo",
            "description": "<p>contact phoneNo for the user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\tHTTP/1.1 201 created\n\t \t{\n\t \t \"_id\" : ObjectId(\"58f3faedd54ab01c60ad5585\"),\n\t \t \"email\" : \"user@keystonejs.com\",\n\t \t \"title\" : \"the only paris kportk in town\",\n\t \t \"skills\" : [ ],\n\t \t \"aboutMe\" : \"a new awesome wokkaholic who enjoys good and creative work that blows mind miles away\",\n\t \t \"dob\" : \"3-12-80\",\n\t \t \"gender\" : \"male\",\n\t \t \"phoneNo\" : 81333984314\n\t \t \"fullName\" : {\n\t \t\t \t\"first\" : \"keystone\",\n\t \t\t \t \"last\" : \"Admin\"\n \t \t}\n \t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UseFail",
            "description": "<p>failure during validation</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 406 unacceptable\n\t{\n\tmgs: \"validation error message object\"\n\t}",
          "type": "json"
        }
      ]
    }
  }
] });
