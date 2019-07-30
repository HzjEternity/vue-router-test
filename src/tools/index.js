export function beforeRouteEnter (to, form, next) {
  next((vm) => {
    console.log(666666666, vm)
  })
}
