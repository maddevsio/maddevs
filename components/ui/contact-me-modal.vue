<template>
  <modal name="contact-me">
    <img src="../../assets/img/common/close-icon.svg" class="close-modal" alt="Close modal">
    <form class="footer-form form"> 
      <div class="fields-list">
        <div class="field-item">
          <p class="field-name required">Full Name</p>
          <input type="text" class="entry-field" placeholder="John Smith">
        </div>
        <div class="field-item">
          <p class="field-name required">Work email</p>
          <input type="email" class="entry-field" placeholder="your@company.com">
        </div>
        <div class="field-item">
          <p class="field-name">Phone number</p>
          <input type="text" class="entry-field" placeholder="Enter phone number">
        </div>
      </div>
      <div class="form-checkboxes">
        <label class="form-checkbox-label required" for="privacy-policy">I confirm that I have read and accepted Mad Devs’ <br> Privacy Policy
          <input class="form-checkbox-input" id="privacy-policy" type="checkbox" name="Privacy policy">
          <span class="checkmark"></span>
        </label>
        <label class="form-checkbox-label" for="marketing-communications">I agree to get Mad Devs’ discount offers and other <br> marketing communications
          <input class="form-checkbox-input" id="marketing-communications" type="checkbox" name="Marketing communications">
          <span class="checkmark"></span>
        </label>
      </div>
      <button class="button-default red-text-and-border">Сontact Me</button>
    </form>
  </modal>
</template>

<script>
export default {
  name: 'ContactMe'
};
</script>
