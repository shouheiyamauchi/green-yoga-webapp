<template>
  <div>
    <page-title title="Contact Me"></page-title>
    <div class="card">
      <div class="section"></div>
      <div class="container">
        <div class="row">
          <form id="contact-me-form" class="col s12" @submit.prevent="handleSubmit">
            <p class="helper-text success">{{ serverSuccess }}</p>
            <p class="helper-text">{{ serverError }}</p>
            <div class="row">
              <div class="input-field col s12 m6 l6">
                <input v-model="form.name" type="text" />
                <label>Name</label>
                <span class="helper-text">{{ validation.name }}</span>
              </div>
              <div class="input-field col s12 m6 l6">
                <input v-model="form.email" type="text" />
                <label>Email</label>
                <span class="helper-text">{{ validation.email }}</span>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12 m12 l12">
                <textarea v-model="form.message" class="materialize-textarea"></textarea>
                <label>Message</label>
                <span class="helper-text">{{ validation.message }}</span>
              </div>
            </div>
            <div class="button-line center-align">
              <button class="btn waves-effect waves-light" :disabled="loading" type="submit" name="action">
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
import { API_URL } from '../../helpers/config'
import axios from 'axios'
import qs from 'qs'
import PageTitle from '../../components/PageTitle'

const FORM_FIELDS = {
  name: '',
  email: '',
  message: ''
}

export default {
  components: {
    PageTitle
  },
  data () {
    return {
      form: { ...FORM_FIELDS },
      validation: { ...FORM_FIELDS },
      serverSuccess: '',
      serverError: '',
      loading: false
    }
  },
  methods: {
    handleSubmit () {
      this.validation = { ...FORM_FIELDS }
      this.serverSuccess = ''
      this.serverError = ''
      const validForm = this.validateForm()

      if (validForm) this.submitMessage()
    },
    validateForm () {
      let invalid

      for (const fieldName in this.form) {
        const fieldValue = this.form[fieldName]
        if (!fieldValue) {
          this.validation[fieldName] = `Please enter your ${fieldName}`
          invalid = true
        } else if (fieldName === 'email' && !this.validEmail(fieldValue)) {
          this.validation[fieldName] = 'Please enter a valid email'
          invalid = true
        }
      }

      return !invalid
    },
    validEmail (emailString) {
      const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return emailRegex.test(emailString)
    },
    submitMessage () {
      this.loading = true

      axios.post(API_URL + 'mailer', qs.stringify(this.form))
        .then(response => {
          this.loading = false
          this.form = { ...FORM_FIELDS }
          this.serverSuccess = 'Thank you for your message! I will get back to you as soon as possible.'
        })
        .catch(error => {
          this.loading = false
          this.serverError = 'Oops! There was an error while trying to send the message. Please try again later.'
        })
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/assets/scss/colors.scss';

.materialize-textarea {
  min-height: 100px;
}

.card {
  background-color: $background-color;
}

.helper-text {
  color: red;
}

.success {
  color: $faded-blue-color;
}
</style>
