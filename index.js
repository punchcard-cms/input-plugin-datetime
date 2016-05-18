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
    datetimeDate: {
      validation: {
        function: 'datetimeValidation',
        on: 'blur',
      },
      label: 'Date',
      type: 'date',
      placeholder: 'Datetime',
      settings: {
        empty: true,
      },
    },
    datetimeTime: {
      validation: {
        function: 'datetimeValidation',
        on: 'blur',
      },
      label: 'Time',
      type: 'time',
      placeholder: 'Datetime',
      settings: {
        empty: true,
      },
    },
  },
  html: '<label for="{{datetimeDate.id}}">{{datetimeDate.label}}</label><input type="{{datetimeDate.type}}" id="{{datetimeDate.id}}" name="{{datetimeDate.name}}" value="{{datetimeDate.value}}" placeholder="{{datetimeDate.placeholder}}" /><label for="{{datetimeTime.id}}">{{datetimeTime.label}}</label><input type="{{datetimeTime.type}}" id="{{datetimeTime.id}}" name="{{datetimeTime.name}}" value="{{datetimeTime.value}}" placeholder="{{datetimeTime.placeholder}}" />',
};
