# Branch lazy-loading
lazy loading splits the application into smaller bundles, a good approach to increase performance

![new-bundle2](https://user-images.githubusercontent.com/47106171/180120544-88b49bb9-aa56-4a31-9d47-d91988410f25.gif)

# Branch error-boundaries
Everything going well

![image](https://user-images.githubusercontent.com/47106171/180123033-0392d316-dea8-4847-8915-2933d63ba31b.png)

At some point, array becomes object `const j = { a: "joao" }`

![image](https://user-images.githubusercontent.com/47106171/180123148-c79fe545-eb6f-4456-8853-de28a155e3de.png)

This approach allows our application to keep running even if a part is broken. As it is possible to catch the error, we can send it to some monitoring and fix it.

# Branch use-memo

working
