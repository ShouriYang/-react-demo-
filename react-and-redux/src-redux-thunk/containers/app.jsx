
import {connect} from 'react-redux' //连接redux和react组件
import {increment,decrement,incrementAsync}  from '../redux/actions'
import Counter from '../components/counter'

export default connect(
  state =>({count:state}),
  {increment,decrement,incrementAsync}
)(Counter); //connect返回一个函数