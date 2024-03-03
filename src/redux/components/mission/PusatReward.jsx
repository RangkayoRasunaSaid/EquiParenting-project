// components/mission/PusatReward.jsx
import { connect } from 'react-redux'; // Import connect
import { fetchStatsForAllMembers } from './actions'; // Import action creators

// Use connect to connect your component to Redux
const mapStateToProps = (state) => ({
  members: state.members,
  stats: state.stats,
});

const mapDispatchToProps = {
  fetchStatsForAllMembers,
};

export default connect(mapStateToProps, mapDispatchToProps)(PusatReward);