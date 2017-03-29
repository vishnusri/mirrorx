/* global $ */

import moment from 'moment'

// populate time display when page loads
setDisplay()

// and then every 60 seconds afterward
setInterval(() => {
  setDisplay()
}, 60000)

/* function definitions */

function setDisplay () {
  setElementText('#day-of-week', 'dddd')
  setElementText('#date', 'MMMM Do, YYYY')
  setElementText('#time', 'h:mm A')
}

function setElementText (el, format) {
  $(el).text(moment().format(format))
}
