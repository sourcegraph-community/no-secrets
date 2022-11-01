// version 0.0.4
// Generate bookmarklet: https://caiorss.github.io/bookmarklet-maker/

var newURL = window.location.host + window.location.pathname

window.location.href = 'https://sourcegraph.com/search/console' +
                        '?q=repo%3A' +
                        newURL +
                             '%24%20%0A%0Apatterntype%3Aregexp%20%0A%0Af%3ACargo.lock%20openssl-src%20AND%20version%5Cs*%3D%5Cs*%22300%5C.%5B0-9%5C.%5D%2B%5C%2B3%5C.0%5C.%5B0-6%5D%0A%0Afork%3Ayes%20';