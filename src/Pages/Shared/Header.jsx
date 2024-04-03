import logo from '../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='flex flex-col items-center my-5 space-y-2'>
           <img src={logo} alt="" />
           <p className='text-gray-500'>Journalism Without Fear or Favour</p>
           <h3 className='text-2xl font-semibold text-gray-500'>{moment().format("dddd, MMMM D , YYYY")}</h3>
        </div>
    );
};

export default Header;