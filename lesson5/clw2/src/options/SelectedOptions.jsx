import { connect } from 'react-redux';
import Options from "./Options.jsx";
import { toggleOption } from "./options.actions";
import { selectedOptionsSelector } from './options.selectors';

const mapStateToProps = state => {
  return ({
    options: selectedOptionsSelector(state),
  });
}

const mapDispatchToProps = {
  moveOption: toggleOption,
}

export default connect(mapStateToProps, mapDispatchToProps)(Options);