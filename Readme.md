## Flee

An alternative solution for searching 
low-cost flights across Europe.

It consists of two separate services (service and web).
They operate independently and communicate through the neo4j database.

### Service (./service)
This component handles the scraping of data from different airline carriers. At the time of writing, it supports WizzAir and RyanAir, with the capability to add more airlines in the future. 
This service uses two key worker scripts: 
- airports.worker 
- fares.worker

These scripts handle the scraping of airport and fare data, respectively and update the neo4j database with the results.

They can be deployed on any platform that supports Node.js runtime, including AWS and Heroku where they can be scheduled to run periodically at a given interval.
Currently, they operate on a GitHub Actions Runner in a matrix configuration, to optimize scraping speed.

More details about current running configuration can be found in github workflow files `.github/workflows/`

### Web (./web)

This component of Flee provides an interface for users to 
search and filter airports and flights. 
It supports searches for return flights, one-way flights, 
and offers a multi-city mode for chaining trips between multiple cities across different time periods.

The application is built on NextJS 13 and uses React Server Components. It can be installed as a Progressive Web App (PWA) and is optimized for use on mobile devices.