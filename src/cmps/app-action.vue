<template>
  <div class="call-to-action">

    <h2>Lets wrok together!</h2>
    <p>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions,
      our support team would be happy to help you.</p>

    <form ref="form" @submit.prevent="sendEmail">
      <input type="email" name="user_email" placeholder="email@example.com">
      <button type="submit" class=" main-btn">Get Started For Free</button>
    </form>

  </div>
</template>
<script>
import emailjs from '@emailjs/browser';
export default {
  name: 'ProjectApp',
  components: {},
  data() {
    return {};
  },
  created() { },
  methods: {
    sendEmail() {
      emailjs.sendForm('service_yz0s5jo', 'template_mfa7hl5', this.$refs.form, 'okVPqSb_o_u3PnW-1')
        .then((result) => {
          console.log('SUCCESS!', result.text);
        }, (error) => {
          console.log('FAILED...', error.text);
        });
    }
  },
  computed: {},
  unmounted() { },
};
</script>
