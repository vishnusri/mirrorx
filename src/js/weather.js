/* global $ */

import 'simpleweather'

// scrape weather when page loads
scrapeWeather('f')

// and then every 15 mins afterward
setInterval(() => {
  scrapeWeather('f')
}, 15 * 60000)

/* function definitions */

function scrapeWeather (units) {
  // Docs at http://simpleweatherjs.com
  $.simpleWeather({
    location: 'Chicago, IL',
    woeid: '',
    unit: units,
    success: (weather) => {
      setWeather(weather)
    },
    error: (error) => {
      setElementText('#hi-temp', '-')
      setElementText('#lo-temp', '-')
      console.error(error)
    }
  })
}

function setWeather (data) {
  setImageSrc('#weather-icon', data.image)
  setElementText('#hi-temp', data.high)
  setElementText('#lo-temp', data.low)
  setElementText('#temp-units', `°${data.units.temp}`)
}

function setImageSrc (el, src) {
  $(el).attr('src', src)
}

function setElementText (el, text) {
  $(el).text(text)
}
