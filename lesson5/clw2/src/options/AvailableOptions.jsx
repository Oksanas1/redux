import { connect } from 'react-redux';
import Options from "./Options.jsx";
import { availableOptionsSelector } from "./options.selectors";
import { toggleOption } from "./options.actions";

const mapStateToProps = state => {
  return ({
    options: availableOptionsSelector(state),
  });
}

const mapDispatchToProps = {
  moveOption: toggleOption,
}

export default connect(mapStateToProps, mapDispatchToProps)(Options);