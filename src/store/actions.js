export default {
  initFormObject(context, payload) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        context.commit('updateInfo');
        console.log(payload);

        resolve('1111111')
      }, 1000)
    })
  }
}
