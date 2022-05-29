import ProfileHeader from '../../components/Profile/ProfileHeader/ProfileHeader'
import ProfilePosts from '../../components/Profile/ProfilePosts/ProfilePosts'
import './ProfilePage.css'

const ProfilePage = () => {
    return (
        <div className="profile-container border">
            <ProfileHeader/>
            <div className="empty-space"> 
            </div>
            <ProfilePosts/>
        </div> 
    )
}

export default ProfilePage