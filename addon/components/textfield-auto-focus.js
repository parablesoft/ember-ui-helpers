import Ember from 'ember';
import AutoFocusControl from "../mixins/auto-focus-control";

const {TextField} = Ember;
export default TextField.extend(AutoFocusControl,{});
