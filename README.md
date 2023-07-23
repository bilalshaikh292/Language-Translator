# Language-Translator
Language Translator Made using HTML5, CSS3, JS And PHP.

steps to run the project.

1) Either clone or download project in zip format.
2) Open xampp control control panel and open start Apache and MySQL
3) Paste the project in ..//xampp/htdocs/project/
4) Open chrome browser and type localhost/Language-Translator/
5) This will take you to the landing page i.e index.html
6) now you can use the language Translator.

note:

1) If you try to run the directly i.e without localhost it will not run and give an error "Access to XMLHttpRequest at 'file:///C:/xampp/htdocs/language%20Translator/php/process.php' from origin 'null' has been blocked by CORS policy: Cross origin requests are only supported for protocol schemes: http, data, isolated-app, chrome-extension, chrome, https, chrome-untrusted." as the project requires http or https protocol.
2) Runing the project in normal browsers gives error some time "Uncaught (in promise) Error: A listener indicated an asynchronous response by returning true, but the message channel closed before a response was receive". so it is recommend to run the project in incognito mode.
3) converting languages some time takes few second as php is used.As such project works well some time it gives fatal error while converting becuase of server error 

credits to Levan Velijanashvili for php library "https://github.com/Stichoza/google-translate-php".
