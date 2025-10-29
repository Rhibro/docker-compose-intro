# Evidence of completion

## Implement CI/CD pipelines for fullstack applications using modern tools

This pipeline:  
- Automatically runs when you push code to develop.  
- Builds and tests both the backend and frontend.  
- Generates and uploads API documentation.  
- Deploys the documentation automatically if all tests pass.  
- Uses modern CI/CD tools like GitHub Actions, Docker, and Node.js.
  
<img width="960" height="516" alt="1 CI CD pipeline fs app" src="https://github.com/user-attachments/assets/9bfab958-85a7-4c21-93ab-79bac6d69311" />
<img width="960" height="516" alt="1 CI CD pipeline fs app actions" src="https://github.com/user-attachments/assets/6dae5ed8-780a-4343-b15a-0828bee7d7e9" />

---

## Containerize fullstack application with Docker for scalable solutions

### Containerize fullstack apps
Each part (frontend, backend, DB, cache) is in its own Docker container.

### Use Docker for scalable solutions
Multi-stage builds for lightweight images; docker-compose orchestration enables scaling and independent service management.

### Development & Production support
Frontend has dev and prod stages; backend optimized for prod dependencies.

### Data persistence & environment management
DB uses volumes; .env variables configure services.

### Test automation support
Tester service builds API in builder stage and runs tests in isolation.

**Dockerfile frontend**  
**DockerFile API (backend)**  
**DockerFile root**  

<img width="960" height="516" alt="2 Containerize DockerFiles" src="https://github.com/user-attachments/assets/3a833fe8-e2ed-43c5-a539-82aadbd0180d" />

---

## Design & implement microservice-based systems for modular development

For our group project, we implemented a microservices-based architecture. Even though this is a school project, we aimed to follow best practices for building scalable and maintainable applications. We decided to create three separate frontends, which allows us to scale different parts of the application independently. For example, if more drivers are needed, we can scale the driver frontend without allocating unnecessary resources to the other frontends.

Additionally, this separation improves maintenance and reliability. If a bug occurs in one frontend, we can address it without impacting the functionality of the others, ensuring that users can continue to access the remaining services uninterrupted.

<img width="960" height="564" alt="Passed all checks" src="https://github.com/user-attachments/assets/a7f70a86-6424-4f15-99c6-a7b2b637e0b2" />

---

## Optimize fullstack performance using caching and render reduction

I have implemented this caching service for the front and back end. This saves time by caching the large dependencies and eliminates the need to re-install them every run. There’s also a condition that if the package.json changes for instance if I had to install a new dependency it would then install the new package.json.   

There are also examples of the following in this same file:

**Docker: Layer caching**  

Docker builds reuse cached layers, reducing rebuild time.

**Docs generation: Artifact caching**  

Uploads/reuses generated OpenAPI docs, skipping redundant regeneration.

**Overall pipeline: Reduced re-rendering / reprocessing**

Steps are modular, conditional, and incremental — all improving performance.

<img width="308" height="183" alt="4 Caching example" src="https://github.com/user-attachments/assets/09aae959-1b48-4a2f-89fd-22246c1c4163" />

---

## Use monitoring and logging tools to diagnose and solve issues in cloud applications

I used Azure App Service Log Stream to monitor the runtime behavior of my deployed Node.js API (rhiswebapp).  
The log stream provides real-time output directly from the web app container, allowing me to verify that the server starts correctly and is listening on the expected port (http://0.0.0.0:3000).  
This tool can also be used to diagnose issues such as deployment failures, connection errors, or environment variable problems.  
In the screenshot, the log confirms a successful startup, which demonstrates that logging and monitoring are correctly configured and operational.

<img width="960" height="564" alt="5 all clear" src="https://github.com/user-attachments/assets/41048e0a-4421-49f4-b124-a6b13e863003" />

---

## Integrate AI-driven tools into a CI/CD pipeline

In our group project, we integrated GitHub Copilot, an AI-driven development tool, directly into our GitHub workflow and VS Code environment.

### AI Code Review
Copilot automatically added comments and suggestions in our Pull Request Overview, identifying potential improvements before merging code.  
This automated review step integrates AI into our CI/CD pipeline, improving code quality and reducing manual review time.

### AI-assisted Development
During coding, Copilot suggested code completions, boilerplate functions, and testing patterns, helping us maintain consistent code across the backend and frontend.

<img width="960" height="516" alt="6 AI tools coPilot PR Overview" src="https://github.com/user-attachments/assets/c15b615b-9db3-4d9d-bd7c-d8e81ab65e5b" />

---

## Implement a CI/CD pipeline supporting agile development

For the group project our team implemented a CI/CD pipeline using GitHub Actions that fully supports agile development practices. The pipeline automatically triggers on every push to the develop branch, ensuring rapid integration of code changes.  

We have set up our projects on GitHub so we cannot perform a PR without another group member approving the PR. This involves the second group member reviewing the changes made, reading over the CoPilot overview, looking at merge conflicts, then finally approving the PR. This allows for group members to be more involved in all parts of the project, not just the code they are working on.  

<img width="960" height="564" alt="7 Agile CI CD" src="https://github.com/user-attachments/assets/fca2e560-cf7c-4bed-917e-721324d605a4" />

---

## Configure a CI/CD pipeline with automated frontend & backend testing

The CI/CD pipeline automatically runs backend tests located in the api folder using the npm test command. This ensures that the API is verified before any deployment proceeds. The pipeline also runs automated frontend tests through npm test in the frontend directory, ensuring that both parts of the fullstack application are validated.

The deployment job is configured with `needs: build-and-test`, meaning it only executes if all tests in the previous job succeed. If any test fails, deployment is automatically blocked, ensuring that only stable, verified code is deployed.

Once all automated tests have passed, the pipeline deploys the API documentation to GitHub Pages. This continuous delivery stage confirms that deployment only occurs when the system is verified and stable.

<img width="120" height="38" alt="8 Automated test API" src="https://github.com/user-attachments/assets/2ab690dc-309a-4546-b221-50beaeed186b" />
<img width="115" height="55" alt="8 Automated test Frontend" src="https://github.com/user-attachments/assets/9e45c045-b2e5-4cc3-9aed-c7389a8a4b82" />
<img width="254" height="47" alt="8 Automated test Proof2" src="https://github.com/user-attachments/assets/73f654ec-5e89-4d45-8a75-0792dff141e2" />
<img width="173" height="67" alt="8 Automated test Proof3" src="https://github.com/user-attachments/assets/7886c153-ece7-4053-9363-af71b59c8677" />

---

## Implement an automated documentation process in a CI/CD pipeline

The CI/CD pipeline automatically generates and deploys API documentation whenever new code is pushed to the develop branch.

After all tests pass, the pipeline runs a documentation generation stage using Redoc CLI, converting the OpenAPI specification (openapi.json) into a formatted HTML documentation site.

<img width="564" height="427" alt="9 Automated Docs openapi json" src="https://github.com/user-attachments/assets/9813a7a8-961e-4597-aae5-5cb1e32505de" />
<img width="955" height="404" alt="9 Automated Docs index html" src="https://github.com/user-attachments/assets/a4dc3dd5-5b07-4c9d-b234-a5cb4718fca7" />


