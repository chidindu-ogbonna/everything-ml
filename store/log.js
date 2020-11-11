export const actions = {
  /**
   * Log event
   * @param {*} param0
   * @param {object} payload
   * @param {string} payload.action
   * @param {string} payload.label
   * @param {string} payload.category
   */
  event({ commit }, payload) {
    const { action, label, category } = payload
    const context = {}
    if (label) context.event_label = label
    if (category) context.event_category = category

    if (this.$gtag) {
      // ensure this is client side & gtag has been loaded
      this.$gtag.event(action, context)
    }
  },

  /**
   * Log error
   * @param {*} param0
   * @param {object} payload
   * @param {string} payload.action
   * @param {boolean} payload.fatal
   * @param {Error} payload.error
   */
  error({ commit }, payload) {
    const { fatal, action, error } = payload

    const context = { fatal }
    context.description = `${action || error.code || ''} - ${
      error.name || ''
    }  - ${error.message || ''}`

    this.$gtag.exception(context)
  },
}
