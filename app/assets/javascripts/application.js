/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
  MOJFrontend.initAll()
})

// Submit form when any change detected
$('.js-auto-submit').on('change', function(){
  $(this).closest('form').submit();
});

new MOJFrontend.ButtonMenu({
  container: $('.moj-button-menu'),
  mq: '(min-width: 200em)',
  buttonText: 'Actions',
  menuClasses: 'moj-button-menu__wrapper--right'
});

