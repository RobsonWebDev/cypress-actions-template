const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjNhY2U0MzdhLTk5OTItNDc4Ni05M2EyLWFhOWI0OWE4ZTBjNy0xNzExMDc1MjAxMTI5IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiNDRhMDUwNWItMTdjNi00YzQ2LWFmM2ItNjQ3YTA1M2U3YzIyIiwidHlwZSI6InQifQ.nV_HBS5qHfBVgqySkBGP35ngEquiOQNWVhcwYNxzjUQ'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
