import { BsArrowLeftShort } from "react-icons/bs";
import { Link } from "react-router-dom";
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import TaskItem from "./TaskItem";
import { titleCase } from "../Breadcrumbs";
import { formatDate } from "./Aktivitas";

export default function History({ activities, members, setUpdateMembers }) {
    console.log(activities);
    console.log(members);

    const options = {
        stagePadding: 40, items: 3, margin:20, nav:true,
        responsive:{ 0:{ items:1 }, 600:{ items:2 }, 1000:{ items:3 }
        }
    }

    function memberRole(id) {
        for (let i = 0; i < members.length; i++) {
            // Check if the current object's id matches the desired id
            if (members[i].id == id) {
                // Return the member_role if found
                return members[i].member_role;
            }
        }
        return '';
    }

    return (
        <div  className="min-h-screen text-main-color bg-violet-100 my-10 sm:mx-5 md:mx-24 mx-3 sm:p-3 md:p-10 px-3 rounded-[40px]">
                <div className="flex items-center justify-between text-3xl font-semibold px-5 mb-5">
                    <Link to="/mission/daily-mission">
                        <BsArrowLeftShort />
                    </Link>
                    <h1>History</h1>
                    <BsArrowLeftShort className="invisible" />
                </div>
            <div className="bg-white py-5 rounded-[40px] text-center">
                {activities.map(reward =>
                    reward.activities.length > 0 && (
                        <div>
                            <h1 className="mt-5 font-semibold">{`${formatDate(new Date(reward.rewardPeriod.start_date).toLocaleDateString())} - ${formatDate(new Date(reward.rewardPeriod.end_date).toLocaleDateString())}`}</h1>
                            <OwlCarousel className='owl-theme' {...options} key={`carousel_${Date.now()}`} >
                                {reward.activities.map(activity => (
                                    <TaskItem
                                        key={activity.id}
                                        members={members}
                                        activity={activity}
                                        responsible={titleCase(memberRole(activity.id_member)) || activity.id_member.toString()}
                                        setUpdateData={setUpdateMembers}
                                    />
                                ))}
                            </OwlCarousel>
                        </div>
                    )
                )}
            </div>
        </div>
    )
}