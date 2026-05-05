How I approached this assignment
I started by breaking the problem into three clear steps: data transformation, existence check, and synchronization. This helped me focus on building the logic in small, testable pieces rather than trying to solve everything at once.
1. Understanding the data flow
The first thing I clarified was how data moves through the system:
Input JSON → Mapping rules → Pipedrive payload → API calls
Once that was clear, the rest of the design became much easier.

2. Making the mapping dynamic
Instead of hardcoding field mappings, I used a configuration-driven approach with mappings.json.
To support nested fields like "phoneNumber.home", I implemented a small utility to resolve values dynamically from the input object.
This makes the system flexible — new fields can be added without changing the core logic.

3. Separating responsibilities
I structured the project into layers so each part has a clear role:
Mapper → builds the payload
Service layer → handles API calls
Utils → reusable helpers
Main function → orchestrates the flow
This keeps the code easy to read and maintain.

4. Implementing sync logic
I followed a simple “search-before-create” approach:
Search for a person using the mapped name
If found → update
If not → create
This prevents duplicate records in Pipedrive.

5. Handling edge cases
I added checks for:
Missing required fields (like name)
Invalid mapping paths (handled safely with optional chaining)
API errors (handled separately for response vs network issues)

6. Iterating and improving
After getting the basic flow working, I
Cleaned up the structure
Split code into modules
Improved error handling
Ensured the payload matches Pipedrive’s expected format 



