# zendesk-api
Useful functions to access the Zendesk API

----------

How to use:
 - The zendesk-api by is the method that he found to easily capture informations by zendesk whit your API
 - The zendesk-api is one Class. So, you should instantiate it.
 - To instantiate, do like this:
 ```javascript
const zendesk = new ZendeskApi(
  'YourZendekUrl',
  'YourEmailToAccessZendesk',
  'YourTokenToUseZendeskAPI',
  'YourLanguage'
)
```

----------

Availabel functions:
 - `getUsers`: capture all users registered in your zendesk;
