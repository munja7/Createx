import "./fonts";
import './common/index';
import initBlocks from './blocks';
import $ from "jquery"

$(() => {
  initLayout();
  initBlocks();
  initPages();
});