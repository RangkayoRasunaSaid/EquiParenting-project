// components/mission/Mission.jsx
import { connect } from 'react-redux'; // Import connect
import { fetchMembers, fetchCategories } from './actions'; // Import action creators

// Use connect to connect your component to Redux
const mapStateToProps = (state) => ({
  members: state.members,
  categories: state.categories,
});

const mapDispatchToProps = {
  fetchMembers,
  fetchCategories,
};

export default connect(mapStateToProps, mapDispatchToProps)(Mission);