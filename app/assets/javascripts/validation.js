// Config
const defaultErrorHeading = 'There\'s been a problem'
const defaultErrorDescription = 'Check the following'
const defaultErrorMessage = 'There is an error'

function clearValidation () {
  $('.govuk-error-summary').remove()

  $('.govuk-form-group--error').each(function () {
    $(this).removeClass('govuk-form-group--error')
  })

  $('.govuk-error-message').each(function () {
    $(this).remove()
  })

  $('.form-group-error').each(function () {
    $(this).removeClass('form-group-error')
  })
}

function checkTextFields (errors) {
  $(document).find('input[type="text"],input[type="password"], textarea').each(function () {
    var $fieldset = $(this).parents('fieldset')
    var label = $(this).parent().find('label').clone().children().remove().end().text()

    if ($fieldset.attr('data-required') !== undefined && $(this).val() === '' && !$(this).parent().hasClass('js-hidden')) {
      if ($(this).attr('id') === undefined) {
        $(this).attr('id', $(this).attr('name'))
      }

      errors.push(
        {
          id: $(this).attr('id'),
          name: $(this).attr('name'),
          errorMessage: $fieldset.attr('data-error') || defaultErrorMessage,
          label: label,
          type: 'text, password'
        }
      )
    }
  })
  return
}

function checkSelectors (errors) {
  var checked = []

  $(document).find('input[type="radio"], input[type="checkbox"]').each(function () {
    var $fieldset = $(this).parents('fieldset')
    var label = $fieldset.find('legend').clone().children().remove().end().text()

    if ($fieldset.attr('data-required') !== undefined && $fieldset.find(':checked').length === 0) {
      if ($(this).attr('id') === undefined) {
        $(this).attr('id', $(this).attr('name'))
      }

      if (checked.indexOf($(this).attr('name')) < 0) {
        checked.push($(this).attr('name'))
        errors.push(
          {
            id: $(this).attr('id'),
            name: $(this).attr('name'),
            errorMessage: $fieldset.attr('data-error').toLowerCase() || defaultErrorMessage.toLowerCase(),
            label: label,
            type: 'text, password'
          }
        )
      }
    }
  })
}

function appendErrorSummary (errors) {
  console.log(errors)
  var summaryNotPresent = $(document).find('.govuk-error-summary').length === 0
  var errorHTML = errors.reduce((res, error) => res + (`<li><a href="#${error.id}">${error.errorMessage}</a></li>`), '')
  var summary = '<div class="govuk-error-summary" role="alert" aria-labelledby="error-summary-title" tabindex="-1" data-module="govuk-error-summary">' +
    '<h2 class="govuk-error-summary__title" id="error-summary-title">' + defaultErrorHeading + '</h2>' +
    '<div class="govuk-error-summary__body">' +
    '<ul class="govuk-error-summary__list">' + errorHTML + '</ul>' +
    '</div>' +
    '</div>'
  if (summaryNotPresent) {
    $('form').before(summary)
  }
}

function appendErrorMessages (errors) {
  for (var i = 0; i < errors.length; i++) {
    const error = errors[i]
    const $input = $(document).find(`#${error.id}`)
    var $formgroup = $input.parents('.govuk-form-group')
    console.log($input)
    console.log($formgroup)
    if ($formgroup.hasClass('govuk-form-group--error')) {
      break
    }

    $formgroup.addClass('govuk-form-group--error')

    if ($formgroup.find('input[type="text"], input[type="password"]').length > 0 || $formgroup.find('textarea').length > 0) {
      if ($formgroup.find('.form-date').length > 0) {
        $formgroup.find('.form-date').before(
          '<span class="error-message">' +
          error.errorMessage +
          '</span>'
        )
      } else {
        $input.before(
          '<span class="govuk-error-message">' +
          error.errorMessage +
          '</span>'
        )
      }
    } else if ($formgroup.find('input[type="radio"]').length > 0 || $formgroup.find('input[type="checkbox"]')) {
      $formgroup.find('legend').append(
        '<span class="error-message">' +
        error.errorMessage +
        '</span>'
      )
    }
  }
}

$(document).on('submit', 'form', function (e) {
  const requiredFieldsPresent = $(document).find('[data-required]').length > 0

  clearValidation()

  if (requiredFieldsPresent) {
    const errors = []

    checkTextFields(errors)
    checkSelectors(errors)
    console.log(errors)

    if (errors.length > 0) {
      e.preventDefault()
      appendErrorSummary(errors)
      appendErrorMessages(errors)
      $(document).scrollTop(0)
    }
  }
})
