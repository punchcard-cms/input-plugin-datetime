'use strict';

/**
 * Datetime Input Plugin
 *
 *
 * A simple plugin for a single date and time
 */
const validation = require('./lib/validation.js');

/**
 * Single Datetime Input Plugin
 * @module datetimeInputPlugin
 */
module.exports = {
  name: 'Datetime',
  description: 'A simple plugin for a single date and time',
  validation: {
    datetimeValidation: validation,
  },
  inputs: {
    datetime: {
      validation: {
        function: 'datetimeValidation',
        on: 'blur',
      },
      label: 'Date',
      type: 'datetime-local',
      placeholder: new Date().toLocaleDateString(),
    },
  },
  html: '<label for="{{datetime.id}}">{{datetime.label}}</label><input type="{{datetime.type}}" id="{{datetime.id}}" name="{{datetime.name}}" value="{{datetime.value}}" placeholder="{{datetime.placeholder}}" />',
};
