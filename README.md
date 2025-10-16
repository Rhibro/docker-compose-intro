# Task 5: Understanding pipeline failures

## 🎯 Goal: Learn how to debug broken pipelines.

1. How you found the error
   - I pushed the changes and saw that the test failed
<img width="1600" height="852" alt="Skärmbild 2025-09-08 164636" src="https://github.com/user-attachments/assets/b26360ed-2353-47e7-9d7a-a6d52158ab54" />

2. How you fixed it
   - I looked at the log to identify what the issue was and where it was in the code
<img width="1600" height="900" alt="Skärmbild 2025-09-08 164710" src="https://github.com/user-attachments/assets/5350258e-68e8-4af6-a1f7-67d48d048297" />
<img width="1600" height="900" alt="Skärmbild 2025-09-08 164735" src="https://github.com/user-attachments/assets/2342576e-04f5-46ba-966d-11d17bde6015" />

3. How you verified the pipeline was green
   - I fixed the broken code pushed the changes and went back to the log to check that everything run smoothly
<img width="1600" height="852" alt="Skärmbild 2025-09-08 165101" src="https://github.com/user-attachments/assets/c424d2e4-1972-4e8c-93fe-59143d370ef3" />

# The First Step to Edge - Preview Deployments

<img width="1600" height="852" alt="URL preview" src="https://github.com/user-attachments/assets/8aa9be1b-3fcd-42ae-8177-ec0650db3c01" />
<img width="1600" height="852" alt="UI change" src="https://github.com/user-attachments/assets/41a7e854-ccff-49e2-956f-69049e2e4869" />

# Establish Staging - The Permanent Test Environment

Here is the link to the permanent Staging URL: https://red-hill-0844a3903.1.azurestaticapps.net/
This link should be shared with stakeholders and product owners because it is more stable. The url preview is temporary and is mainly for code reviews. 

# Tool Choice

I chose Vercel for my production environment due to its seamless integration with GitHub, which allows for automatic deployments from my repository. Vercel's optimization for modern frontend frameworks ensures that my application performs efficiently. The global CDN enhances load times, and the ease of use provides a great developer experience. The ability to preview deployments before merging changes also facilitates better collaboration and quality assurance.

