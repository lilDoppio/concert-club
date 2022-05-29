import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "../../..";
import './PostCommentSwiper.css'
import "swiper/css";
import "swiper/css/pagination";

const PostCommentSwiper = observer(() => {
    const {comment} = useContext(Context)

    return (
        <Swiper
            slidesPerView={"auto"}
            spaceBetween={30}
            pagination={{
            clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
        >
            {comment.postComments?.map(comment => {
                return <SwiperSlide key={comment.email}>
                    <div className='comment'>
                        <h3 className='comment-title'>{comment.name}</h3>
                        <p className='comment-email'>{comment.email}</p>
                        <p className='comment-body'>{comment.body}</p>
                    </div>
                </SwiperSlide>
            })}
        </Swiper>
    )
})

export default PostCommentSwiper