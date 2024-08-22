class AppController {
  static getHomePage(request, response) {
    response.statusCode = 200;
    response.end('Hello Holberton School!');
    return response;
  }
}
