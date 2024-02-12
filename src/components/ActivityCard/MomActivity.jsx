import ButtonBack from '../ButtonBack';
import ButtonInfoMom from './ButtonInfoMom';
import ButtonAddActivity from './ButtonAddActivity';
import ActivityCardMom from './ActivityCardMom';
import '../ActivityCard/Activity.css';
import '../landing-page/LandingPage.css';

const MomActivity = () => {
    return (
        <>
            <div className="activity-container flex flex-col mx-auto mt-10 mb-5 pt-3 px-10">
                <div className="flex justify-between">
                    <div>
                        <ButtonBack />
                    </div>
                    <div>
                        <h1 className="ml-2 font-bold text-ungu1">Aktivitas Bunda</h1>
                    </div>
                    <div className='z-40'> 
                        <ButtonInfoMom/>
                    </div>
                </div>
                <div className='flex lg:py-5'>
                    <ActivityCardMom /> 
                </div>
            </div>
            <div className='flex justify-center mb-5 z-40'>
                <ButtonAddActivity />
            </div>
        </>
    );
}

export default MomActivity;
