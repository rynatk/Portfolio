import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import React from 'react';
import ReactDOM from 'react-dom';

import Router from './router';
import Portfolio from './components/Portfolio.jsx'

_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
};

$(() => {
  let router = new Router();

  ReactDOM.render(
    <Portfolio router={router} />,
    document.getElementById('portfolio')
  );
});
