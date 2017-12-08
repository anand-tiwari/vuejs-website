var routes = [
  {
    method: 'GET',
    url: '/backend/users',
    response: {
      status: 200,
      data: [{
        username: 'abc',
        fullname: 'abc def',
        role: 'admin'
      },
      {
        username: 'abc x',
        fullname: 'abc x def',
        role: 'admin'
      },
      {
        username: 'abc 4',
        fullname: 'abc 4 def',
        role: 'regular'
      }]
    }
  },
  {
    method: 'GET',
    url: '/backend/products',
    response: {
      status: 200,
      data: [{
        name: 'Samsung',
        cost: '20k'
      },
      {
        name: 'iphone',
        cost: '20k'
      },
      {
        name: 'lg',
        cost: '20k'
      }]
    }
  }
]

export default routes
