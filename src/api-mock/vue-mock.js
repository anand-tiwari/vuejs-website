import Vue from 'vue'

import mockroutes from '@/api-mock/mock/routes'
import Url from 'url'

let routes = [].concat(mockroutes)

if (process.env.NODE_ENV !== 'production' && !window.concatMockRoutes) {
  Vue.http.interceptors.unshift((request, next) => {
    let urlParse = {}
    if (request.url) {
      urlParse = Url.parse(request.url, true)
    }
    let urlPath = urlParse.pathname
    let urlQuery = urlParse.query
    let route = routes.find((item) => {
      var params = []
      if (urlQuery) {
        for (const i in urlQuery) {
          params.push(i + '=' + urlQuery[i])
        }
      }
      const testPath = urlPath + (params.length > 0 ? '?' + params.join('&') : '')

      var result = (request.method === item.method && testPath === item.url)

      if (!result && request.method === item.method && request.method === 'DELETE') {
        // try to remove the last segment
        var to = urlPath.lastIndexOf('/')
        to = to === -1 ? urlPath.length : to
        var url = urlPath.substring(0, to)

        result = item.url === url
      }

      return result
    })

    if (!route) {
      // we're just going to return a 404 here, since we don't want our test suite making a real HTTP request
      next(request.respondWith({ status: 'Error', statusText: 'Oh no! Not found!' }, {status: 404}))
    } else {
      let validParams = true
      let errors = {}

      if (route.param_body) {
        if (request.body) {
          let body = JSON.parse(request.body)
          for (let i in route.param_body) {
            if (typeof body[route.param_body[i]] === 'undefined') {
              validParams = false
              errors[route.param_body[i]] = ['BLANK', 'Required']
            }
          }
        } else {
          validParams = false
          for (let i in route.param_body) {
            validParams = false
            errors[route.param_body[i]] = ['BLANK', 'Required']
          }
        }
      }

      if (validParams && route.params) {
        for (let i in route.params) {
          if (typeof urlQuery[route.params[i]] === 'undefined') {
            validParams = false
            errors[route.params[i]] = ['BLANK', 'Required']
          }
        }
      }
      if (validParams) {
        next(
          request.respondWith(
            route.response,
            { status: 200 }
          )
        )
      } else {
        next(
          request.respondWith(
            {
              code: 400,
              status: 'Error',
              errors: errors
            },
            { status: 400 }
          )
        )
      }
    }
  })

  window.concatMockRoutes = function (newRoutes) {
    routes = routes.concat(newRoutes)
    if (process.env.NODE_ENV !== 'production') {
      return routes
    }
  }
} else {
  window.concatMockRoutes(routes)
}

export default routes
