<template>
  <div>
    <page-title title="Contact Me"></page-title>
    <div class="card">
      <div class="section"></div>
      <div class="container">
        <div class="row">
          <form class="col s12" @submit.prevent="handleSubmit">
            <div class="row">
              <div class="input-field col s12 m6 l6">
                <input v-model="name" type="text" />
                <label>Name</label>
              </div>
              <div class="input-field col s12 m6 l6">
                <input v-model="email" type="text" />
                <label>Email</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12 m12 l12">
                <textarea v-model="message" class="materialize-textarea"></textarea>
                <label>Message</label>
              </div>
            </div>
            <div class="button-line center-align">
              <button class="btn waves-effect waves-light teal lighten-2" type="submit" name="action">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
      <div class="section"></div>
    </div>
  </div>
</template>

<script>
import PageTitle from '../../components/PageTitle'

export default {
  components: {
    PageTitle
  },
  data () {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {
    handleSubmit () {
      this.name = ''
      this.email = ''
      this.message = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.materialize-textarea {
  min-height: 100px;
}
</style>
