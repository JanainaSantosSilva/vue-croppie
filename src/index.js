import VueCroppieComponent from './VueCroppieComponent'

const VueCroppie = {
  install (app, options) {
    app.component(VueCroppieComponent.name, VueCroppieComponent)
  }
}

if (window && window.app) {
  app.use(VueCroppie)
}

export default VueCroppie
export { VueCroppieComponent }