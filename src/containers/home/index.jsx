import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import HomePage from 'components/HomePage';
import { CurrencyService } from 'services';
import { bindActionCreators } from 'redux';

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
    CurrencyService: bindActionCreators(CurrencyService, dispatch)

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomePage));