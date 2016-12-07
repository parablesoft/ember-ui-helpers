import Ember from 'ember';
import AutoFocusControl from "../mixins/auto-focus-control";

const {TextArea} = Ember;
export default TextArea.extend(AutoFocusControl,{});
