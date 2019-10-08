export enum AuthenticationConstants {
      HOME = '/home',
      AUTHENTICATION = 'LoginPageController/',
      HVAC_ROUTE = '/hvacroute/hvacdashboard',


      /* User Messages */

      INVALID_USER = 'Invalid User Credentials.!',


    /* Bad Request or Response */
      UNAUTHOIZED_USER = '401 - The requested page needs a username and a password.!',
      INVALID_URL = '404 - Inavlid URL found, Please contact administrator.!',
      INVALID_REQUEST = '400 - Inavlid request submitted.!',
      ACCESS_FORBIDDEN = '403 - Access is forbidden to the requested page',
      METHOD_NOT_ALLOWED = '405 - The method specified in the request is not allowed.',
      PROXY_AUTHENTICATION = '407 - You must authenticate with a proxy server before this request can be served.',
      REQUEST_TOO_LONG = '408 - The request took longer than the server was prepared to wait.',
      URL_CONFLICT = '409 - The request could not be completed because of a conflict.!',
      INTERNAL_ERROR = '500 - The request was not completed. The server met an unexpected condition.',
      NOT_IMPLEMENTED = '501 - The request was not completed. The server did not support the functionality required.!',
      BAD_GATEWAY = '502 - The request was not completed. The server received an invalid response from the upstream server.',
      SERVICE_UNAVAILABLE = '503 - The request was not completed. The server is temporarily overloading or down.',
      GATEWAY_TIMEDOUT = '504 - The gateway has timed out.',
      VERSION_NOT_SUPPORTED = '505 - The server does not support the "http protocol" version.!',
      UNSUPPORTED_MEDIA_TYPE = '415 - The server will not accept the request, because the mediatype is not supported .',
      REQUEST_URL_LONG = '414 - The server will not accept the request, because the url is too long. Occurs when you convert a "post" request to a "get" request with a long query information .'
   }
