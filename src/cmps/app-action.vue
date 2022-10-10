<template>
  <div class="action-container">
    <div class="call-to-action">

      <h2>Let’s work together!</h2>
      <!-- <p>If you are interested in getting to know more about me, and think I would be a good fit for your team, I would
        appreciate hearing from you!
        <br>
      </p> -->

      <form ref="form" @submit.prevent="sendEmail">
        <div class="top">
          <input class="email-input" v-model="mail" type="email" ref="msg" placeholder="email@example.com">
          <button  type="submit" class="submit-msg main-btn">Say Hello!</button>
        </div>
        <textarea name="message" id="" cols="30" rows="2" v-model="showMail"></textarea>
      </form>

    </div>
  </div>
</template>
<script>
import emailjs from '@emailjs/browser';
export default {
  name: 'ProjectApp',
  components: {},
  data() {
    return {
      mail: '',
      msg: ` ${this.showMail}`
    };
  },
  created() { },
  methods: {
    sendEmail() {
      const elSub = document.querySelector('.submit-msg')
      emailjs.sendForm('service_yz0s5jo', 'template_mfa7hl5', this.$refs.form, 'okVPqSb_o_u3PnW-1')
      .then((result) => {
          elSub.innerText = 'Message sent! '
          console.log('SUCCESS!', result.text);
        }, (error) => {
          console.log('FAILED...', error.text);
        }); 
    }
  },
  computed: {
    showMail() {
      return `Hello Rimon, I'm interested in talking to you. I contacted you through: ${this.mail || ''}`
    }
  },
  unmounted() { },
};
</script>
