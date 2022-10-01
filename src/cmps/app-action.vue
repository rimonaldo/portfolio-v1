<template>
  <div class="call-to-action">

    <h2>Lets wrok together!</h2>
    <p>If you think i can fit in your team, ill be honored to have you invest another minute of your time. <br> Send me a message by filling your email: <br> </p>

    <form ref="form" @submit.prevent="sendEmail">
      <div class="top">
        <input v-model="mail" type="email" ref="msg"  placeholder="email@example.com">
        <button type="submit" class=" main-btn">Say Hello!</button>
      </div>
      <textarea name="message" id="" cols="30" rows="3" v-model="showMail" ></textarea>
    </form>
    
  </div>
</template>
<script>
import emailjs from '@emailjs/browser';
export default {
  name: 'ProjectApp',
  components: {},
  data() {
    return {
      mail:'',
      msg:` ${this.showMail}`
    };
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
  computed: {
    showMail(){
      return `Hello Rimon! we might have a job offer for you! we contacted you through: ${this.mail||''}`
    }
  },
  unmounted() { },
};
</script>
