const AdminBro = require('admin-bro')
const { sort, timestamps } = require('./sort')

module.exports = {
  name: 'User (custom actions example)',
  sort,
  properties: {
    ...timestamps,
    'auth.password': {
      type: 'password'
    }
  },
  actions: {
    detailedStats: {
      actionType: 'resource',
      icon: 'Apps',
      label: 'Resource statistics',
      component: AdminBro.require('../components/detailed-stats'),
      handler: async (request, response, data) => {
        return {true: 'ueas'}
      },
      showInDrawer: true,
    },
    dontTouchThis: {
      actionType: 'record',
      label: 'don\'t touch this!!!',
      icon: 'Exit',
      guard: 'You can setup guards before an action - just in case.',
      component: AdminBro.require('../components/dont-touch-this-action'),
      handler: async (request, response, data) => {
        return {
          record: data.record.toJSON()
        }
      }
    },
    edit: { isAccessible: ({ currentAdmin }) => currentAdmin && currentAdmin.role === 'Admin' },
    delete: { isAccessible: ({ currentAdmin }) => currentAdmin && currentAdmin.role === 'Admin' },
    new: { isAccessible: ({ currentAdmin }) => currentAdmin && currentAdmin.role === 'Admin' },
  }
}

// 'user-ninja'