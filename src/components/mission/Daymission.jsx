import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import ModalButton from "./modals/ModalButton";
import ModalCreateMember from "./modals/ModalCreateMember";
import MemberItem from "./MemberItem";
import PropTypes from 'prop-types';

const DailyMission = ({ members, setUpdateMembers }) => {

  const mdlBtn = (
    <div role="button" className="text-center mb-5 py-4 md:px-16 rounded-[40px] border-0 shadow-md h-100 bg-main-color text-white flex flex-col justify-between">
        <h5 className="text-2xl font-bold">Tambah</h5>
        <h6 className="text-7xl font-bold">+</h6>
        <h5 className="text-2xl font-bold">Anggota</h5>
    </div>
  )

  const options = {
      stagePadding: 40, items: 2, margin:20, nav:true,
      responsive:{ 0:{ items:1 }, 600:{ items:1 }, 1000:{ items:2 }
      }
  }

  return (
    <div className="m-4 p-sm-3 p-md-4 p-2 ">
        <h1 className="text-center text-3xl mb-2 font-bold">Tim</h1>
        <div className="flex-none lg:flex text-center">
          <ModalButton btnContent={mdlBtn} mdlContent={
            (<ModalCreateMember
              members={members}
              setUpdateMembers={setUpdateMembers} />
              )}
          />
          <OwlCarousel className='owl-theme lg:w-2/3' {...options} key={`carousel_${Date.now()}`} >
            {members.map((member, index) => {              
                return (
                  <MemberItem
                    key={index} 
                    member={member}
                    members={members}
                    setUpdateMembers={setUpdateMembers}
                    className='item'
                  />
                );
            })}
          </OwlCarousel>
        </div>
      </div>
  );
};
// DailyMission.propTypes = {
//   members: PropTypes.arrayOf(PropTypes.shape({
//       id: PropTypes.oneOfType([
//           PropTypes.string,
//           PropTypes.number
//       ]).isRequired,
//       name: PropTypes.string,
//   })).isRequired,
//   setUpdateMembers: PropTypes.func.isRequired,
// };
export default DailyMission;